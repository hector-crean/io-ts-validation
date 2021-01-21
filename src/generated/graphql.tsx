import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  subassemblies?: Maybe<Array<Maybe<Subassemblies>>>;
  projects?: Maybe<Array<Maybe<Projects>>>;
  designers?: Maybe<Array<Maybe<Designers>>>;
  owner?: Maybe<Array<Maybe<Owner>>>;
  tasteProfiles?: Maybe<Array<Maybe<TasteProfiles>>>;
  patterns?: Maybe<Array<Maybe<Patterns>>>;
  property?: Maybe<Array<Maybe<Property>>>;
  building?: Maybe<Array<Maybe<Building>>>;
  energyPerformance?: Maybe<Array<Maybe<EnergyPerformance>>>;
};


export type QuerySubassembliesArgs = {
  id?: Maybe<Scalars['String']>;
  subassemblyId?: Maybe<Scalars['String']>;
  subassemblyName?: Maybe<Scalars['String']>;
  subassemblyBuildingSystem?: Maybe<Scalars['String']>;
  subassemblyLocationClass?: Maybe<Scalars['String']>;
  subassemblyXDimension?: Maybe<Scalars['Float']>;
  subassemblyYDimension?: Maybe<Scalars['Float']>;
  subassemblyZDimension?: Maybe<Scalars['Float']>;
  subassemblyPitchedAngle1?: Maybe<Scalars['Float']>;
  subassemblyPitchedAngle2?: Maybe<Scalars['Float']>;
  subassemblySpansNStories?: Maybe<Scalars['String']>;
  subassemblyThickness?: Maybe<Scalars['Float']>;
  subassemblyRoofPitchType?: Maybe<Scalars['String']>;
  subassemblyAssemblyTimeInDays?: Maybe<Scalars['Float']>;
  subassemblyUnitCost?: Maybe<Scalars['Float']>;
  subassemblyPrimaryMaterial?: Maybe<Scalars['String']>;
  subassemblyDesigner?: Maybe<Array<Maybe<Scalars['String']>>>;
  _filter?: Maybe<Scalars['JSON']>;
  _order_by?: Maybe<Scalars['JSON']>;
  _page_size?: Maybe<Scalars['JSON']>;
  _page?: Maybe<Scalars['JSON']>;
};


export type QueryProjectsArgs = {
  id?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  _filter?: Maybe<Scalars['JSON']>;
  _order_by?: Maybe<Scalars['JSON']>;
  _page_size?: Maybe<Scalars['JSON']>;
  _page?: Maybe<Scalars['JSON']>;
};


export type QueryDesignersArgs = {
  id?: Maybe<Scalars['String']>;
  designerId?: Maybe<Scalars['String']>;
  designerPhoto?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  designerName?: Maybe<Scalars['String']>;
  _filter?: Maybe<Scalars['JSON']>;
  _order_by?: Maybe<Scalars['JSON']>;
  _page_size?: Maybe<Scalars['JSON']>;
  _page?: Maybe<Scalars['JSON']>;
};


export type QueryOwnerArgs = {
  id?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
  ownerName?: Maybe<Scalars['String']>;
  _filter?: Maybe<Scalars['JSON']>;
  _order_by?: Maybe<Scalars['JSON']>;
  _page_size?: Maybe<Scalars['JSON']>;
  _page?: Maybe<Scalars['JSON']>;
};


export type QueryTasteProfilesArgs = {
  id?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
  desireColour?: Maybe<Scalars['String']>;
  desireColourMeta?: Maybe<Scalars['String']>;
  _filter?: Maybe<Scalars['JSON']>;
  _order_by?: Maybe<Scalars['JSON']>;
  _page_size?: Maybe<Scalars['JSON']>;
  _page?: Maybe<Scalars['JSON']>;
};


export type QueryPatternsArgs = {
  id?: Maybe<Scalars['String']>;
  patternId?: Maybe<Scalars['Float']>;
  patternBarcode?: Maybe<Scalars['String']>;
  patternRating?: Maybe<Scalars['Int']>;
  patternJsonSchema?: Maybe<Scalars['String']>;
  _filter?: Maybe<Scalars['JSON']>;
  _order_by?: Maybe<Scalars['JSON']>;
  _page_size?: Maybe<Scalars['JSON']>;
  _page?: Maybe<Scalars['JSON']>;
};


export type QueryPropertyArgs = {
  id?: Maybe<Scalars['String']>;
  propertyId?: Maybe<Scalars['String']>;
  propertyUprn?: Maybe<Scalars['String']>;
  propertyName?: Maybe<Scalars['String']>;
  propertyAddress?: Maybe<Scalars['String']>;
  propertyNorthing?: Maybe<Scalars['Float']>;
  propertyBoundary?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  propertyDescription?: Maybe<Scalars['String']>;
  propertyType?: Maybe<Scalars['String']>;
  propertyBuilding2?: Maybe<Scalars['String']>;
  propertyBuilding3?: Maybe<Scalars['String']>;
  _filter?: Maybe<Scalars['JSON']>;
  _order_by?: Maybe<Scalars['JSON']>;
  _page_size?: Maybe<Scalars['JSON']>;
  _page?: Maybe<Scalars['JSON']>;
};


export type QueryBuildingArgs = {
  id?: Maybe<Scalars['String']>;
  buildingId?: Maybe<Scalars['String']>;
  buildingFoundationType?: Maybe<Scalars['String']>;
  buildingNumberBathrooms?: Maybe<Scalars['Float']>;
  buildingName?: Maybe<Scalars['String']>;
  _filter?: Maybe<Scalars['JSON']>;
  _order_by?: Maybe<Scalars['JSON']>;
  _page_size?: Maybe<Scalars['JSON']>;
  _page?: Maybe<Scalars['JSON']>;
};


export type QueryEnergyPerformanceArgs = {
  id?: Maybe<Scalars['String']>;
  energyId?: Maybe<Scalars['String']>;
  energyTariffElectricity?: Maybe<Scalars['Float']>;
  energyTariffGas?: Maybe<Scalars['Float']>;
  energyMeanTemperatureExternal?: Maybe<Scalars['Float']>;
  energyWallUValue?: Maybe<Scalars['Float']>;
  energyRoofUValue?: Maybe<Scalars['Float']>;
  energyFloorUValue?: Maybe<Scalars['Float']>;
  energyWindowUValue?: Maybe<Scalars['Float']>;
  energyRooflightUValue?: Maybe<Scalars['Float']>;
  energyDoorUValue?: Maybe<Scalars['Float']>;
  energyAirflowExchange?: Maybe<Scalars['Float']>;
  energyVentilationType?: Maybe<Scalars['String']>;
  energyTempInternalAdjusted?: Maybe<Scalars['Float']>;
  energySpaceHeatingType?: Maybe<Scalars['String']>;
  energySpaceCoolingType?: Maybe<Scalars['String']>;
  energyWaterHeatingType?: Maybe<Scalars['String']>;
  _filter?: Maybe<Scalars['JSON']>;
  _order_by?: Maybe<Scalars['JSON']>;
  _page_size?: Maybe<Scalars['JSON']>;
  _page?: Maybe<Scalars['JSON']>;
};

export type Subassemblies = {
  __typename?: 'subassemblies';
  id?: Maybe<Scalars['String']>;
  subassemblyId?: Maybe<Scalars['String']>;
  subassemblyName?: Maybe<Scalars['String']>;
  subassemblyBuildingSystem?: Maybe<Scalars['String']>;
  subassemblyLocationClass?: Maybe<Scalars['String']>;
  subassemblyXDimension?: Maybe<Scalars['Float']>;
  subassemblyYDimension?: Maybe<Scalars['Float']>;
  subassemblyZDimension?: Maybe<Scalars['Float']>;
  subassemblyPitchedAngle1?: Maybe<Scalars['Float']>;
  subassemblyPitchedAngle2?: Maybe<Scalars['Float']>;
  subassemblySpansNStories?: Maybe<Scalars['String']>;
  subassemblyThickness?: Maybe<Scalars['Float']>;
  subassemblyRoofPitchType?: Maybe<Scalars['String']>;
  subassemblyAssemblyTimeInDays?: Maybe<Scalars['Float']>;
  subassemblyUnitCost?: Maybe<Scalars['Float']>;
  subassemblyPrimaryMaterial?: Maybe<Scalars['String']>;
  subassemblyDesigner?: Maybe<Array<Maybe<Scalars['String']>>>;
  patterns?: Maybe<Array<Maybe<Patterns>>>;
};

export type Patterns = {
  __typename?: 'patterns';
  id?: Maybe<Scalars['String']>;
  patternId?: Maybe<Scalars['Float']>;
  patternBarcode?: Maybe<Scalars['String']>;
  patternRating?: Maybe<Scalars['Int']>;
  patternJsonSchema?: Maybe<Scalars['String']>;
  patternDesigner?: Maybe<Array<Maybe<Designers>>>;
  building?: Maybe<Array<Maybe<Building>>>;
  patternSubassembliesUsed?: Maybe<Array<Maybe<Subassemblies>>>;
};

export type Designers = {
  __typename?: 'designers';
  id?: Maybe<Scalars['String']>;
  designerId?: Maybe<Scalars['String']>;
  designerPhoto?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  designerName?: Maybe<Scalars['String']>;
  patterns?: Maybe<Array<Maybe<Patterns>>>;
};


export type Building = {
  __typename?: 'building';
  id?: Maybe<Scalars['String']>;
  buildingId?: Maybe<Scalars['String']>;
  buildingFoundationType?: Maybe<Scalars['String']>;
  buildingNumberBathrooms?: Maybe<Scalars['Float']>;
  buildingName?: Maybe<Scalars['String']>;
  buildingPattern?: Maybe<Array<Maybe<Patterns>>>;
  buildingEnergyPerformance?: Maybe<Array<Maybe<EnergyPerformance>>>;
  property?: Maybe<Array<Maybe<Property>>>;
};

export type EnergyPerformance = {
  __typename?: 'energyPerformance';
  id?: Maybe<Scalars['String']>;
  energyId?: Maybe<Scalars['String']>;
  energyTariffElectricity?: Maybe<Scalars['Float']>;
  energyTariffGas?: Maybe<Scalars['Float']>;
  energyMeanTemperatureExternal?: Maybe<Scalars['Float']>;
  energyWallUValue?: Maybe<Scalars['Float']>;
  energyRoofUValue?: Maybe<Scalars['Float']>;
  energyFloorUValue?: Maybe<Scalars['Float']>;
  energyWindowUValue?: Maybe<Scalars['Float']>;
  energyRooflightUValue?: Maybe<Scalars['Float']>;
  energyDoorUValue?: Maybe<Scalars['Float']>;
  energyAirflowExchange?: Maybe<Scalars['Float']>;
  energyVentilationType?: Maybe<Scalars['String']>;
  energyTempInternalAdjusted?: Maybe<Scalars['Float']>;
  energySpaceHeatingType?: Maybe<Scalars['String']>;
  energySpaceCoolingType?: Maybe<Scalars['String']>;
  energyWaterHeatingType?: Maybe<Scalars['String']>;
  building?: Maybe<Array<Maybe<Building>>>;
};

export type Property = {
  __typename?: 'property';
  id?: Maybe<Scalars['String']>;
  propertyId?: Maybe<Scalars['String']>;
  propertyUprn?: Maybe<Scalars['String']>;
  propertyName?: Maybe<Scalars['String']>;
  propertyAddress?: Maybe<Scalars['String']>;
  propertyNorthing?: Maybe<Scalars['Float']>;
  propertyBoundary?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  propertyDescription?: Maybe<Scalars['String']>;
  propertyType?: Maybe<Scalars['String']>;
  propertyBuilding2?: Maybe<Scalars['String']>;
  propertyBuilding3?: Maybe<Scalars['String']>;
  propertyBuilding1?: Maybe<Array<Maybe<Building>>>;
  projects?: Maybe<Array<Maybe<Projects>>>;
};

export type Projects = {
  __typename?: 'projects';
  id?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  projectOwner?: Maybe<Array<Maybe<Owner>>>;
  projectProperty?: Maybe<Array<Maybe<Property>>>;
};

export type Owner = {
  __typename?: 'owner';
  id?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
  ownerName?: Maybe<Scalars['String']>;
  ownerTasteProfile?: Maybe<Array<Maybe<TasteProfiles>>>;
  projects?: Maybe<Array<Maybe<Projects>>>;
};

export type TasteProfiles = {
  __typename?: 'tasteProfiles';
  id?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
  desireColour?: Maybe<Scalars['String']>;
  desireColourMeta?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<Owner>>>;
};

export type GetProjectQueryVariables = Exact<{
  projectId: Scalars['String'];
}>;


export type GetProjectQuery = (
  { __typename?: 'Query' }
  & { projects?: Maybe<Array<Maybe<(
    { __typename?: 'projects' }
    & { projectOwner?: Maybe<Array<Maybe<(
      { __typename?: 'owner' }
      & Pick<Owner, 'ownerId' | 'ownerName'>
      & { ownerTasteProfile?: Maybe<Array<Maybe<(
        { __typename?: 'tasteProfiles' }
        & Pick<TasteProfiles, 'desireColour' | 'desireColourMeta' | 'ownerId'>
      )>>> }
    )>>>, projectProperty?: Maybe<Array<Maybe<(
      { __typename?: 'property' }
      & Pick<Property, 'propertyAddress' | 'propertyBoundary' | 'propertyBuilding2' | 'propertyBuilding3' | 'propertyDescription' | 'propertyId' | 'propertyName' | 'propertyNorthing' | 'propertyType' | 'propertyUprn'>
      & { propertyBuilding1?: Maybe<Array<Maybe<(
        { __typename?: 'building' }
        & Pick<Building, 'buildingFoundationType' | 'buildingId' | 'buildingName' | 'buildingNumberBathrooms'>
        & { buildingEnergyPerformance?: Maybe<Array<Maybe<(
          { __typename?: 'energyPerformance' }
          & Pick<EnergyPerformance, 'energyAirflowExchange' | 'energyDoorUValue' | 'energyFloorUValue' | 'energyId' | 'energyMeanTemperatureExternal' | 'energyRoofUValue' | 'energyRooflightUValue' | 'energySpaceCoolingType' | 'energySpaceHeatingType' | 'energyTariffElectricity' | 'energyTariffGas' | 'energyTempInternalAdjusted' | 'energyVentilationType' | 'energyWallUValue' | 'energyWaterHeatingType' | 'energyWindowUValue'>
        )>>>, buildingPattern?: Maybe<Array<Maybe<(
          { __typename?: 'patterns' }
          & Pick<Patterns, 'patternBarcode' | 'patternJsonSchema' | 'patternId' | 'patternRating'>
          & { patternDesigner?: Maybe<Array<Maybe<(
            { __typename?: 'designers' }
            & Pick<Designers, 'designerId' | 'designerName' | 'designerPhoto'>
          )>>> }
        )>>> }
      )>>> }
    )>>> }
  )>>> }
);

export type GetSubassemblyQueryVariables = Exact<{
  subassemblyName: Scalars['String'];
}>;


export type GetSubassemblyQuery = (
  { __typename?: 'Query' }
  & { subassemblies?: Maybe<Array<Maybe<(
    { __typename?: 'subassemblies' }
    & Pick<Subassemblies, 'subassemblyAssemblyTimeInDays' | 'subassemblyBuildingSystem' | 'subassemblyDesigner' | 'subassemblyId' | 'subassemblyLocationClass' | 'subassemblyName' | 'subassemblyPitchedAngle1' | 'subassemblyPitchedAngle2' | 'subassemblyPrimaryMaterial' | 'subassemblyRoofPitchType' | 'subassemblySpansNStories' | 'subassemblyThickness' | 'subassemblyUnitCost' | 'subassemblyXDimension' | 'subassemblyYDimension' | 'subassemblyZDimension'>
  )>>> }
);


export const GetProjectDocument = gql`
    query GetProject($projectId: String!) {
  projects(projectId: $projectId) {
    projectOwner {
      ownerId
      ownerName
      ownerTasteProfile {
        desireColour
        desireColourMeta
        ownerId
      }
    }
    projectProperty {
      propertyAddress
      propertyBoundary
      propertyBuilding1 {
        buildingEnergyPerformance {
          energyAirflowExchange
          energyDoorUValue
          energyFloorUValue
          energyId
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
        }
        buildingFoundationType
        buildingId
        buildingName
        buildingNumberBathrooms
        buildingPattern {
          patternBarcode
          patternDesigner {
            designerId
            designerName
            designerPhoto
          }
          patternJsonSchema
          patternId
          patternRating
        }
      }
      propertyBuilding2
      propertyBuilding3
      propertyDescription
      propertyId
      propertyName
      propertyNorthing
      propertyType
      propertyUprn
    }
  }
}
    `;

/**
 * __useGetProjectQuery__
 *
 * To run a query within a React component, call `useGetProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetProjectQuery(baseOptions: Apollo.QueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
        return Apollo.useQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, baseOptions);
      }
export function useGetProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
          return Apollo.useLazyQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, baseOptions);
        }
export type GetProjectQueryHookResult = ReturnType<typeof useGetProjectQuery>;
export type GetProjectLazyQueryHookResult = ReturnType<typeof useGetProjectLazyQuery>;
export type GetProjectQueryResult = Apollo.QueryResult<GetProjectQuery, GetProjectQueryVariables>;
export const GetSubassemblyDocument = gql`
    query GetSubassembly($subassemblyName: String!) {
  subassemblies(subassemblyName: $subassemblyName) {
    subassemblyAssemblyTimeInDays
    subassemblyBuildingSystem
    subassemblyDesigner
    subassemblyId
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
    `;

/**
 * __useGetSubassemblyQuery__
 *
 * To run a query within a React component, call `useGetSubassemblyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubassemblyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubassemblyQuery({
 *   variables: {
 *      subassemblyName: // value for 'subassemblyName'
 *   },
 * });
 */
export function useGetSubassemblyQuery(baseOptions: Apollo.QueryHookOptions<GetSubassemblyQuery, GetSubassemblyQueryVariables>) {
        return Apollo.useQuery<GetSubassemblyQuery, GetSubassemblyQueryVariables>(GetSubassemblyDocument, baseOptions);
      }
export function useGetSubassemblyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubassemblyQuery, GetSubassemblyQueryVariables>) {
          return Apollo.useLazyQuery<GetSubassemblyQuery, GetSubassemblyQueryVariables>(GetSubassemblyDocument, baseOptions);
        }
export type GetSubassemblyQueryHookResult = ReturnType<typeof useGetSubassemblyQuery>;
export type GetSubassemblyLazyQueryHookResult = ReturnType<typeof useGetSubassemblyLazyQuery>;
export type GetSubassemblyQueryResult = Apollo.QueryResult<GetSubassemblyQuery, GetSubassemblyQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    