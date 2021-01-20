import React, { useRef, useState, useCallback, useEffect } from "react"
import { useFrame, MouseEvent, PointerEvent, WheelEvent, MeshProps, EventHandlers  } from "react-three-fiber"
import { Mesh } from 'three'; 
import * as THREE from 'three'; 
import { Html, HtmlProps} from '@react-three/drei'; 

import { IContainer, makeContainer, IFaces, } from '../../../Graph'
import { meshBounds } from "@react-three/drei";

import { useSpring, animated } from 'react-spring'; 

// For the tooltip
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

//Global State
import { useDispatch } from 'react-redux'; 
import { bringAllContainersIntoFocus, bringContainerIntoFocus } from '../../../store/Editor/actions'; 





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

interface State {
    //container props
    parentContainerID: string | null; 
    containerID: string; 
    faces: IFaces //
    worldTransform: THREE.Matrix4Tuple; 
    fromParentTransform: THREE.Matrix4Tuple; //This stores the local transform of the object. This is the object's transformation relative to its parent.

    //ui - mesh props
    meshRef: React.MutableRefObject<typeof Mesh | undefined> | undefined;
    meshHoveredOver: boolean; //usful for ui -> so people know where they're clicking. (possible to turn this feature off ? )
    meshActive: boolean;
    meshVisible: boolean; // for when we want to single out a particular container
    internalLightsOn?: boolean; // for turning on and off internal light sources... 
    toolTipVisible: boolean;

    // meshGeometry: THREE.Geometry; 
    // meshMaterial: THREE.Material


} 


const initalState: State = {
  // meshRef: useRef<typeof Mesh>(),
  meshRef: undefined,
  meshHoveredOver: false,
  meshActive: false,
  meshVisible: true,
  toolTipVisible: false,
  ...makeContainer(null)
} 
  

type Action =
  | { _tag: "onClick";        payload: MouseEvent    }
  | { _tag: "onPointerOver";  payload: PointerEvent  }
  | { _tag: "onPointerOut";   payload: PointerEvent  }
  | { _tag: "onContextMenu",  payload: MouseEvent    }
  | { _tag: "onDoubleClick",  payload: MouseEvent    }


const ContainerReducer = (state: State, action: Action) => {
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
      action.payload.stopPropagation()
      // we update global state, which should in turn update our local state
      return {...state, meshVisible: true }; // double click should probably isolate the mesh
    default:
      throw new Error();
  }
}

/* Elm architecture: model (i.e state), view (i.e manifestation of the state), update (i.e actions dispatched by events to update state) */
export const Container = (props: MeshProps): JSX.Element => {

  
  const globalDispatch = useDispatch()

  const [state, localDispatch] = React.useReducer(ContainerReducer, initalState);
  
  return (
    <mesh
      {...props}
      // ref={state.meshRef}
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
      onContextMenu   = {(e: MouseEvent)    => { return localDispatch({_tag: "onContextMenu",  payload: e})  }}
      onDoubleClick   = {(e: MouseEvent)    => { /*globalDispatch(bringContainerIntoFocus({id: state.containerID, visible: true}))*/  }}
      onPointerUp     = {(e: PointerEvent)  => {  }}
      onPointerDown   = {(e: PointerEvent)  => {}}
      onPointerMove   = {(e: PointerEvent)  => {}}
      onPointerMissed = {(e: React.MouseEvent) => {}}
      onWheel         = {(e: WheelEvent)    => {}}
    >
      {/** View */}
      {/** --- Geometry  */}
      <boxBufferGeometry args={[1, 1, 1]} />
      {/** --- Material  */}
      <meshStandardMaterial color={state.meshHoveredOver || state.meshActive ? 'hotpink' : 'orange'} />
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
const AnimatedContainer = animated(Container)



// export const Container = (): JSX.Element => {
  
//     // This reference will give us direct access to the mesh
//     const meshRef = useRef<typeof Mesh>()
  
//     const [hovered, setHovered] = useState<boolean>(); 
//     const [active, setActive] = useState<boolean>(); 

//     useEffect(()=> void (document.body.style.cursor = hovered ? 'pointer' : 'auto'))

//     const hover = useCallback((e: PointerEvent) => (e.stopPropagation(), setHovered(true)), [])
//     const unhover = useCallback((e) => setHovered(false), [])
  
//     // Rotate mesh every frame, this is outside of React without overhead
//     // useFrame(() => {
//     //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01
//     // })
  
//     return (
//       <mesh
//         // {...props}
//         ref={meshRef}
//         visible

//         userData={{ test: "hello" }}
//         position={new THREE.Vector3(1, 2, 3)}
//         rotation={new THREE.Euler(0, 0, 0)}
//         geometry={new THREE.SphereGeometry(1, 16, 16)}
//         material={new THREE.MeshBasicMaterial({ color: new THREE.Color('indianred'), transparent: true })} 

//         scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        

//         /** Events */
//         onClick={(e: MouseEvent) => {
//           e.stopPropagation(); 
//           setActive(!active)
//         }}
//         // onWheel={(e: WheelEvent) => console.log('wheel spins')}
//         // onPointerUp={(e: PointerEvent) => {
//         //   e.stopPropagation()
//         //   // Optionally release capture
//         //   e.target.releasePointerCapture(e.pointerId)}
//         // }
//         // onPointerDown={(e: PointerEvent) => {
//         //   // Only the mesh closest to the camera will be processed
//         //   e.stopPropagation()
//         //   // You may optionally capture the target
//         //   e.target.setPointerCapture(e.pointerId)
//         // }}
//         onPointerOver={(e: PointerEvent) => hover(e)}
//         onPointerOut={(e: PointerEvent) => unhover(e)}
//       >


//         <boxBufferGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />

       
//       </mesh>
//     )
//   }