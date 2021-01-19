/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    ['N_S-LINTEL_1']: THREE.Mesh
    ['N_S-LINTEL_2']: THREE.Mesh
  }
  materials: {
    ['_auto_.025']: THREE.MeshStandardMaterial
    ['M_0010_Snow.025']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Skylark/N_S-LINTEL.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="N_S-LINTEL" rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'N_S-LINTEL' }}>
          <mesh name="N_S-LINTEL_1" material={materials['_auto_.025']} geometry={nodes['N_S-LINTEL_1'].geometry} />
          <mesh name="N_S-LINTEL_2" material={materials['M_0010_Snow.025']} geometry={nodes['N_S-LINTEL_2'].geometry} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Skylark/N_S-LINTEL.glb')
