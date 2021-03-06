/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    ['W_E-LINTEL_1']: THREE.Mesh
    ['W_E-LINTEL_2']: THREE.Mesh
  }
  materials: {
    ['_auto_.043']: THREE.MeshStandardMaterial
    ['M_0010_Snow.043']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Skylark/W_E-LINTEL.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="W_E-LINTEL" rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'W_E-LINTEL' }}>
          <mesh name="W_E-LINTEL_1" material={materials['_auto_.043']} geometry={nodes['W_E-LINTEL_1'].geometry} />
          <mesh name="W_E-LINTEL_2" material={materials['M_0010_Snow.043']} geometry={nodes['W_E-LINTEL_2'].geometry} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Skylark/W_E-LINTEL.glb')
