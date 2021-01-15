import React from 'react'; 
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from './queries'; 
// import { Project } from '../store/model/types'
// import { decodeWith, SubassemblyName, Subassemblies, Subassembly  } from '../store/model/types'; 






//   type Data = {subassemblies: Subassembly[] | Subassembly}
//   type Variables = Subassembly | Subassembly[]

  
//   const { loading, error, data } = useQuery<Data, Variables> (GET_PROJECT); 

//   // const decoder = Subassemblies.asDecoder()
//   // const result = decodeWith(decoder)(data?.subassemblies); 

// type ACTIONTYPE =
//   | { type: "fetch"; payload: typeof initialState }
//   | { type: "push"; payload: typeof initialState };

// function reducer(state: typeof initialState, action: ACTIONTYPE) {
//   switch (action.type) {
//     case "fetch":
//       return { count: state.count + action.payload };
//     case "fetch":
//       return { count: state.count - Number(action.payload) };
//     default:
//       throw new Error();
//   }
// }

// const Counter = () => {
//   const [state, dispatch] = React.useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: "push", payload: "5" })}>
//         -
//       </button>
//       <button onClick={() => dispatch({ type: "fetch", payload: 5 })}>
//         +
//       </button>
//     </>
//   );
// }