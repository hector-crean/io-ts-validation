// Example mesh:
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    ['N_S BLK_1']: THREE.Mesh
    ['N_S BLK_2']: THREE.Mesh
  }
  materials: {
    ['FrontColor.004']: THREE.MeshStandardMaterial
    ['BackColor.008']: THREE.MeshStandardMaterial
  }
}

export default function Model() {
  const { nodes, materials } = useGLTF('/Skylark/N_S-BLOCK.glb') as GLTFResult; 
  return (
     <bufferGeometry attach="geometry" {...nodes['N_S BLK_1'].geometry} />
  )
}

useGLTF.preload('/Skylark/N_S-BLOCK.glb')
