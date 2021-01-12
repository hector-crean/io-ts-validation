import React, {useState} from 'react';

import { useQuery } from "@apollo/client";
import { StructureAlmere, StructureAlmereArray, decodeWith, ModuleName  } from './types'; 
import { GET_ALMERE_STRUCT, GET_MODULE } from './queries'




/* The magic is happening in types/index.ts file: -> 
  Creating a StructureAlmere instance using io-ts. We can convert this into a 'decoder' using asDecoder(), and then use the 
  .decode method to validate our query response. 

*/

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'IS_AUTHENTICATED':
//       return {
//         ...state,
//         isAuthenticated: true,
//       };
//     // ... you can image the other cases
//     default: return state;
//   }
// };

// const initialState = {
//   isAuthenticated: false,
//   shake: false,
//   categories: ['Participants', 'Races'],
// };




interface IQueryAirtableProps extends JSX.IntrinsicAttributes {
  _moduleName: ModuleName
}

export const QueryAirtable = ({_moduleName}: IQueryAirtableProps ) => {

  const [moduleName, setModuleName] = useState<ModuleName>()
  // setModuleName(_moduleName); 

  type Data = {structureDataAlmere: StructureAlmere[] | StructureAlmereArray}
  type Variables = StructureAlmere | StructureAlmere[]

  
  const { loading, error, data } = useQuery<Data, Variables> (GET_MODULE, {
    variables: {moduleName: _moduleName}}); 

  const decoder = StructureAlmereArray.asDecoder()
  const result = decodeWith(decoder)(data?.structureDataAlmere); 
  // console.log(result)
 
  return (
    <div>
      <pre>{ JSON.stringify(result, null, 2) }</pre>
    </div>
  );
}