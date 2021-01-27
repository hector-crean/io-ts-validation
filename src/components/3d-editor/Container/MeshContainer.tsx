import React, { useRef, useState, useCallback, useEffect, Suspense } from "react"
import { useFrame, MouseEvent, PointerEvent, WheelEvent, MeshProps, EventHandlers, GroupProps, ObjectMap  } from "react-three-fiber"
import { Geometry, Mesh } from 'three'; 
import * as THREE from 'three'; 
import { Html, HtmlProps, meshBounds, Loader} from '@react-three/drei'; 
import { IContainer, makeContainer, IFaces, ContainerState, containerConstructors } from '../../../lib/graph'
import { useSpring, animated } from 'react-spring'; 
// For the tooltip
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
//Global State
import { useDispatch } from 'react-redux'; 
import { bringAllContainersIntoFocus, bringContainerIntoFocus } from '../../../store/Editor/action-constructors'; 
import {  plywoodMaterial } from '../../../materials/plywoodMaterial'; 

import R from 'fp-ts/Record'; 

import { 
  CellState,   
  Point3, 
  Building,
  Storey,
  EnvelopeSection, 
  Room,
  WallUnit, 
  FloorUnit, 
  RoofUnit,
  Void,
  Active, 
  Inactive,
  ActiveState
} from '../../../store/Editor/types/CellState'; 
import { getLenses } from '../../../lib/optics/getLenses'; 
import { getPrism } from '../../../lib/optics/getPrism'; 

import { Lens, lens } from 'monocle-ts'; 

//LOAD GEOMETRY/MATERIALS

// Example mesh
import { useGLTF } from '@react-three/drei/useGLTF'
import { GLTF  } from 'three/examples/jsm/loaders/GLTFLoader'

import { GLTFTypeLookup, SwiftGLTF } from '../../../Models/Swift/GLTF-types'


type GLTFResult = GLTF & ObjectMap






// On double click: zoom in and isolate the container -> view from particular angle. 
// useSpring ?  Must be global state ? 


/// Tooltip

const toolTipProps: HtmlProps = {

  prepend: false, // boolean: Project content behind the canvas (default: false)
  center: false, // boolean: Adds a -50%/-50% css transform (default: false)
  fullscreen: false, // boolean: Aligns to the upper-left corner, fills the screen (default:false)
  scaleFactor: 10, // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera.
  zIndexRange: [100, 0], //Array<number> :  Z-order range (default=[16777271, 0])
  portal: undefined // React.MutableRefObject<HTMLElement>: Reference to target container (default=undefined)
  // {...groupProps} // All THREE.Group props are valid
  // {...divProps} // All HTMLDivElement props are valid

}

const ContainerTooltip = (): JSX.Element => {
  const toolTipUseStyles = makeStyles((theme: Theme) =>
    createStyles({
      button: {
        margin: theme.spacing(1),
      },
      customWidth: {
        maxWidth: 500,
      },
      noMaxWidth: {
        maxWidth: 'none',
      },
    }),
  );

  const longText = `
  Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
  Praesent non nunc mollis, fermentum neque at, semper arcu.
  Nullam eget est sed sem iaculis gravida eget vitae justo.
  `;   
    return (
      <Tooltip title={longText} placement="left">
      <Button className={toolTipUseStyles().button}>Default Width [300px]</Button>
      </Tooltip>
    )
}




type MeshState = {
  meshGeometry?: THREE.Geometry | THREE.BufferGeometry,
  meshMaterial: THREE.MeshStandardMaterial,
  meshRef: React.MutableRefObject<typeof Mesh | undefined> | undefined;
  meshHoveredOver: boolean; //usful for ui -> so people know where they're clicking. (possible to turn this feature off ? )
  meshActive: boolean;
  meshVisible: boolean; // for when we want to single out a particular container
}

interface EnvelopeState {
  component: string,
  mesh1: MeshState, 
  mesh2: MeshState
}
interface ViewState {
  internalLightsOn: boolean;
  toolTipVisible: boolean;
}


interface State {
    //model state
    modelState: EnvelopeState,

    viewState: ViewState;

} 


// --| Lenses
const stateLens = Lens.fromProp<State>(); 
const viewStateLens = Lens.fromProp<ViewState>();
const envelopeStateLens = Lens.fromProp<EnvelopeState>()
const meshLens = Lens.fromProp<MeshState>()

const mesh1Lens = envelopeStateLens('mesh1'); 
const meshActiveLens = meshLens('meshActive'); 
// const s = mesh1Lens.composeLens(meshActiveLens).modify((a: boolean) => false)

// --| View and Model state



// --| Action types
export enum ActionTypes {
  ON_CLICK = "ON_CLICK",
  ON_POINTER_OVER = "ON_POINTER_OVER",
  ON_POINTER_OUT = "ON_POINTER_OUT",
  ON_CONTEXT_MENU = "ON_CONTEXT_MENU",
  ON_DOUBLE_CLICK = 'ON_DOUBLE_CLICK'
}

interface onClickAction {
 _tag: typeof ActionTypes.ON_CLICK
 payload: { mouseEvent: MouseEvent }
}
interface onPointerOverAction {
  _tag: typeof ActionTypes.ON_POINTER_OVER
  payload: { pointerEvent: PointerEvent }
}
interface onPointerOutAction {
  _tag: typeof ActionTypes.ON_POINTER_OUT
  payload: { pointerEvent: PointerEvent }
}
interface onContextMenuAction {
  _tag: typeof ActionTypes.ON_CONTEXT_MENU
  payload: { mouseEvent: MouseEvent }
}
interface onDoubleClick<T extends GLTFResult= GLTFResult> {
  _tag: typeof ActionTypes.ON_DOUBLE_CLICK
  payload: {mouseEvent: MouseEvent, gltf: T }
}

// Action types

export type Action = 
| onClickAction
| onPointerOverAction
| onPointerOutAction
| onContextMenuAction
| onDoubleClick

// Action constructors:

export function onDoubleClick<T extends GLTFResult= GLTFResult>(e: MouseEvent, gltf: T): Action {
  return {
    _tag: ActionTypes.ON_DOUBLE_CLICK,
    payload: {mouseEvent: e, gltf:  gltf}
  }
}
export function onClick(e: MouseEvent): Action {
  return {
    _tag: ActionTypes.ON_CLICK,
    payload: {mouseEvent: e }
  }
}
export function onPointerOver(e: PointerEvent): Action {
  return {
    _tag: ActionTypes.ON_POINTER_OVER,
    payload: {pointerEvent: e }
  }
}
export function onPointerOut(e: PointerEvent): Action {
  return {
    _tag: ActionTypes.ON_POINTER_OUT,
    payload: {pointerEvent: e }
  }
}
export function onContextMenu(e: MouseEvent): Action {
  return {
    _tag: ActionTypes.ON_CONTEXT_MENU,
    payload: {mouseEvent: e }
  }
}


// Reducer functions on state : 
const activateMeshOnClick = () => (state: State): State => {
  return {
    viewState: state.viewState, 
    modelState: envelopeStateLens('mesh1')
                  .composeLens(meshLens('meshActive'))
                  .modify((a: boolean) => !a)(state.modelState)
  }
}
const activateMeshOnHoverOver = () => (state: State): State => {
  return {
    viewState: state.viewState, 
    modelState: envelopeStateLens('mesh1')
                .composeLens(meshLens('meshHoveredOver'))
                .modify((a: boolean) => true)(state.modelState)
  }
}
const deactivateMeshOnHoverOut = () => (state: State): State => {
  return {
    viewState: state.viewState, 
    modelState: envelopeStateLens('mesh1')
                .composeLens(meshLens('meshHoveredOver'))
                .modify((a: boolean) => false)(state.modelState)
  }
}

const makeToolTipVisible = () => (state: State): State => {
  return {
      ...state, viewState: viewStateLens('toolTipVisible').modify((a: boolean) => !a)(state.viewState)
  }
}

const updateGeometry = (newGeometry:Geometry | THREE.BufferGeometry  ) => (state: State): State => {
  return {
    viewState: state.viewState,
    modelState: envelopeStateLens('mesh1')
                .composeLens(meshLens('meshGeometry'))
                .modify((a: Geometry | THREE.BufferGeometry | undefined) => {return newGeometry})(state.modelState)
  }
}



const ContainerReducer = (state: State, action: Action) => {
  switch (action._tag) {
    case ActionTypes.ON_CLICK:
      action.payload.mouseEvent.stopPropagation()
      return activateMeshOnClick()(state); 
    case ActionTypes.ON_POINTER_OVER:
      action.payload.pointerEvent.stopPropagation()
      return activateMeshOnHoverOver()(state)
    case ActionTypes.ON_POINTER_OUT:
      action.payload.pointerEvent.stopPropagation()
      return deactivateMeshOnHoverOut()(state);
    case ActionTypes.ON_DOUBLE_CLICK:
      action.payload.mouseEvent.stopPropagation()
      return makeToolTipVisible()(state)      
      // return {...state, meshGeometry: action.payload.gltf.nodes["A-3_1"].geometry }; // double click should probably isolate the mesh
    default:
      throw new Error();
  }
}


interface ContainerMeshProps extends MeshProps {
  componentID: SwiftGLTF
}
/* Elm architecture: model (i.e state), view (i.e manifestation of the state), update (i.e actions dispatched by events to update state) */
export const ContainerMesh = (props: ContainerMeshProps): JSX.Element => {

  

  // const geometryA1 = (useGLTF('/Swift/A1.glb') as GLTFTypeLookup<SwiftGLTF.A1>).nodes["A-1.001_1"].geometry;
  // const geometryA2: Geometry | THREE.BufferGeometry = (useGLTF('/Swift/A2.glb') as GLTFTypeLookup<SwiftGLTF.A2>).nodes["A-2_1"].geometry;
  // const geometryA3: Geometry | THREE.BufferGeometry = (useGLTF('/Swift/A3.glb') as GLTFTypeLookup<SwiftGLTF.A3>).nodes["A-3_1"].geometry;
  // const geometryA4: Geometry | THREE.BufferGeometry = (useGLTF('/Swift/A4.glb') as GLTFTypeLookup<SwiftGLTF.A4>).nodes["A-4_1"].geometry;
  // const geometryA5: Geometry | THREE.BufferGeometry = (useGLTF('/Swift/A5.glb') as GLTFTypeLookup<SwiftGLTF.A5>).nodes["A-5_1"].geometry;

  
  // switch(props.componentID){
  //   case SwiftGLTF.A1:
  //     updateGeometry(geometryA1!)
  //   default: 
  //     updateGeometry(geometryA1!)
  //}
  // console.log(geometryA1); 

  


  // R.lookup(props.componentID)(props.gltf)s
  const initalState: State = {

    modelState: {
      component: 'hello',
      mesh1: {
        meshGeometry: undefined,
        meshMaterial: plywoodMaterial,
        meshRef: undefined,
        meshHoveredOver: false, //usful for ui -> so people know where they're clicking. (possible to turn this feature off ? )
        meshActive: false,
        meshVisible: true, // for when we want to single out a particular container
      },
      mesh2: {
        meshGeometry: undefined,
        meshMaterial: plywoodMaterial,
        meshRef: undefined,
        meshHoveredOver: false, //usful for ui -> so people know where they're clicking. (possible to turn this feature off ? )
        meshActive: false,
        meshVisible: true, // for when we want to single out a particular container
      }
    },

    viewState: {
      internalLightsOn: false,
      toolTipVisible: false,
    }

   
  } 

  const globalDispatch = useDispatch()

  const [state, localDispatch] = React.useReducer(ContainerReducer, initalState);
  return (
    <mesh
      {...props}
      // ref={state.meshRef}
      scale={[10,10,10]}
      receiveShadow={true}
      castShadow={true}
      visible={state.modelState.mesh1.meshVisible}

      // -- Object3D node props
      // position?: Vector3;
      // up?: Vector3;
      // scale?: Vector3;
      // rotation?: Euler;
      // matrix?: Matrix4;
      // quaternion?: Quaternion;
      // layers?: Layers;
      // dispose?: (() => void) | null;

      // -- TGeometry props

      // -- TMaterial props
      // 	clippingPlanes: any;


      /** Update */
      onClick         = {(e: MouseEvent)    => { return localDispatch( onClick(e)             ) }   }
      onPointerOver   = {(e: PointerEvent)  => { return localDispatch( onPointerOver(e)       ) }   }
      onPointerOut    = {(e: PointerEvent)  => { return localDispatch( onPointerOut(e)        ) }   }
      onContextMenu   = {(e: MouseEvent)    => { return localDispatch( onContextMenu(e)       ) }   }
      // onDoubleClick   = {(e: MouseEvent)    => { return localDispatch( onDoubleClick(e, props.gltf[0]) ) }   }
      onPointerUp     = {(e: PointerEvent)  => {  }}
      onPointerDown   = {(e: PointerEvent)  => {}}
      onPointerMove   = {(e: PointerEvent)  => {}}
      onPointerMissed = {(e: React.MouseEvent) => {}}
      onWheel         = {(e: WheelEvent)    => {}}
    >
      <Suspense
      fallback={
        <Html center>
          <Loader />
        </Html>
      }>    

      {/** View */}
      {/** --- Geometry  */}
      {(state.modelState.mesh1.meshGeometry !== undefined) ? 
        <bufferGeometry attach="geometry" {...state.modelState.mesh1.meshGeometry}/> :
        <boxBufferGeometry />
      }

      {/** --- Material  */}
      {(state.modelState.mesh1.meshGeometry !== undefined) ?
        <meshStandardMaterial/> :
        <meshStandardMaterial 
          {...state.modelState.mesh1.meshMaterial}
          color={state.modelState.mesh1.meshHoveredOver || state.modelState.mesh1.meshActive ? '0x555555' : '0x555555'} 
          /> 
      }

      </Suspense>


      {/** --- Tooltip  */}
      {state.viewState.toolTipVisible && 
        <Html>
            <ContainerTooltip/>
        </Html>
      }
    </mesh>
  )
}


// React components
// const AnimatedContainerMesh = animated(ContainerMesh); 
