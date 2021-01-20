import React from 'react';

//Global State
import { useDispatch } from 'react-redux'; 
// Global update Actions: 
import {  upsertSubassembly } from '../../store/Shared/action'; 




// Local or global state for scene graph ? -> has to live in the global state... 



// IF WANT LOCAL STATE: USE THE COMMENTED OUT BELOW TO DEFINE A LOCAL REDUCER
// interface SceneGraphState {

// } 
// const initialSceneGraphState: SceneGraphState = {
 
// } 
  
// type Action =
//   | { _tag: "addContainer";        payload: {}    }


// const SceneGraphReducer = (state: SceneGraphState, action: Action) => {
//   switch (action._tag) {
//     case "addContainer":
//       return {...state};
//     default:
//       throw new Error();
//   }
// }


/* Elm architecture: model (i.e state), view (i.e manifestation of the state), update (i.e actions dispatched by events to update state) */
export const SceneGraph = (props: any): JSX.Element => {

  
  const globalDispatch = useDispatch()

//   const [state, localDispatch] = React.useReducer(SceneGraphReducer, initialSceneGraphState);

    globalDispatch(bringContainerIntoFocus({id: state.containerID, visible: true}))*  

  return (
    <group
      {...props}
  
      /** Update */
    >
      {/** View */}

     
    </group>
  )
}