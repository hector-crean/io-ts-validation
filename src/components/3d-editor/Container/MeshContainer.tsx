import React, { useRef, useState, useCallback, useEffect, Suspense } from "react"
import { useFrame, MouseEvent, PointerEvent, WheelEvent, MeshProps, EventHandlers, GroupProps  } from "react-three-fiber"
import { Geometry, Mesh } from 'three'; 
import * as THREE from 'three'; 
import { Html, HtmlProps, meshBounds, Loader} from '@react-three/drei'; 
import { IContainer, makeContainer, IFaces, ContainerState, containerConstructors } from '../../../graph'
import { useSpring, animated } from 'react-spring'; 
// For the tooltip
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
//Global State
import { useDispatch } from 'react-redux'; 
import { bringAllContainersIntoFocus, bringContainerIntoFocus } from '../../../store/Editor/actions'; 
import {  plywoodMaterial } from '../../../materials/plywoodMaterial'; 

//LOAD GEOMETRY/MATERIALS

// Example mesh
import { useGLTF } from '@react-three/drei/useGLTF'
import { GLTF  } from 'three/examples/jsm/loaders/GLTFLoader'

import {GLTFResult} from '../../../Models/Swift/A3'
useGLTF.preload('/Swift/A3.glb')


// type GLTFResult = GLTF & ObjectMap



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




/// Container 

interface ContainerViewState {
    //container state
    containerState: ContainerState,
    meshGeometry?: THREE.Geometry | THREE.BufferGeometry,
    meshMaterial: THREE.MeshStandardMaterial,
    //view state
    meshRef: React.MutableRefObject<typeof Mesh | undefined> | undefined;
    meshHoveredOver: boolean; //usful for ui -> so people know where they're clicking. (possible to turn this feature off ? )
    meshActive: boolean;
    meshVisible: boolean; // for when we want to single out a particular container
    internalLightsOn?: boolean; // for turning on and off internal light sources... 
    toolTipVisible: boolean;

    // meshGeometry: THREE.Geometry; 
    // meshMaterial: THREE.Material


} 


  

type Action =
  | { _tag: "onClick";        payload: MouseEvent    }
  | { _tag: "onPointerOver";  payload: PointerEvent  }
  | { _tag: "onPointerOut";   payload: PointerEvent  }
  | { _tag: "onContextMenu",  payload: MouseEvent    }
  | { _tag: "onDoubleClick",  payload: {mouseEvent: MouseEvent, gltf: GLTFResult }    }


const ContainerReducer = (state: ContainerViewState, action: Action) => {
  switch (action._tag) {
    case "onClick":
      action.payload.stopPropagation()
      return {...state, meshActive: !state.meshActive};
    case "onPointerOver":
      action.payload.stopPropagation()
      return {...state, meshHoveredOver: true};
    case "onPointerOut":
      action.payload.stopPropagation()
      return {...state, meshHoveredOver: false};
    case "onContextMenu":
      action.payload.stopPropagation()
      return {...state, toolTipVisible: !state.toolTipVisible}
    case "onDoubleClick":
      action.payload.mouseEvent.stopPropagation()
      // we update global state, which should in turn update our local state
      return {...state, meshGeometry: action.payload.gltf.nodes["A-3_1"].geometry }; // double click should probably isolate the mesh
    default:
      throw new Error();
  }
}

/* Elm architecture: model (i.e state), view (i.e manifestation of the state), update (i.e actions dispatched by events to update state) */
export const ContainerMesh = (props: MeshProps): JSX.Element => {

  const gltf  = useGLTF('/Swift/A3.glb') as GLTFResult; 

  const initalState: ContainerViewState = {
    // meshRef: useRef<typeof Mesh>(),
    meshRef: undefined,
    meshHoveredOver: false,
    meshActive: false,
    meshVisible: true,
    toolTipVisible: false,
  
    containerState: containerConstructors.Room(makeContainer('con1')),
    meshGeometry: undefined,
    meshMaterial: plywoodMaterial
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
      visible={state.meshVisible}

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
      onClick         = {(e: MouseEvent)    => { return localDispatch({_tag: "onClick",        payload: e})  }}
      onPointerOver   = {(e: PointerEvent)  => { return localDispatch({_tag: "onPointerOver",  payload: e})  }}
      onPointerOut    = {(e: PointerEvent)  => { return localDispatch({_tag: "onPointerOut",   payload: e})  }}
      onContextMenu   = {(e: MouseEvent)    => { return localDispatch({_tag: "onContextMenu",   payload: e}) }}
      onDoubleClick   = {(e: MouseEvent)    => { return localDispatch({ _tag: "onDoubleClick",  payload: {mouseEvent: e, gltf: gltf } } )}}
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
      {(state.meshGeometry !== undefined) ? 
        <bufferGeometry attach="geometry" {...state.meshGeometry}/> :
        <boxBufferGeometry />
      }
      // <boxBufferGeometry args={[1, 1, 1]} />
      {/** --- Material  */}
      {(state.meshGeometry !== undefined) ?
        <meshStandardMaterial/> :
        <meshStandardMaterial 
          {...state.meshMaterial}
          /*color={state.meshHoveredOver || state.meshActive ? '0x555555' : '0x555555'} */
          /> 
      }

      </Suspense>


      {/** --- Tooltip  */}
      {state.toolTipVisible && 
        <Html>
            <ContainerTooltip/>
        </Html>
      }
    </mesh>
  )
}


// React components
const AnimatedContainerMesh = animated(ContainerMesh)


