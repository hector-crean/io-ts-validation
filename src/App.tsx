import React from 'react';
import logo from './logo.svg';
import './App.css';

import { gql, useQuery } from "@apollo/client";

// import { Island } from './types'; 

// import { ApolloConsumer } from '@apollo/client';
// const WithApolloClient = () => (
//   <ApolloConsumer>
//     {client => 'We have access to the client!' /* do stuff here */}
//   </ApolloConsumer>
// );

import { validator, StructureAlmere, StructureAlmereArray, decodeWith, Simple } from './types'; 
import * as D from 'io-ts/Decoder'; 



const GET_QUERY = gql`
  query MyQuery {
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




function App() {

  const q = useQuery(GET_QUERY); 
  // console.log(q.data); 
  const a1 = q.data?.structureDataAlmere
  // console.log(a1); 
  const result = decodeWith(StructureAlmereArray.asDecoder())(a1); 
  console.log(result)
  // console.log(result); 
  
  // const r = TStructureAlmereArray.decode(q.data); 
  // console.log(r); 
  
  // console.log(decodeWith(TStructureAlmereArray.asDecoder())(q.data))

  // const theDecoder: D.Decoder<unknown, StructureAlmereType> = TStructureAlmere.asDecoder()
  // const r = validator(theDecoder)(q)
  // console.log('r', r)
  // console.log(r); 


  return (
    <div className="App">
      {/* <pre>{ JSON.stringify(result, null, 2) }</pre> */}
    </div>
  );
}

export default App;
