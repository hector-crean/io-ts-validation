/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    MiddleLongBlock_1: THREE.Mesh
    MiddleLongBlock_2: THREE.Mesh
  }
  materials: {
    ['FrontColor.003']: THREE.MeshStandardMaterial
    ['BackColor.003']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Skylark/MiddleLongBlock.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="MiddleLongBlock" rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'MiddleLongBlock' }}>
          <mesh
            name="MiddleLongBlock_1"
            material={materials['FrontColor.003']}
            geometry={nodes.MiddleLongBlock_1.geometry}
          />
          <mesh
            name="MiddleLongBlock_2"
            material={materials['BackColor.003']}
            geometry={nodes.MiddleLongBlock_2.geometry}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Skylark/MiddleLongBlock.glb')
