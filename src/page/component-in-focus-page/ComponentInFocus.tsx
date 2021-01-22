import React, {Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls,  Html, Loader } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/web'
import Overlay from './Overlay'
import Scene from './Scene'

import { GetSubassemblyQuery, GetSubassemblyQueryVariables } from '../../generated/graphql'; 
import { useQuery  } from '@apollo/client'
import { loader } from 'graphql.macro';
const GetSubassembly_graphql = loader('src/queries/GetSubassembly.graphql');


interface ComponentInFocusProps {}

const ComponentInFocus = (props: ComponentInFocusProps) => {

  const { data, loading, error }= useQuery<GetSubassemblyQuery, GetSubassemblyQueryVariables>( GetSubassembly_graphql, { variables: { subassemblyName: "Module-A1_01"} });

  console.log("data", data); 


    // This spring controls the background and the svg fill (text color)
  const [{ background, fill }, set] = useSpring({ background: '#f0f0f0', fill: '#202020' }, [])
  return (
    <div className = 'component-in-focus-page'>
    <a.main style={{ background }}>
        <Canvas className="component-in-focus canvas" pixelRatio={[1, 2]}>
          <Suspense
          fallback={
            <Html center>
              <Loader />
            </Html>
          }>    
            <Scene setBg={set} />
          </Suspense>
            <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        </Canvas>
        <Overlay fill={fill} />
    </a.main>    
    </div>
   
  )
}

export default ComponentInFocus
