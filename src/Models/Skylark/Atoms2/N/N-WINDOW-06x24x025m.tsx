/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    ['N-WINDOW-10.6x2.4x0.25m_1']: THREE.Mesh
    ['N-WINDOW-10.6x2.4x0.25m_2']: THREE.Mesh
  }
  materials: {
    ['FrontColor.003']: THREE.MeshStandardMaterial
    ['BackColor.007']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Skylark/N-WINDOW-06x24x025m.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="N-WINDOW-106x24x025m"
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: 'N-WINDOW-10.6x2.4x0.25m' }}>
          <mesh
            name="N-WINDOW-10.6x2.4x0.25m_1"
            material={materials['FrontColor.003']}
            geometry={nodes['N-WINDOW-10.6x2.4x0.25m_1'].geometry}
          />
          <mesh
            name="N-WINDOW-10.6x2.4x0.25m_2"
            material={materials['BackColor.007']}
            geometry={nodes['N-WINDOW-10.6x2.4x0.25m_2'].geometry}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Skylark/N-WINDOW-06x24x025m.glb')
