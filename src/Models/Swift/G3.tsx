/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { GroupProps, useThree, MaterialProps} from 'react-three-fiber'
import { Vector3 } from 'three'
// import { useHover } from '../modelUtils'; 

type GLTFResult = GLTF & {
  nodes: {
    ['G-3_1']: THREE.Mesh
    ['G-3_2']: THREE.Mesh
  }
  materials: {
    ['Wood-3 Ver.033']: THREE.MeshStandardMaterial
    ['diffuse_0_0_0_255.033']: THREE.MeshStandardMaterial
  }
}

interface G3SwiftProps extends GroupProps {
  meshActive: boolean; 
  meshHoveredOver?: boolean;
  meshMaterial?: THREE.Material; // -> the mesh material includes a clipping plane.. 

}
export default function Model(props: G3SwiftProps) {

  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Swift/G3.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="G-3" rotation={[Math.PI / 2, 0, 0]}>
          <mesh 
            name="G-3_1" 
            material={props.meshMaterial? props.meshMaterial : materials['Wood-3 Ver.033']} 
            geometry={nodes['G-3_1'].geometry} 
            material-clippingPlane={ [new THREE.Plane(new THREE.Vector3(0, -1, 0), 0.5)]}
            // material-color={props.meshActive ? 'red' : 'blue'}
          />
          <mesh 
            name="G-3_2" 
            material={props.meshMaterial? props.meshMaterial : materials['diffuse_0_0_0_255.033']} 
            geometry={nodes['G-3_2'].geometry}  
            material-color={(props.meshActive || props.meshHoveredOver) ? 'red' : 'pink'}
            material-clippingPlane={ [new THREE.Plane(new THREE.Vector3(0, -1, 0), 1)]}

          />
            
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Swift/G3.glb')
