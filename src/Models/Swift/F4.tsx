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
    ['F-4_1']: THREE.Mesh
    ['F-4_2']: THREE.Mesh
  }
  materials: {
    ['Wood-3 Ver.029']: THREE.MeshStandardMaterial
    ['diffuse_0_0_0_255.029']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Swift/F4.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="F-4" rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="F-4_1" material={materials['Wood-3 Ver.029']} geometry={nodes['F-4_1'].geometry}  {...useHover() }/>
          <mesh name="F-4_2" material={materials['diffuse_0_0_0_255.029']} geometry={nodes['F-4_2'].geometry}  {...useHover() }/>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Swift/F4.glb')