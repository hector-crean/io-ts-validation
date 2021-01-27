
import React, { useRef, VFC, Suspense } from 'react';
import { useThree, extend, ReactThreeFiber, useFrame, Canvas } from 'react-three-fiber';
import {OrbitControls, Html, Loader, useContextBridge, Environment, ContactShadows } from '@react-three/drei';
import { Light } from './Light'; 
import { Perf } from 'r3f-perf';
import * as THREE from 'three'; 
import { Vector3 } from 'three';
import { useSpring, config, SpringValue } from '@react-spring/core'
import { a } from '@react-spring/three'
import { a as aDom } from '@react-spring/web'
import { EffectComposer, SSAO, SMAA } from 'react-postprocessing'


import {useYScroll} from './Gestured/Scroll';
import { ReactEventHandlers } from 'react-use-gesture/dist/types'


// Redux Context
import { ReactReduxContext } from 'react-redux';

// SceneGraph Object

import Dodecahedron from './Gestured/Draggable'; 

import SkylarkBuilding from './Skylark_gltf_skylark'

/**
 * 
 *  The showroom is to showcase the different building systems, and then the house texmplates within each building
 *  system. 
 * 
 *  It involves first a vertical scroll, then a horizontal scroll. Once a template has been picked, we move on
 *  to the editor component. 
 * 
 *  A similar page will be made when selecting individual components within a house type.  
 * 
 * 
 * 
 */


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


//////////////////////////////////
// Scene
//////////////////////////////////


interface ShowRoomSceneProps {
  y: SpringValue<number>
  bindFn: (...args: any[]) => ReactEventHandlers
}

const ShowroomScene = ({y, bindFn}: ShowRoomSceneProps) => {
  const orbitControlsRef = useRef<OrbitControls>();
 


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

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[0.1, 1000]} />
          <meshBasicMaterial color="lightcoral" fog={false} transparent opacity={0.4} />
      </mesh>


      <Html>  <span className="header"> H4.OE – Skylark </span> </Html>

      <Suspense
        fallback={
          <Html center>
            <Loader />
          </Html>
        }>
          {/** PUT MODELS HERE  */}
          {/** Create a coordinate system for grid. Place the containers/voxels into grid with given rotations  */}
          <a.group position-z={y.to((y) => (y / 500) * 25)}>
           
            {/* <a.mesh castShadow>
              <dodecahedronBufferGeometry attach="geometry" args={[1.4, 0]} />
              <meshNormalMaterial attach="material" />
            </a.mesh> */}
            <SkylarkBuilding 
              scale={new THREE.Vector3(0.5,0.5,0.5)}
              position={new THREE.Vector3(0, 0,  10)}
            />

            <SkylarkBuilding 
              scale={new THREE.Vector3(0.5,0.5,0.5)}
              position={new THREE.Vector3(0, 0,  0)}
            />
            <SkylarkBuilding 
              scale={new THREE.Vector3(0.5,0.5,0.5)}
              position={new THREE.Vector3(0, 0, -20)}

            />

            <SkylarkBuilding 
              scale={new THREE.Vector3(0.5,0.5,0.5)}
              position={new THREE.Vector3(0, 0, -40)}

            />

            <SkylarkBuilding 
              scale={new THREE.Vector3(0.5,0.5,0.5)}
              position={new THREE.Vector3(0, 0, -60)}

            />

          </a.group>


          {/*******************/}
          <EffectComposer multisampling={0}>
            <SSAO
              intensity={40}
              luminanceInfluence={0.2}
              radius={8}
              scale={0.5}
              bias={0.5}
              distanceThreshold={0.5}
              distanceFalloff={0.03}
              rangeFalloff={0.001}
            />
            <SMAA />
          </EffectComposer>

      </Suspense>

      {/* <OrbitControls 
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
      />    */}
      {/* <Controls/> */}
      {/* <Dolly /> */}

      {/* <Perf /> */}

    </>
  );
};


//////////////////////////////////
// Editor
//////////////////////////////////


const Showroom: VFC = () => {

 
  // contect bridge needed as workaround due to: https://github.com/pmndrs/react-three-fiber/issues/43
  const ContextBridge = useContextBridge(ReactReduxContext)

  const [y, bind] = useYScroll({bottom: -100, top: 2400}, { domTarget: window })
 



  return (
  <>
    {/* <ClippingSlider /> */}

    <Canvas
      concurrent 
      invalidateFrameloop 
      colorManagement
      shadowMap={{ enabled: true, type: THREE.PCFSoftShadowMap }}
      pixelRatio={window.devicePixelRatio}
      gl={{ antialias: true, alpha: false }}
      camera={{ position: [0, 5, 10], fov: 65, near: 2, far: 60 }}
    >
        <ContextBridge>


        <ShowroomScene 
          y={y} 
          bindFn={bind}
        />

       
        </ContextBridge>

    </Canvas>


    {/** --- Bar at the side for scroll position  */}
    <aDom.div className="bar" style={{ height: y.to([-100, 2400], ['0%', '100%']) }} />

   


    {/* <a href="https://www.opensystemslab.io/" className="top-left">
      Open Systems Lab
    </a>
    <a href="https://www.notion.so/Housing-4-0-Energy-e83e0e7f455a4a419463619a29c4cf51" className="bottom-right">
      More Information
    </a> */}

  </>

  );
};

export default Showroom;
