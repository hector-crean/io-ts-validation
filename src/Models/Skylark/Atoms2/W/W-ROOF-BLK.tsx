/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    ['W-ROOF-BLK_1']: THREE.Mesh
    ['W-ROOF-BLK_2']: THREE.Mesh
  }
  materials: {
    ['_auto_.038']: THREE.MeshStandardMaterial
    ['M_0010_Snow.038']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Skylark/W-ROOF-BLK.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="W-ROOF-BLK" rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'W-ROOF-BLK' }}>
          <mesh name="W-ROOF-BLK_1" material={materials['_auto_.038']} geometry={nodes['W-ROOF-BLK_1'].geometry} />
          <mesh name="W-ROOF-BLK_2" material={materials['M_0010_Snow.038']} geometry={nodes['W-ROOF-BLK_2'].geometry} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Skylark/W-ROOF-BLK.glb')
