import React from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/web'
import Overlay from './Overlay'
import Scene from './Scene'


interface GreetingPageProps {}

const GreetingPage = (props: GreetingPageProps) => {


    // This spring controls the background and the svg fill (text color)
  const [{ background, fill }, set] = useSpring({ background: '#f0f0f0', fill: '#202020' }, [])
  return (
    <div className = 'greeting-page'>
    <a.main style={{ background }}>
        <Canvas className="greeting-page canvas" pixelRatio={[1, 2]}>
            <Scene setBg={set} />
            <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        </Canvas>
        <Overlay fill={fill} />
    </a.main>    
    </div>
   
  )
}

export default GreetingPage
