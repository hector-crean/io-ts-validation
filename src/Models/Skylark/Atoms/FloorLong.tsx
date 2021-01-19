/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    FloorLong_1: THREE.Mesh
    FloorLong_2: THREE.Mesh
  }
  materials: {
    ['FrontColor.001']: THREE.MeshStandardMaterial
    ['BackColor.001']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Skylark/FloorLong.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="FloorLong" rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'FloorLong' }}>
          <mesh name="FloorLong_1" material={materials['FrontColor.001']} geometry={nodes.FloorLong_1.geometry} />
          <mesh name="FloorLong_2" material={materials['BackColor.001']} geometry={nodes.FloorLong_2.geometry} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Skylark/FloorLong.glb')
