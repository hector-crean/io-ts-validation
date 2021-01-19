/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { useHover } from '../modelUtils'; 

type GLTFResult = GLTF & {
  nodes: {
    ['B-5_1']: THREE.Mesh
    ['B-5_2']: THREE.Mesh
  }
  materials: {
    ['Wood-3 Ver.010']: THREE.MeshStandardMaterial
    ['diffuse_0_0_0_255.010']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Swift/B5.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="B-5" rotation={[Math.PI / 2, 0, 0]}>
          <mesh  {...useHover() } name="B-5_1" material={materials['Wood-3 Ver.010']} geometry={nodes['B-5_1'].geometry} />
          <mesh  {...useHover() } name="B-5_2" material={materials['diffuse_0_0_0_255.010']} geometry={nodes['B-5_2'].geometry} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Swift/B5.glb')
