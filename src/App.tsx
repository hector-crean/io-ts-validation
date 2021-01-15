import React, {useState} from 'react';
import './App.css';


import { QueryAirtable } from './query/QueryAirtable'; 
import { upsertSubassembly } from './store/model/action'; 
import {Subassembly} from './store/model/types'

import { useDispatch, useSelector} from 'react-redux'; 








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

 
  return (
    <div className="App">

      {/* <CounterComponent/> */}
    <QueryAirtable id={"Module-A1_05"} />

    </div>
  );
}

export default App;
