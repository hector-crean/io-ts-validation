import { gql, useQuery  } from "@apollo/client";
import { ModuleName } from './types'; 

export const GET_ALMERE_STRUCT = gql`
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




export const GET_MODULE = gql`
    query findModule($moduleName: String!) {
        structureDataAlmere(moduleName: $moduleName) {
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
    }
`

