import React from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import { useGesture } from 'react-use-gesture'
import { useSpring, config, SpringValue, SpringValues} from '@react-spring/core'
import { a } from '@react-spring/three'
import { FluidValue } from '@react-spring/shared'; 

import { a as aDom } from '@react-spring/web'
// import { useSpring, config, a} from 'react-spring'
import { Vector3 } from 'three'; 



// import { extend } from 'react-three-fiber'
// extend({ Dodecahedron })
// const AnimatedDodecahedron = animated(Dodecahedron)

// type V3 = FluidValue<[x: number, y: number, z: number]> ; 
type V3 = 
| Vector3 
// | [x: number, y: number, z: number] 
// | FluidValue<[x: number, y: number, z: number]> 
| SpringValue<[x: number, y: number, z: number]>
// | undefined 

const Dodecahedron = (): JSX.Element => {
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width


  // -- use spring : 
  const [spring, set] = useSpring<{
    scale: V3;
    position: V3;
    rotation: V3;
    config: {
        mass: number;
        friction: number;
        tension: number;
    };
}>(() => ({
    scale: [1, 1, 1],
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    config: { mass: 3, friction: 40, tension: 800 },
  }))

  // -- use gesture 
  const bind = useGesture({
    onDrag: ({ offset: [x, y], last }) => {
      console.log(last)
      // set({ position: [x / aspect, -y / aspect, 0], rotation: [y / aspect, x / aspect, 0] })
    },
    onHover: ({ hovering }) => set({ scale: hovering ? new Vector3(1.2, 1.2, 1.2) : new Vector3(1, 1, 1) }),
  })

 

  return (
    <a.mesh {...spring} {...bind()} castShadow>
      <dodecahedronBufferGeometry attach="geometry" args={[1.4, 0]} />
      <meshNormalMaterial attach="material" />
    </a.mesh>
  )
}
export default Dodecahedron; 