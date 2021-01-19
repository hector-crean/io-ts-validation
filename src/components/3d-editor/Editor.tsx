
import React, { useRef, VFC, Suspense } from 'react';
import { useThree, extend, ReactThreeFiber, useFrame, Canvas } from 'react-three-fiber';
import {OrbitControls, Html, Loader } from '@react-three/drei';
import { Light } from './Light'; 
import { Perf } from 'r3f-perf';
import * as THREE from 'three'; 
import ClippingSlider from './ClippingSlider/ClippingSlider'; 

//Models
import { Container } from './Container/Container'

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
    
      <Light/>
      <mesh name="ground" rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeBufferGeometry attach="geometry" args={[50, 50, 1, 1]} />
          <shadowMaterial
            attach="material"
            color={0}
            opacity={0.9}
            side={THREE.DoubleSide}
          />
          <meshBasicMaterial color="gray" side={THREE.DoubleSide} attach="material" />
        </mesh>  
          
       
       

      <Suspense
        fallback={
          <Html center>
            <Loader />
          </Html>
        }>
          {/** PUT MODELS HERE  */}
          <Container/>













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
      <Perf />

    </>
  );
};


//////////////////////////////////
// Editor
//////////////////////////////////


const Editor: VFC = () => {

 
  

  
  return (
    <div id="three">
    <ClippingSlider />

    <Canvas
          colorManagement
          shadowMap={{ enabled: true, type: THREE.PCFSoftShadowMap }}
          camera={{ fov: 45, position: [8, 12, 14] }}
          pixelRatio={window.devicePixelRatio}
          gl={{ antialias: true }}

    >

        <EditorScene />

       


    </Canvas>


    {/* <a href="https://www.opensystemslab.io/" className="top-left">
      Open Systems Lab
    </a>
    <a href="https://www.notion.so/Housing-4-0-Energy-e83e0e7f455a4a419463619a29c4cf51" className="bottom-right">
      More Information
    </a> */}


    </div>  
  );
};

export default Editor;
