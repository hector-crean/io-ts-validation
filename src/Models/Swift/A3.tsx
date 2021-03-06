/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { useHover } from '../modelUtils'; 

export type GLTFResult = GLTF & {
  nodes: {
    ['A-3_1']: THREE.Mesh
    ['A-3_2']: THREE.Mesh
  }
  materials: {
    ['diffuse_0_0_0_255.003']: THREE.MeshStandardMaterial
    ['Wood-3 Ver.003']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Swift/A3.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="A-3" rotation={[Math.PI / 2, 0, 0]}>
          <mesh {...useHover() }name="A-3_1" material={materials['diffuse_0_0_0_255.003']} geometry={nodes['A-3_1'].geometry} />
          <mesh  {...useHover() } name="A-3_2" material={materials['Wood-3 Ver.003']} geometry={nodes['A-3_2'].geometry} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Swift/A3.glb')
