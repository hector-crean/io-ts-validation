import { ApolloError, ApolloQueryResult, ApolloClient, gql, DocumentNode} from '@apollo/client'; 

export const GET_PROJECT = (id: string) => gql`query {
  projects(id: ${id}) {
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