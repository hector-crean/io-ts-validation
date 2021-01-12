import React from 'react';
import './App.css';

import { gql, useQuery } from "@apollo/client";
import { StructureAlmere, StructureAlmereArray, decodeWith  } from './types'; 



const GET_ALMERE_STRUCT = gql`
  query {
    structureDataAlmere {
      assemblyTimeInDays
      buildingSystem
      id
      locationClass
      moduleName
      pitchedAngle1
      pitchedAngle2
      primaryMaterial
      roofPitchType
      spansNStories
      unitCost
      thickness
      xDimension
      yDimension
      zDimension
    }
  }`;

/* The magic is happening in types/index.ts file: -> 
  Creating a StructureAlmere instance using io-ts. We can convert this into a 'decoder' using asDecoder(), and then use the 
  .decode method to validate our query response. 

*/



function App() {

  type Data = {structureDataAlmere: StructureAlmere[] }
  type Variables = StructureAlmere
  
  const { loading, error, data } = useQuery<Data, Variables> (GET_ALMERE_STRUCT); 
  const decoder = StructureAlmereArray.asDecoder()
  const result = decodeWith(decoder)(data?.structureDataAlmere); 
  console.log(result)
 
  return (
    <div className="App">
      <pre>{ JSON.stringify(result, null, 2) }</pre>
    </div>
  );
}

export default App;
