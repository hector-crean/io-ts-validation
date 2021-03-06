/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    ['W-DOOR-1.2x2.4x0.25m_1']: THREE.Mesh
    ['W-DOOR-1.2x2.4x0.25m_2']: THREE.Mesh
    ['W-DOOR-1.2x2.4x0.25m_3']: THREE.Mesh
  }
  materials: {
    ['_auto_.036']: THREE.MeshStandardMaterial
    ['M_0010_Snow.036']: THREE.MeshStandardMaterial
    ['BackColor.014']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Skylark/W-DOOR-12x24x025m.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="W-DOOR-12x24x025m" rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'W-DOOR-1.2x2.4x0.25m' }}>
          <mesh
            name="W-DOOR-1.2x2.4x0.25m_1"
            material={materials['_auto_.036']}
            geometry={nodes['W-DOOR-1.2x2.4x0.25m_1'].geometry}
          />
          <mesh
            name="W-DOOR-1.2x2.4x0.25m_2"
            material={materials['M_0010_Snow.036']}
            geometry={nodes['W-DOOR-1.2x2.4x0.25m_2'].geometry}
          />
          <mesh
            name="W-DOOR-1.2x2.4x0.25m_3"
            material={materials['BackColor.014']}
            geometry={nodes['W-DOOR-1.2x2.4x0.25m_3'].geometry}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Skylark/W-DOOR-12x24x025m.glb')
