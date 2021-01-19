/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    ['E-WINDOW-1.2x2.4x0.25m_1']: THREE.Mesh
    ['E-WINDOW-1.2x2.4x0.25m_2']: THREE.Mesh
  }
  materials: {
    ['_auto_.009']: THREE.MeshStandardMaterial
    ['M_0010_Snow.009']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Skylark/E-WINDOW-12x24x025m.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="E-WINDOW-12x24x025m" rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'E-WINDOW-1.2x2.4x0.25m' }}>
          <mesh
            name="E-WINDOW-1.2x2.4x0.25m_1"
            material={materials['_auto_.009']}
            geometry={nodes['E-WINDOW-1.2x2.4x0.25m_1'].geometry}
          />
          <mesh
            name="E-WINDOW-1.2x2.4x0.25m_2"
            material={materials['M_0010_Snow.009']}
            geometry={nodes['E-WINDOW-1.2x2.4x0.25m_2'].geometry}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Skylark/E-WINDOW-12x24x025m.glb')
