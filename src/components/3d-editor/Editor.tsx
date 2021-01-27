
import React, { useRef, VFC, Suspense } from 'react';
import { useThree, extend, ReactThreeFiber, useFrame, Canvas } from 'react-three-fiber';
import {OrbitControls, Html, Loader, useContextBridge, Environment, ContactShadows } from '@react-three/drei';
import { Light } from './Light'; 
import { Perf } from 'r3f-perf';
import * as THREE from 'three'; 
import ClippingSlider from './ClippingSlider/ClippingSlider'; 
import { useSpring } from 'react-spring'; 
//Models
import { ContainerMesh  } from './Container/MeshContainer'; 
// import { ContainerGroupMesh } from './Container/MeshGroupContainer'
import { ContainerGroup } from './Container/MeshGroupContainer2'

// Icons
import Icon from '@material-ui/core/Icon';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import { Object3D, Vector3 } from 'three';

// Redux Context
import { ReactReduxContext } from 'react-redux';

// SceneGraph Object
import { SceneGraph } from './SceneGraph'
import { truncateSync } from 'fs';


import Dodecahedron from './Gestured/Draggable'; 

import { gltfPicked } from './Container/modelMatcher'; 

import {SwiftGLTF } from '../../Models/Swift/GLTF-types'; 

import { v4 as uuidv4 } from 'uuid';



import SkylarkWhole from './Skylark_gltf_skylark'
{/* <Icon>
  <FullscreenIcon/>
</Icon> */}


/////
// Camera
/////

const Dolly = (targetObject: THREE.Object3D): void => {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    // Move camera to a point where you can more easily see the object under inspection
    // camera.position.z = 50 + Math.sin(clock.getElapsedTime()) * 30
    // Look at the object under isnpection
    const {x,y,z} = targetObject.position; 
    camera.lookAt(new Vector3(x,y,z)) 

    // This process should be animated
    // just use .lerp ( x : Float, y : Float, t : Float ) : Float ? 

    // camera.updateProjectionMatrix()

  })
}


// // alternate 
// const Controls = (targetObject: Object3D) => {
//   const { gl, camera } = useThree()
  
  

//   const [props, set ] 
//   = useSpring<{
//     from: {x: number, y: number, z: number};
//     to: { x: number, y: number, z: number };
//     onFrame: (...args: any) => void;
//     reverse: boolean;
//     onRest: (...args: any) => void;
//   }>(
//     () => (
//       {
//         from: {x: camera.position.x, y: camera.position.y, z: camera.position.z}, 
//         to: {x: targetObject.position.x, y: targetObject.position.y, z: targetObject.position.z},
//         onFrame: ({to}: {to : {x: number, y: number, z: number}}) => { 
//           camera.position.x = to.x; 
//           camera.position.y = to.y; 
//           camera.position.z = to.z; 
//         },
//         reverse: false,
//         onRest: () => {}
//       }
//     )
//   )


//   useSpring<{
//     from: unknown;
//     z: unknown;
//     onFrame: (...args:any) => void;
//   }>({
//     from: {
//       z: 300
//     },
//     z: 2,
//     onFrame: ({ z }) => {
//       camera.position.z = z
//     }
//   })

//   return <OrbitControls target={[0, 0, 0]} args={[camera, gl.domElement]} />
// }


const extractGridPosition = (key: string): number[] =>
  key.split(",").map(x => Number(x) * 1.2);


const Building = () => {
  const { gl } = useThree();
  gl.localClippingEnabled = true;

  const grid = {
    "0,-5": {
      type: SwiftGLTF.A1,
    },
    "0,-4": {
      type: SwiftGLTF.A2,
    },
    "0,-3": {
      type: SwiftGLTF.A3,
    },
    "0,-2": {
      type: SwiftGLTF.A4,
    },
    "0,-1": {
      type: SwiftGLTF.B1,
    },
    "0,0": {
      type: SwiftGLTF.B2,
    }
  };

  return (
    <>
      {Object.entries(grid).map(([k, v]) => (
        
        <React.Fragment>
           <ContainerGroup 
            key={uuidv4()} 
            position={new THREE.Vector3(extractGridPosition(k)[0], 0, extractGridPosition(k)[1])} 
            componentID={v.type} 
          />
        </React.Fragment>
       
      ))}
    </>
  );
};


//////////////////////////////////
// Scene
//////////////////////////////////



const EditorScene = () => {

  const orbitControlsRef = useRef<OrbitControls>();
  console.log(orbitControlsRef)

  const {
    camera,
    gl: { domElement },
    scene,            // Default scene
    size,             // Bounds of the view (which stretches 100% and auto-adjusts)
    viewport,         // Bounds of the viewport in 3d units + factor (size/viewport)
    aspect,           // Aspect ratio (size.width / size.height)
    invalidate,       // Invalidates a single frame (for <Canvas invalidateFrameloop />)
    setDefaultCamera  // Sets the default camera
  } = useThree()
  

  return (
    <>
    {/**Sets up a global cubemap, which affects scene.environment, and optionally scene.background. A selection of presets from 
     * HDRI Haven are available for convenience. */}
     {/* <Environment preset="warehouse" /> */}
      
      {/* <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        /> */}

        
    
      <Light/>
      {/* <mesh 
        name="ground" 
        rotation={[-Math.PI / 2, 0, 0]} 
        receiveShadow={true}
      >
          <planeBufferGeometry attach="geometry" args={[50, 50, 1, 1]} />
          <shadowMaterial
            attach="material"
            color={0.5}
            opacity={0.9}
            side={THREE.DoubleSide}
          />
          <meshBasicMaterial color="gray" side={THREE.DoubleSide} attach="material" />
          
      </mesh>   */}
          
       
       
          {/* <Dodecahedron/> */}

      <Suspense
        fallback={
          <Html center>
            <Loader />
          </Html>
        }>
          {/** PUT MODELS HERE  */}
          {/** Create a coordinate system for grid. Place the containers/voxels into grid with given rotations  */}
         
          {/* <SceneGraph/> */}
          <SkylarkWhole/>


          {/* <Building/> */}
          {/* <ContainerMesh componentID={SwiftGLTF.A1}/> */}













          {/*******************/}
      </Suspense>

      <OrbitControls 
        //Get ref from the store?
        ref={orbitControlsRef} 
        enablePan={true} 
        enableRotate={true} 
        zoomSpeed={0.5}
        args={[camera, domElement]} 
        target={[0, 3, 0]}
        // enableDamping
        // dampingFactor={0.2}
        rotateSpeed={0.7}
        maxPolarAngle={1.49}
        enabled
        minDistance={5}
        maxDistance={100}
      />   
      {/* <Controls/> */}
      {/* <Dolly /> */}
      <Perf />

    </>
  );
};


//////////////////////////////////
// Editor
//////////////////////////////////


const Editor: VFC = () => {

 
  // contect bridge needed as workaround due to: https://github.com/pmndrs/react-three-fiber/issues/43
  const ContextBridge = useContextBridge(ReactReduxContext)

  
  return (
  <>
    {/* <ClippingSlider /> */}


    <Canvas
          colorManagement
          shadowMap={{ enabled: true, type: THREE.PCFSoftShadowMap }}
          camera={{ fov: 45, position: [8, 12, 14] }}
          pixelRatio={window.devicePixelRatio}
          gl={{ antialias: true }}
    >
      <ContextBridge>


        <EditorScene />

       
      </ContextBridge>

    </Canvas>
   


    {/* <a href="https://www.opensystemslab.io/" className="top-left">
      Open Systems Lab
    </a>
    <a href="https://www.notion.so/Housing-4-0-Energy-e83e0e7f455a4a419463619a29c4cf51" className="bottom-right">
      More Information
    </a> */}

  </>

  );
};

export default Editor;
