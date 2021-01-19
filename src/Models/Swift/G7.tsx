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
    ['G-7_1']: THREE.Mesh
    ['G-7_2']: THREE.Mesh
  }
  materials: {
    ['diffuse_0_0_0_255.037']: THREE.MeshStandardMaterial
    ['Wood-3 Ver.037']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Swift/G7.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="G-7" rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="G-7_1" material={materials['diffuse_0_0_0_255.037']} geometry={nodes['G-7_1'].geometry}  {...useHover() }/>
          <mesh name="G-7_2" material={materials['Wood-3 Ver.037']} geometry={nodes['G-7_2'].geometry}  {...useHover() }/>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Swift/G7.glb')