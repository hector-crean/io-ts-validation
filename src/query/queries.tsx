// https://app.graphqleditor.com/hector-crean/build-x?v=latest

import { gql, useQuery  } from "@apollo/client";

export const GET_SUBASSEMBLY_STRUCT = gql`
  query {
    subassemblies {
      assemblyTimeInDays
      buildingSystem
      id
      locationClass
      subassemblyName
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

export const GET_SUBASSEMBLY = gql`
  query getSubassembly($subassemblyName: String! ) {
    subassemblies(subassemblyName: $subassemblyName) {
      id
      subassemblyAssemblyTimeInDays
      subassemblyBuildingSystem
      subassemblyDesigner
      subassemblyLocationClass
      subassemblyName
      subassemblyPitchedAngle1
      subassemblyPitchedAngle2
      subassemblyPrimaryMaterial
      subassemblyRoofPitchType
      subassemblySpansNStories
      subassemblyThickness
      subassemblyUnitCost
      subassemblyXDimension
      subassemblyYDimension
      subassemblyZDimension
    }
  }
`


// export const GET_MODULE = gql`
//     query findModule($moduleName: String!) {
//       subassemblies(moduleName: $moduleName) {
//             assemblyTimeInDays
//             buildingSystem
//             id
//             locationClass
//             moduleName
//             pitchedAngle1
//             pitchedAngle2
//             primaryMaterial
//             roofPitchType
//             spansNStories
//             unitCost
//             thickness
//             xDimension
//             yDimension
//             zDimension
//         }
//     }
// `

export const GET_PROJECT = gql`
  query getProject($id: String!) {
  projects(id: $id) {
    id
    projectProperty {
      id
      propertyAddress
      propertyBoundary
      propertyBuilding2
      propertyBuilding3
      propertyDescription
      propertyId
      propertyName
      propertyNorthing
      propertyType
      propertyUprn
      propertyBuilding1 {
        buildingFoundationType
        buildingName
        buildingNumberBathrooms
        id
        buildingEnergyPerformance {
          energyAirflowExchange
          energyFloorUValue
          energyDoorUValue
          energyMeanTemperatureExternal
          energyRoofUValue
          energyRooflightUValue
          energySpaceCoolingType
          energySpaceHeatingType
          energyTariffElectricity
          energyTariffGas
          energyTempInternalAdjusted
          energyVentilationType
          energyWallUValue
          energyWaterHeatingType
          energyWindowUValue
          id
        }
        buildingPattern {
          id
          patternBarcode
          patternDesigner {
            designerName
            id
          }
          patternJsonSchema
          patternRating
        }
      }
    }
    projectOwner {
      id
      ownerName
      ownerTasteProfile {
        desireColour
        desireColourMeta
        id
      }
    }
  }
}
`