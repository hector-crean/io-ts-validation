import React, {useState} from 'react';
import './App.css';


import { QueryAirtable } from './QueryAirtable'; 
import { upsertAlmereModule } from './store/model/action'; 
import { store } from './store'
import {AlmereModule} from './store/model/types'

function App() {

  const mod1: AlmereModule  =  {
  __typename: "structureDataAlmere",
  assemblyTimeInDays: 2,
  buildingSystem: "WikiHouseSwift",
  id: "1",
  locationClass: "EnvelopeSection",
  moduleName: "Module-A1_05",
  pitchedAngle1: 45,
  pitchedAngle2: 45,
  primaryMaterial: "Timber.Plywood",
  roofPitchType: "Dual-centre",
  spansNStories: "1",
  unitCost: 695,
  thickness: 0.336,
  xDimension: 3.3,
  yDimension: 1.2,
  zDimension: 5.9
}
const mod2: AlmereModule  =  {
  __typename: "structureDataAlmere",
  assemblyTimeInDays: 2,
  buildingSystem: "WikiHouseSwift",
  id: "1",
  locationClass: "EnvelopeSection",
  moduleName: "Module-A1_04",
  pitchedAngle1: 45,
  pitchedAngle2: 45,
  primaryMaterial: "Timber.Plywood",
  roofPitchType: "Dual-centre",
  spansNStories: "1",
  unitCost: 695,
  thickness: 0.336,
  xDimension: 3.3,
  yDimension: 1.2,
  zDimension: 5.9
}
 
  store.dispatch(upsertAlmereModule(mod1))
  store.dispatch(upsertAlmereModule(mod2))


 
  return (
    <div className="App">

    </div>
  );
}

export default App;
