import React, {useState} from 'react';
import { useQuery, gql } from "@apollo/client";


import { decodeWith, SubassemblyName, Subassemblies, Subassembly  } from '../store/model/types'; 
import { GET_PROJECT, GET_SUBASSEMBLY } from './queries'

import { useDispatch, useSelector} from 'react-redux'; 
import { upsertSubassembly } from '../store/model/action'; 



// /* The magic is happening in types/index.ts file: -> 
//   Creating a StructureAlmere instance using io-ts. We can convert this into a 'decoder' using asDecoder(), and then use the 
//   .decode method to validate our query response. 

// */

// // const reducer = (state, action) => {
// //   switch (action.type) {
// //     case 'IS_AUTHENTICATED':
// //       return {
// //         ...state,
// //         isAuthenticated: true,
// //       };
// //     // ... you can image the other cases
// //     default: return state;
// //   }
// // };

// // const initialState = {
// //   isAuthenticated: false,
// //   shake: false,
// //   categories: ['Participants', 'Races'],
// // };



// "recDSfaVc2clkOcLR"

interface IQueryAirtableProps extends JSX.IntrinsicAttributes {
  subassemblyName: SubassemblyName
}

export const QueryAirtable = ({subassemblyName}: IQueryAirtableProps ) => {

  const dispatch = useDispatch()

  const [moduleName, setModuleName] = useState<SubassemblyName>()
  // setModuleName(_moduleName); 

  type Data = {subassemblies: Subassembly[]}
  type Variables = Partial<Subassembly>

  
  const { loading, error, data } = useQuery<Data,Variables>(GET_SUBASSEMBLY, { variables: {subassemblyName } } ); 
  console.log(error); 
  if (data !== undefined) dispatch(upsertSubassembly(data.subassemblies[0]))

//   const decoder = Subassemblies.asDecoder()s
//   const result = decodeWith(decoder)(data?.subassemblies); 
  // console.log(result)
 
  return (
    <div>
      <pre>{ JSON.stringify(data, null, 2) }</pre>
    </div>
  );
}