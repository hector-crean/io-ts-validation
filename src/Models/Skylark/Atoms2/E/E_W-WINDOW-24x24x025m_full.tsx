/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    ['E_W-WINDOW-2.4x2.4x0.25m(full)_1']: THREE.Mesh
    ['E_W-WINDOW-2.4x2.4x0.25m(full)_2']: THREE.Mesh
  }
  materials: {
    ['FrontColor.002']: THREE.MeshStandardMaterial
    ['BackColor.005']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Skylark/E_W-WINDOW-24x24x025m_full.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="E_W-WINDOW-24x24x025m(full)"
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: 'E_W-WINDOW-2.4x2.4x0.25m(full)' }}>
          <mesh
            name="E_W-WINDOW-2.4x2.4x0.25m(full)_1"
            material={materials['FrontColor.002']}
            geometry={nodes['E_W-WINDOW-2.4x2.4x0.25m(full)_1'].geometry}
          />
          <mesh
            name="E_W-WINDOW-2.4x2.4x0.25m(full)_2"
            material={materials['BackColor.005']}
            geometry={nodes['E_W-WINDOW-2.4x2.4x0.25m(full)_2'].geometry}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Skylark/E_W-WINDOW-24x24x025m_full.glb')
