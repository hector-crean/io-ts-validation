import React, {useRef} from 'react';
import { Vector3 } from 'three'
import { useThree } from 'react-three-fiber'; 


export const Light = () => {
    return( 
    <>
     <directionalLight 
          castShadow = {true}
          position={new Vector3(0,200,0)} 
          intensity={0.1} 
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={500}
          shadow-camera-left={-100}
          shadow-camera-right={100}
          shadow-camera-top={-100}
          shadow-camera-bottom={100}
        />
        <spotLight position={[40, 40, 20]} penumbra={1} castShadow />
        <ambientLight intensity = {0.1} />
        <pointLight position={new Vector3(30,30,60)} intensity={0.2}/>
        <pointLight position={new Vector3(-30,-30,60)} intensity={0.5}/>
    </>
      
    )
  }

