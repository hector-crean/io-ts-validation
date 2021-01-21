// https://kimmosaaskilahti.fi/blog/2019-08-29-fp-ts/
// https://dev.to/gnomff_65/fp-ts-sequencet-and-sweet-sweet-async-typed-fp-5aop
// https://github.com/ksaaskil/fp-gitlab-example


import { ApolloError, ApolloQueryResult, ApolloClient, gql, DocumentNode, NormalizedCacheObject} from '@apollo/client'; 
import { GET_PROJECT } from './query'; 


import { flatten, map } from 'fp-ts/lib/Array'
import * as TE from 'fp-ts/lib/TaskEither'
import * as E from 'fp-ts/lib/Either'
import * as T from 'fp-ts/lib/Task'
import { sequenceT } from 'fp-ts/lib/Apply'
import { pipe } from 'fp-ts/lib/pipeable'
import { flow } from 'fp-ts/lib/function'
import { failure } from 'io-ts/lib/PathReporter'
import * as t from 'io-ts'

import { Users, Answer } from './types/static-types'; 
import { users, answer } from './types/iots-types'; 

import { ProjectArray as projectArrayCodec } from './types/t'; 
import { client } from '../client';

const query = gql`query MyQuery {
  projects(id: "recDSfaVc2clkOcLR") {
    id
    projectOwner {
      id
      ownerName
      ownerTasteProfile {
        desireColour
        desireColourMeta
        id
      }
    }
    projectProperty {
      id
      propertyAddress
      propertyBoundary
      propertyBuilding1 {
        buildingEnergyPerformance {
          energyAirflowExchange
          energyDoorUValue
          energyFloorUValue
          energyMeanTemperatureExternal
          energyRoofUValue
          energyRooflightUValue
          energySpaceCoolingType
          energyTariffElectricity
          energySpaceHeatingType
          energyTariffGas
          energyTempInternalAdjusted
          energyVentilationType
          energyWallUValue
          energyWaterHeatingType
          id
          energyWindowUValue
        }
        buildingFoundationType
        buildingName
        buildingNumberBathrooms
        buildingPattern {
          id
          patternBarcode
          patternRating
          patternSubassembliesUsed {
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
        id
      }
      propertyBuilding2
      propertyBuilding3
      propertyDescription
      propertyName
      propertyNorthing
      propertyType
      propertyUprn
    }
  }
}
`
const query2 = gql`query MyQuery {
  projects(id: "recDSfaVc2clkOcLR") {
    id
    projectOwner {
      id
      ownerName
      ownerTasteProfile {
        desireColour
        desireColourMeta
        id
      }
    }
    projectProperty {
      id
      propertyAddress
      propertyBoundary
      propertyBuilding1 {
        buildingEnergyPerformance {
          energyAirflowExchange
          energyDoorUValue
          energyFloorUValue
          energyMeanTemperatureExternal
          energyRoofUValue
          energyRooflightUValue
          energySpaceCoolingType
          energyTariffElectricity
          energySpaceHeatingType
          energyTariffGas
          energyTempInternalAdjusted
          energyVentilationType
          energyWallUValue
          energyWaterHeatingType
          id
          energyWindowUValue
        }
        buildingFoundationType
        buildingName
        buildingNumberBathrooms
        buildingPattern {
          id
          patternBarcode
          patternRating
          patternSubassembliesUsed {
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
        id
      }
      propertyBuilding2
      propertyBuilding3
      propertyDescription
      propertyName
      propertyNorthing
      propertyType
      propertyUprn
    }
  }
}
`



//Convert our api call to a TaskEither
const graphqlGet = (
  client: ApolloClient<NormalizedCacheObject>, 
  query: DocumentNode
) => TE.tryCatch<Error, ApolloQueryResult<any>>(
  () => client.query({query: query }),
  reason => new Error(String(reason))
)

//function to decode an unknown into an A
const decodeWith = <A>(decoder: t.Decoder<unknown, A>) =>
  flow(
    decoder.decode,
    E.mapLeft(errors => new Error(failure(errors).join('\n'))),
    TE.fromEither
  )

//takes a graphql client, a query, and a decoder and gives you back an Either<Error, A>
export const graphqlGetEither = <A>(
  client: ApolloClient<NormalizedCacheObject>, 
  query:DocumentNode, 
  codec:t.Decoder<unknown, A>
) => pipe(
  graphqlGet(client, query),
  TE.map(x => x.data),
  // TE.chain(decodeWith(codec))
);


// const getAnswer = pipe(
//   TE.right({ans: 42}),
//   TE.chain(decodeWith(answer))
// )
export const exampleQuery = graphqlGetEither(client, query2, projectArrayCodec)


const onRunQueryLeft = (e: Error): T.Task<unknown> => {
  return T.of(e.message)
}
const onRunQueryRight = (a: [any]): T.Task<unknown> => {
  return T.of(a)
}
export const runQuery = pipe(
  sequenceT(TE.taskEither)(
    graphqlGetEither(client, query2, projectArrayCodec)
  ),
  TE.fold(
    onRunQueryLeft,
    onRunQueryRight,
  ),
)();







// runProgram.then(console.log)


/*
export const runProgram = pipe(
  sequenceT(TE.taskEither)(
    graphqlGetEither(client, query, projectCodec)
  ),

  TE.fold(
    (errors) => T.of(errors.message),
    ([project1]) => T.of(`\nThe answer was ${project1} for all of you`),
  )
)();
*/



// const tryCatch = <L, R>(f: () => Promise<R>): Observable<Either<L, R>> =>
//   defer(f).pipe(
//     map((r) => right<L, R>(r)),
//     catchError((l) => of(left<L, R>(l)))
//   );