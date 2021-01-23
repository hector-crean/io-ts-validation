import * as THREE from 'three'
import React, { Suspense, useEffect, useState, useRef } from 'react'
import { CanvasContext, ObjectMap, useFrame, extend } from 'react-three-fiber'
import { PerspectiveCamera, Environment, MeshDistortMaterial, ContactShadows,  Html, Loader } from '@react-three/drei'
import { useSpring, SpringStartFn, config } from '@react-spring/core'
import { a } from '@react-spring/three'


// Example mesh
import { useGLTF } from '@react-three/drei/useGLTF'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

// type GLTFResult = GLTF & ObjectMap
type GLTFResult = GLTF & {
  nodes: {
    ['N_S_BLK_1']: THREE.Mesh
    ['N_S_BLK_2']: THREE.Mesh
  }
  materials: {
    ['FrontColor.004']: THREE.MeshStandardMaterial
    ['BackColor.008']: THREE.MeshStandardMaterial
  }
}


// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial)



export default function Scene({ setBg }: {
    setBg: SpringStartFn<{ background: string; fill: string; }>
}) {
  const { nodes, materials } = useGLTF('/Skylark/N_S-BLOCK.glb') as GLTFResult; 

  // const sphere = useRef<THREE.Object3D>()
  const modelRef = useRef<THREE.Mesh>()
  const lightRef = useRef<THREE.Object3D>()
  const [mode, setMode] = useState<boolean>(false)
  const [down, setDown] = useState<boolean>(false)
  const [hovered, setHovered] = useState<boolean>(false)

  // Change cursor on hovered state
  useEffect(() => {
    document.body.style.cursor = hovered
      ? 'none'
      : `url('data:image/svg+xml;base64,${btoa(
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#E8B059"/></svg>'
        )}'), auto`
  }, [hovered])

  // Make the bubble float and follow the mouse
  // This is frame-based animation, useFrame subscribes the component to the render-loop
  useFrame((state: CanvasContext) => {
    if (lightRef.current && modelRef.current){
        lightRef.current.position.x = state.mouse.x * 20
        lightRef.current.position.y = state.mouse.y * 20
        modelRef.current.position.x = THREE.MathUtils.lerp(modelRef.current.position.x, hovered ? state.mouse.x / 2 : 0, 0.2)
        modelRef.current.position.y = THREE.MathUtils.lerp(
          modelRef.current.position.y,
          Math.sin(state.clock.elapsedTime / 1.5) / 6 + (hovered ? state.mouse.y / 2 : 0),
          0.2
        )
    }
  })

  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  type SpringProps = { 
      wobble: number;
      coat: number;
      ambient: number;
      env: number;
      color: string;
      config: (n: string) => {
          mass: number;
          tension: number;
          friction: number;
      }
  }

  const [{ wobble, coat, color, ambient, env }, set] = useSpring(
    {
      wobble: down 
        ? 1.2 
        : hovered 
            ? 1.05 
            : 1,
      coat: mode && !hovered 
        ? 0.04 
        : 1,
      ambient: mode && !hovered 
        ? 1.5 
        : 0.5,
      env: mode && !hovered 
        ? 0.4 
        : 1,
      color: hovered
        ? '#202020' 
        : mode 
            ? '#202020' 
            : '#202020',
    //   config: (n: string) => n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 }
    },
    [mode, hovered, down]
  )

  return (
    
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
        <a.ambientLight intensity={ambient} />
        <a.pointLight ref={lightRef} position-z={-15} intensity={env} color="#F8C069" />
      </PerspectiveCamera>
      {/* <Suspense
        fallback={
          <Html center>
            <Loader />
          </Html>
        }>         */}
        <a.mesh
          scale={new THREE.Vector3(3,3,3)}
          dispose={null}
          ref={modelRef}
          //  scale={wobble!.to((w) => [w, w, w])}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => {
            setDown(false)
            // Toggle mode between dark and bright
            setMode(!mode)
            setBg({ background: !mode ? '#202020' : '#f0f0f0', fill: !mode ? '#f0f0f0' : '#202020' })
          }}>
            {/** geometry  */}
           { nodes['N_S_BLK_1'].geometry !== undefined  ?  
                  <bufferGeometry attach="geometry" {...nodes['N_S_BLK_1'].geometry}/> :  
                  <sphereBufferGeometry args={[1, 64, 64]} /> 
            }

            {/** material  */}
          <AnimatedMaterial color={color} envMapIntensity={env} clearcoat={coat} clearcoatRoughness={0} metalness={0.1} stencilMask ={1} />
          {/* <a.material {...materials['FrontColor.004']}/> */}

        </a.mesh>

        <Environment preset="warehouse" />
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={mode ? 0.8 : 0.4}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        />
      {/* </Suspense> */}
    </>
  )
}

useGLTF.preload('/Skylark/N_S-BLOCK.glb')
