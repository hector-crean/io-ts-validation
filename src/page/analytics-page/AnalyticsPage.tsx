import React, { useState, useReducer } from 'react';
import DataTable  from '../../components/body/DataTable/DataTable'; 
import { DataTableSkeleton, DataTableSkeletonProps } from 'carbon-components-react'
import { Button } from 'carbon-components-react'
// Using the elm model: state, view and update (can simulate this using reducers)

import { GetProjectQuery, GetProjectQueryVariables, GetAllSubassembliesQuery, GetAllSubassembliesQueryVariables,Projects, Property, Maybe, Building, Patterns, Subassemblies, EnergyPerformance, Designers } from '../../generated/graphql'; 
import { useQuery  } from '@apollo/client'
import { loader } from 'graphql.macro';

import TreeChart, {example_treeMapData, example_treeMapOptions} from '../../components/body/Chart/Tree'; 
import RadarChart, {example_radarChartData, example_radarChartOptions} from '../../components/body/Chart/Radar'; 
import { GaugeChart, DonutChart, ComboChart } from "@carbon/charts-react";
import { GaugeChartOptions, GaugeTypes, Alignments, Statuses, DonutChartOptions, ComboChartOptions, ScaleTypes} from '@carbon/charts/interfaces'; 

/**
 *  gauge?: {
        arcWidth?: number;
        deltaArrow?: {
            direction?: ArrowDirections;
            size?: Function;
            enabled: Boolean;
        };
        status?: Statuses;
        deltaFontSize?: Function;
        numberSpacing?: number;
        numberFormatter?: Function;
        valueFontSize?: Function;
        type?: GaugeTypes;
        alignment?: Alignments;
    };
 */

const dataTableSkeletonProps = () => ({
  headers:
    [
      { key: 'name' },
      { key: 'protocol' },
      { key: 'port' },
      { key: 'rule' },
      { key: 'attached-groups' },
    ],
  zebra: false,
  compact: false,
  showHeader: true,
  showToolbar: true,
});

const comboChartState: {data: any, options: ComboChartOptions} = {
  data: [
{
  "group": "Heating",
  "key": "January",
  "value": 900
},
{
  "group": "Heating",
  "key": "February",
  "value": 850
},
{
  "group": "Heating",
  "key": "March",
  "value": 700
},
{
  "group": "Heating",
  "key": "April",
  "value": 690
},
{
  "group": "Heating",
  "key": "May",
  "value": 680
},
{
  "group": "Heating",
  "key": "June",
  "value": 560
},
{
  "group": "Heating",
  "key": "July",
  "value": 670
},
{
  "group": "Heating",
  "key": "August",
  "value": 660
},
{
  "group": "Temperature",
  "key": "January",
  "temp": -20
},
{
  "group": "Temperature",
  "key": "February",
  "temp": -12
},
{
  "group": "Temperature",
  "key": "March",
  "temp": 3
},
{
  "group": "Temperature",
  "key": "April",
  "temp": 18
},
{
  "group": "Temperature",
  "key": "May",
  "temp": 24
},
{
  "group": "Temperature",
  "key": "June",
  "temp": 34
},
{
  "group": "Temperature",
  "key": "July",
  "temp": 37
},
{
  "group": "Temperature",
  "key": "August",
  "temp": 30
}
],
  options: {
// "experimental": true,
"title": "Annual Heating costs",
// "points": {
//   "enabled": false
// },
"axes": {
  "left": {
    "title": "Heating Cost",
    "mapsTo": "value"
  },
  "bottom": {
    "scaleType": ScaleTypes.LABELS,
    "mapsTo": "key"
  },
  "right": {
    "title": "Temperature (°C)",
    "mapsTo": "temp",
    // "correspondingDatasets": [
    //   "Temperature"
    // ]
  }
},
"comboChartTypes": [
  {
    "type": "area",
    "options": {},
    "correspondingDatasets": [
      "Heating"
    ]
  },
  {
    "type": "line",
    "options": {
      "points": {
        "enabled": true
      }
    },
    "correspondingDatasets": [
      "Temperature"
    ]
  }
],
// "curve": "curveNatural",
"height": "400px"
}
}

const gaugeChartState: {data: any, options: GaugeChartOptions} = {
  data: [
{
  "group": "value",
  "value": 42
},
{
  "group": "delta",
  "value": -13.37
}
],
  options: {
  "title": "Comparison running costs",
  "resizable": true,
  "height": "380px",
  "gauge": {
    "status": Statuses.DANGER,
    "type": GaugeTypes.FULL
  }
  }
};

const donutChartState: {data: any, options: DonutChartOptions} = {
  data: [
{
  "group": "Internal wall",
  "value": 2000
},
{
  "group": "Window",
  "value": 6500
},
{
  "group": "Floor",
  "value": 7500
},
{
  "group": "Roof",
  "value": 1200
},
{
  "group": "External Wall",
  "value": 1000
},
{
  "group": "Misc",
  "value": 2500
}
],
  options: {
"title": "Breakdown of subassembly cost, £",
"resizable": true,
"donut": {
  "center": {
    "label": "Cost by subassembly type"
  }
},
"height": "400px"
}
};

// // Lenses
// import { Lens, lens, Optional } from 'monocle-ts/es6'
// import { indexArray } from 'monocle-ts/lib/Index/Array'
// import { pipe } from 'fp-ts/function'

// type Projects_ = {
//   __typename: "projects";
//   id: string;
//   projectId: string;
//   projectOwner: any; //Owner_[];
//   projectProperty: Property_[]
// }
// type Property_ = {
//   __typename: 'property';
//   id: string;
//   propertyId: string;
//   propertyUprn: string;
//   propertyName: string;
//   propertyAddress: string; 
//   propertyNorthing: number; 
//   propertyBoundary: object[];
//   propertyDescription: string;
//   propertyType: string; 
//   propertyBuilding2: string; 
//   propertyBuilding3: string; 
//   propertyBuilding1: Building_[]
//   projects: Projects_[]
// }

// type Building_ = {
//   __typename: "building";
//   id: string;
//   buildingId: string;
//   buildingFoundationType: string;
//   buildingNumberBathrooms: number;
//   buildingName: string;
//   buildingPattern: Patterns_[]
//   buildingEnergyPerformance: any; //EnergyPerformance_[]
//   property: Property[]
// }
// type Patterns_ = {
//   __typename: 'patterns';
//   id: string;
//   patternId: number; 
//   patternBarcode: string; 
//   patternRating: number; 
//   patternJsonSchema: string; 
//   patternDesigner: Designers_[]
//   building: Building_[],
//   patternSubassembliesUsed?: Subassemblies_[]
// }
// type Designers_ = {
//   __typename: 'designers';
//   id: string;
//   designerId: string; 
//   designerPhoto: object; 
//   designerName: string; 
//   patterns: Patterns_[]
// };

// export type Subassemblies_ = {
//   __typename: 'subassemblies';
//   id: string; 
//   subassemblyId: string;
//   subassemblyName: string; 
//   subassemblyBuildingSystem: string; 
//   subassemblyLocationClass: string; 
//   subassemblyXDimension: number; 
//   subassemblyYDimension: number;
//   subassemblyZDimension: number; 
//   subassemblyPitchedAngle1: number; 
//   subassemblyPitchedAngle2: number; 
//   subassemblySpansNStories: string; 
//   subassemblyThickness: number; 
//   subassemblyRoofPitchType: string; 
//   subassemblyAssemblyTimeInDays: number; 
//   subassemblyUnitCost: number; 
//   subassemblyPrimaryMaterial: string; 
//   subassemblyDesigner: string; 
//   patterns: Patterns_[]
// }

// const projectsArrayLens = indexArray<Projects_>().index(0)
// // const propertyLens = L.prop<Projects>()('property'); // Lens<Parent, Child[]>
// // const propertyLens = Optional.fromNullableProp<Projects>()('projectProperty')
// const propertyLens = pipe(lens.id<Projects_>(), lens.prop('projectProperty'))
// const propertyArrayLens = indexArray<Property_>().index(0);
// const propertyBuilding1Lens = pipe( lens.id<Property_>(), lens.prop('propertyBuilding1') )
// const propertyBuilding1ArrayLens = indexArray<Building_>().index(0);
// const buildingPatternLens = pipe( lens.id<Building_>(), lens.prop('buildingPattern') )
// const buildingPatternsArrayLens = indexArray<Patterns_>().index(0);
// const buildingSubassembliesUsedLens = pipe( lens.id<Patterns_>(), lens.prop('patternSubassembliesUsed') )
// const buildingSubassembliesUsedArrayLens = indexArray<Subassemblies_>().index(0)

// const z = Lens.fromProp<Projects_>()('projectProperty').composeOptional(projectsArrayLens)




type Subassemblies_ = {
  __typename: 'subassemblies';
  id: string; 
  // subassemblyId: string;
  subassemblyName: string; 
  subassemblyBuildingSystem: string; 
  subassemblyLocationClass: string; 
  subassemblyXDimension: number; 
  subassemblyYDimension: number;
  subassemblyZDimension: number; 
  subassemblyPitchedAngle1: number; 
  subassemblyPitchedAngle2: number; 
  subassemblySpansNStories: string; 
  subassemblyThickness: number; 
  subassemblyRoofPitchType: string; 
  subassemblyAssemblyTimeInDays: number; 
  subassemblyUnitCost: number; 
  subassemblyPrimaryMaterial: string; 
  subassemblyDesigner: string[]; 
  patterns: object[], //Patterns_[]
}

  //headers specifies which table column headings should be displayed.
const headerData = [
    {
      key: '__typename',
      header: '__typename',
    },
    {
      key: 'subassemblyName',
      header: 'subassemblyName',
    },
    {
      key: 'subassemblyBuildingSystem',
      header: 'subassemblyBuildingSystem',
    },
    {
      key: 'subassemblyLocationClass',
      header: 'subassemblyLocationClass',
    },
    {
      key: 'subassemblyXDimension',
      header: 'subassemblyXDimension',
    },
    {
      key: 'subassemblyYDimension',
      header: 'subassemblyYDimension',
    },
    {
      key: 'subassemblyZDimension',
      header: 'subassemblyZDimension',
    },
    {
      key: 'subassemblyPitchedAngle1',
      header: 'subassemblyPitchedAngle1',
    }, 
    {
      key: 'subassemblyPitchedAngle2',
      header: 'subassemblyPitchedAngle2',
    },
    {
      key: 'subassemblySpansNStories',
      header: 'subassemblySpansNStories',
    },
    {
      key: 'subassemblyThickness',
      header: 'subassemblyThickness',
    },
    {
      key: 'subassemblyRoofPitchType',
      header: 'subassemblyRoofPitchType',
    },
    {
      key: 'subassemblyAssemblyTimeInDays',
      header: 'subassemblyAssemblyTimeInDays',
    },

    {
      key: 'subassemblyUnitCost',
      header: 'subassemblyUnitCost',
    },
    {
      key: 'subassemblyPrimaryMaterial',
      header: 'subassemblyPrimaryMaterial',
    },
    {
      key: 'subassemblyDesigner',
      header: 'subassemblyDesigner',
    },
    {
      key: 'patterns',
      header: 'patterns',
    },
  
    
  ];
  

interface AnalyticsPageState {
  rowData: Subassemblies_[] //{id: string; [h: string]: string}[],
  headerData:  { key: string; header: string; }[]
} 


const initalState: AnalyticsPageState = {
  rowData: [{
      subassemblyAssemblyTimeInDays: 2,
      subassemblyBuildingSystem: "WikiHouseSwift",
      subassemblyDesigner: ["Clayton", "Alastair Parvin"],
      id: "23",
      subassemblyLocationClass: "EnvelopeSection",
      subassemblyName: "Module-B2_05",
      subassemblyPitchedAngle1: 60,
      subassemblyPitchedAngle2: 30,
      subassemblyPrimaryMaterial: "Timber.Plywood",
      subassemblyRoofPitchType: "Mono",
      subassemblySpansNStories: "2",
      subassemblyThickness: 0.336,
      subassemblyUnitCost: 925,
      subassemblyXDimension: 3.3,
      subassemblyYDimension: 1.2,
      subassemblyZDimension: 8.5,
      __typename: "subassemblies"
    }] as Array<Subassemblies_>,
  headerData: headerData
} 
  

type Action =
  | { _tag: "onSubassemblyQuery";        payload: {subassemblies: Subassemblies_[] }   }



const AnalyticsPageReducer = (state: AnalyticsPageState, action: Action) => {
  switch (action._tag) {
    case "onSubassemblyQuery":
      
      return {...state, rowData: action.payload.subassemblies};
    default:
      throw new Error();
  }
}

interface AnalyticsPageViewProps {

}

const AnalyticsPage = (props: AnalyticsPageViewProps): JSX.Element => {



  
  const [state, localDispatch] = useReducer(AnalyticsPageReducer, initalState);


  const GetAllSubassemblies_graphql = loader('src/queries/GetAllSubassemblies.graphql');
  const { data, loading, error }= useQuery<GetAllSubassembliesQuery, GetAllSubassembliesQueryVariables>( GetAllSubassemblies_graphql);
  console.log(data); 
  

  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter analytics-page">

  

    <div className="bx--row bx--grid">
    <h1> Costings </h1> 
    </div>

    <div className="bx--row bx--grid">
        {/* <RadarChart data={example_radarChartData} options={example_radarChartOptions}/> */}
        <TreeChart data={example_treeMapData} options={example_treeMapOptions}/>
    </div>

    <div className="bx--row bx--grid">
      <h1> Building Performance Metrics  </h1> 
    </div>

    <div className="bx--row bx--grid">
        <div className = "bx--col">
        <RadarChart data={example_radarChartData} options={example_radarChartOptions}/>
        </div>
        <div className = "bx--col">
        <GaugeChart
          data={gaugeChartState.data}
          options={gaugeChartState.options}
        />
        </div>
        <div className = "bx--col">
        <DonutChart
          data={donutChartState.data}
          options={donutChartState.options}
        />
        </div>
    </div>

    <div className="bx--row bx--grid">

    <ComboChart
			data={comboChartState.data}
			options={comboChartState.options}
		/>
		
    </div>


    <div className="bx--row bx--grid">
      <h1> Integration with Airtable  </h1> 
    </div>

    <div className="bx--row bx--grid">

      <Button
          onClick = {(e)    => { 
            return localDispatch({_tag: "onSubassemblyQuery", payload: {subassemblies: data?.subassemblies as Subassemblies_[]} }) 
          }}
      >
        Get Airtable data 
      </Button>
    </div>
    <div className="bx--row bx--grid">
        {state.rowData.length === 1 ?
          <div style={{ width: '100%' }}> 
          <DataTableSkeleton {...dataTableSkeletonProps}/>
          </div> :
          <DataTable rows={state.rowData} headers={state.headerData}/>}
    </div>

    

    </div>      
  )
}
export default AnalyticsPage; 

