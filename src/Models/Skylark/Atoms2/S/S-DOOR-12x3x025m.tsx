/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    ['S-DOOR-1.2x3x0.25m_1']: THREE.Mesh
    ['S-DOOR-1.2x3x0.25m_2']: THREE.Mesh
  }
  materials: {
    ['_auto_.027']: THREE.MeshStandardMaterial
    ['M_0010_Snow.027']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Skylark/S-DOOR-12x3x025m.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="S-DOOR-12x3x025m" rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'S-DOOR-1.2x3x0.25m' }}>
          <mesh
            name="S-DOOR-1.2x3x0.25m_1"
            material={materials['_auto_.027']}
            geometry={nodes['S-DOOR-1.2x3x0.25m_1'].geometry}
          />
          <mesh
            name="S-DOOR-1.2x3x0.25m_2"
            material={materials['M_0010_Snow.027']}
            geometry={nodes['S-DOOR-1.2x3x0.25m_2'].geometry}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Skylark/S-DOOR-12x3x025m.glb')
