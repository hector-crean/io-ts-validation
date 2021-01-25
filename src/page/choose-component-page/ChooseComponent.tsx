
import React, { useReducer, Dispatch , Suspense, useState} from 'react'; 
import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import { useSpring, config } from '@react-spring/core'
import { a } from '@react-spring/three'
import { a as aDom } from '@react-spring/web'
// import { EffectComposer, SSAO, SMAA } from 'react-postprocessing'
// import Text from './helpers/Text'
// import useModel from './helpers/useModel'
// import useYScroll from './helpers/useYScroll'

import Editor from '../../components/3d-editor/Editor';


interface ChooseComponentState {
    component: any; 
}

type Action =
  | { _tag: "onClick";        payload: { mouseEvent: MouseEvent  }     }
  | { _tag: "onPointerOver";  payload: { mouseEvent: MouseEvent  }     }
  | { _tag: "onPointerOut";   payload: { mouseEvent: MouseEvent  }     }
  | { _tag: "onContextMenu",  payload: { mouseEvent: MouseEvent  }     }
  | { _tag: "onDoubleClick",  payload: { mouseEvent: MouseEvent  }     }


const ChooseComponentReducer = (state: ChooseComponentState, action: Action) => {
  switch (action._tag) {
    case "onClick":
      return {...state };
    case "onPointerOver":
        return {...state };
    case "onPointerOut":
      return {...state };
    case "onContextMenu":
        return {...state };
    case "onDoubleClick":
        return {...state };
    default:
      throw new Error();
  }
}


const ChooseComponent = (): JSX.Element => {

    const initialChooseComponentState: ChooseComponentState = {component: 'thisone'}; 

    const [state, localDispatch]: [
        state: ChooseComponentState, 
        localDispatch: Dispatch<Action>
    ] = useReducer(ChooseComponentReducer, initialChooseComponentState); 

    return (
        <div className ='choose-component-page'>
        
            <span className="header"> H4.OE</span>
            <a href="https://github.com/hector-crean/io-ts-validation" className="top-left" children="Github" />
            <a href="https://www.notion.so/Housing-4-0-Energy-e83e0e7f455a4a419463619a29c4cf51" className="tpp-right" children="Notion Page" />
            <a href="https://www.opensystemslab.io/" className="bottom-left" children="+ Open Systems Lab " />
            {/* <a href="" className="bottom-right" children="" /> */}




            <div className="action-btn" onClick={()=> {}} />

            

        </div>


    )
}

export default ChooseComponent; 