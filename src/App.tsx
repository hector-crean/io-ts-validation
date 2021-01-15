import React, {useState} from 'react';
import './App.css';


// import { QueryAirtable } from './query/QueryAirtable'; 
import { upsertSubassembly } from './store/model/action'; 
import { useDispatch, useSelector} from 'react-redux'; 



// import { client } from './client'; 
// import { Project as projectCodec } from './store/model/types/composite-types'
// import { GET_PROJECT } from './API/query'; 

import { graphqlGetEither, runProgram } from './API/graphqlAPI'; 



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

  // const e = graphqlGetEither(client, GET_PROJECT('recDSfaVc2clkOcLR'), projectCodec ); 
  runProgram.then(console.log)  


 
  return (
    <div className="App">

      {/* <CounterComponent/> */}
    {/* <QueryAirtable subassemblyName={"Module-A1_05"} /> */}

    </div>
  );
}

export default App;
