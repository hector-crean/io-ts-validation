import React from 'react'; 

import { TreemapChart } from "@carbon/charts-react";
import { TreemapChartOptions } from '@carbon/charts/interfaces/index'



type TreeMapData = {
    name: string;
    children: ({
        name: string;
        value: number;
        showLabel: boolean;
    } | {
        name: string;
        value: number;
    })[];
}[]

export const example_treeMapData: TreeMapData = [
    {
      "name": "Materials",
      "children": [
        {
          "name": "Structural Panels",
          "value": 800,
          "showLabel": true

        },
        {
          "name": "Concrete Slab",
          "value": 200,
          "showLabel": true

        },
        {
          "name": "Fit-out materials",
          "value": 100,
          "showLabel": true

        },
        {
          "name": "Miscellaneous",
          "value": 900,
          "showLabel": true

        }
      ]
    },
    {
      "name": "Labour",
      "children": [
        {
          "name": "Foundation instillation",
          "value": 2800,
          "showLabel": true
        },
        {
          "name": "CNC cutting",
          "value": 10000,
          "showLabel": true
        },
        {
          "name": "Other Services",
          "value": 500,
          "showLabel": true

        },
        {
          "name": "Other labour",
          "value": 500,
          "showLabel": true

        },
        {
          "name": "Miscellaneous services",
          "value": 200,
          "showLabel": true

        }
      ]
    },
    {
      "name": "Admin",
      "children": [
        {
          "name": "Site Engineering",
          "value": 3500,
          "showLabel": true
        },
        {
          "name": "Planning application",
          "value": 3000,
          "showLabel": true
        },
        {
          "name": "Liscence fees",
          "value": 2000,
          "showLabel": true
        },
        {
          "name": "Other admin",
          "value": 500,
          "showLabel": true

        },
      ]
    }
  ]

export const example_treeMapOptions: TreemapChartOptions = {
  // getFillColor: '',
    	/**
	 * Optionally specify a title for the chart
	 */
	title: 'Aggregated costings of material, labour & admin',
	/**
	 * boolean to disable animations (enabled by default)
	 */
	animations: true,
	/**
	 * boolean to prevent the container from resizing
	 */
	resizable: true,
	/**
	 * Optionally specify a width for the chart
	 */
	// width?: string;
	/**
	 * Optionally specify a height for the chart
	 */
	height: '400px',
	/**
	 * tooltip configuration
	 */
	// tooltip?: TooltipOptions;
	/**
	 * legend configuration
	 */
	// legend?: LegendOptions;
	/**
	 * Optional function to determine whether is filled based on datasetLabel, label, and/or data
	 */
	// getIsFilled?: (
	// 	datasetLabel: any,
	// 	label?: any,
	// 	data?: any,
	// 	defaultFilled?: boolean
	// ) => boolean;
	/**
	 * Optional function to generate the fill color based on datasetLabel, label, and/or data
	 */
	// getFillColor?: (
	// 	datasetLabel: any,
	// 	label?: any,
	// 	data?: any,
	// 	defaultFillColor?: string
	// ) => string;
	/**
	 * Optional function to generate the stroke color based on datasetLabel, label, and/or data
	 */
	// getStrokeColor?: (
	// 	datasetLabel: any,
	// 	label?: any,
	// 	data?: any,
	// 	defaultStrokeColor?: string
	// ) => string;
	/**
	 * stylesheet options
	 */
	// style: {
	// 	/**
	// 	 * optional prefixing string for css classes (defaults to 'cc')
	// 	 */
	// 	prefix: 'bx-'
	// },
	/**
	 * options related to charting data
	 */
	// data?: {
	// 	/**
	// 	 * identifier for data groups
	// 	 */
	// 	groupMapsTo?: string;
	// 	/**
	// 	 * used to simulate data loading in skeleton way
	// 	 */
	// 	loading?: boolean;
	// 	/**
	// 	 * options related to pre-selected data groups
	// 	 * Remains empty if every legend item is active or dataset doesn't have the data groups.
	// 	 */
	// 	selectedGroups?: string[];
	// };
	/**
	 * options related to color scales
	 */
// 	color?: {
// 		/**
// 		 * e.g. { "Dataset 1": "blue" }
// 		 */
// 		scale?: object;
// 		/**
// 		 * use a carbon dataviz preset color palette
// 		 * put the index (selection of which variant)
// 		 */
// 		pairing?: {
// 			/**
// 			 * the number of color variants in the palette (defaults to using the number of data groups in the given data)
// 			 */
// 			numberOfVariants?: number;
// 			/**
// 			 * the option number of the color paring
// 			 */
// 			option?: number;
// 		};
// 		/*
// 		 * options related to gradient
// 		 * e.g. { enabled: true }
// 		 */
// 		gradient?: object;
// 	};
}

export interface GridOptions {
	y?: {
		enabled?: boolean;
		numberOfTicks?: number;
	};
	x?: {
		enabled?: boolean;
		numberOfTicks?: number;
	};
}
interface TreeMapChartProps {
    data: TreeMapData; 
    options: TreemapChartOptions; 
}

const _TreeMapChart = ({data, options}: { data: TreeMapData, options: TreemapChartOptions }): JSX.Element => {

    return (
        <>
		<TreemapChart
			data={data}
			options={options}
        />	
        </>
    )

}

export default _TreeMapChart; 
