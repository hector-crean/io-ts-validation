/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import { Html } from '@react-three/drei';

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

import { useHover } from '../modelUtils'; 
import { Vector3 } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    Boz: THREE.Mesh
  }
  materials: {
    diffuse_200_0_0_255: THREE.MeshStandardMaterial
  }
}

export const Envelope = (props: JSX.IntrinsicElements['group']) => {


  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Swift/Envelope.glb') as GLTFResult

  return (
    <group ref={group} {...props} dispose={null} >
        <mesh
          name="Boz"
          material={materials.diffuse_200_0_0_255}
          geometry={nodes.Boz.geometry}
          rotation={[Math.PI / 2, 0, 0]}
          {...useHover()}

         
        />

        
    </group>
  )
}

useGLTF.preload('/Swift/Envelope.glb')
