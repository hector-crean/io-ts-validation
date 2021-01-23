import React from 'react';

//Global State
import { useDispatch } from 'react-redux'; 
// Global update Actions: 
import {  upsertSubassembly } from '../../store/Shared/action'; 
// Query API
import { runQuery } from '../../API/graphqlAPI'; 

import { ProjectArray} from '../../API/types/t';

// import { renderComponentNodes } from './SkylarkBuilding'; 
// import { createGraph_Astr } from '../../pattern-book/skylarkPatterns'; 
// import { SkylarkModule } from '../../meta-data/skylarkComponentData';  
// const sceneGraph = createGraph_Astr(1, SkylarkModule.N_WALL_CST_06x24x025m, 0); 
// const allcomp = renderComponentNodes(sceneGraph); 



// Scene graph is to render the state of the global scene graph. The individual scene graph components will have some local state to do with
// ui that does not need to be shared, but all crucial info must be kept global


// Local or global state for scene graph ? -> has to live in the global state... 



// IF WANT LOCAL STATE: USE THE COMMENTED OUT BELOW TO DEFINE A LOCAL REDUCER
interface SceneGraphState {

} 
const initialSceneGraphState: SceneGraphState = {
 
} 
  
type Action =
  | { _tag: "addContainer";        payload: {}    }


const SceneGraphReducer = (state: SceneGraphState, action: Action) => {
  switch (action._tag) {
    case "addContainer":
      const globalDispatch = useDispatch()
      // do query, then push updated scene graph to global store
      //globalDispatch(upsertSubassembly()) 


      return {...state};
    default:
      throw new Error();
  }
}


/* Elm architecture: model (i.e state), view (i.e manifestation of the state), update (i.e actions dispatched by events to update state) */
export const SceneGraph = (props: any): JSX.Element => {

  const [state, localDispatch] = React.useReducer(SceneGraphReducer, initialSceneGraphState);
  const globalDispatch = useDispatch()


  

  // Query our airtable database: then update our global state: 

  // globalDispatch(upsertSubassembly()) 

  return (
    <group
      {...props}
  
      /** Update */
    >
      {/** View */}

     
    </group>
  )
}