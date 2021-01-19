import React, {useState} from 'react';
import './app.scss';


import { QueryAirtable } from './query/QueryAirtable'; 
import { upsertSubassembly } from './store/Dashboard/action'; 
import { useDispatch, useSelector} from 'react-redux'; 

import { client } from './client'; 
import { Project as projectCodec } from './store/Dashboard/types/composite-types'
import { GET_PROJECT } from './API/query'; 

import { graphqlGetEither, runProgram } from './API/graphqlAPI'; 

import Editor from './components/3d-editor/Editor'



// export const CounterComponent = ({ value }: any) => {
//   const dispatch = useDispatch()
//   return (
//     <div>
//       <span>{value}</span>
//       <button onClick={() => dispatch(upsertSubassembly(mod1))}>
//         upsertSubassembly
//       </button>
//     </div>
//   )
// }





function App() {

  // // const e = graphqlGetEither(client, GET_PROJECT('recDSfaVc2clkOcLR'), projectCodec ); 

  // runProgram.then(console.log)  


 
  return (
    

    <Editor/>


  );
}

export default App;
