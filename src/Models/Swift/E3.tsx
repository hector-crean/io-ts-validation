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
    ['E-3_1']: THREE.Mesh
    ['E-3_2']: THREE.Mesh
  }
  materials: {
    ['Wood-3 Ver.024']: THREE.MeshStandardMaterial
    ['diffuse_0_0_0_255.024']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Swift/E3.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="E-3" rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="E-3_1" material={materials['Wood-3 Ver.024']} geometry={nodes['E-3_1'].geometry}  {...useHover() }/>
          <mesh name="E-3_2" material={materials['diffuse_0_0_0_255.024']} geometry={nodes['E-3_2'].geometry}  {...useHover() }/>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Swift/E3.glb')