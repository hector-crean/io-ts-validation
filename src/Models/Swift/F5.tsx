/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { useHover } from '../modelUtils'; 

type GLTFResult = GLTF & {
  nodes: {
    ['F-5_1']: THREE.Mesh
    ['F-5_2']: THREE.Mesh
  }
  materials: {
    ['diffuse_0_0_0_255.030']: THREE.MeshStandardMaterial
    ['Wood-3 Ver.030']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Swift/F5.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="F-5" rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="F-5_1" material={materials['diffuse_0_0_0_255.030']} geometry={nodes['F-5_1'].geometry}  {...useHover() }/>
          <mesh name="F-5_2" material={materials['Wood-3 Ver.030']} geometry={nodes['F-5_2'].geometry}  {...useHover() }/>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Swift/F5.glb')
