import React from 'react'; 

import { RadarChart } from "@carbon/charts-react";
//Types: https://carbon-design-system.github.io/carbon-charts/documentation/modules/_interfaces_charts_.html
import { RadarChartOptions } from '@carbon/charts/interfaces/index'
import { options as ImplOptions} from '@carbon/charts/configuration'; 



export type RadarChartData = {
    product: string;
    feature: string;
    score: number;
}[];

export const example_radarChartData: RadarChartData = [
	{
		"product": "Building System: Swift",
		"feature": "Wind Exposure",
		"score": 60
	},
	{
		"product": "Building System: Swift",
		"feature": "Shading Efficiency",
		"score": 92
	},
	{
		"product": "Building System: Swift",
		"feature": "Cross Ventilation",
		"score": 5
	},
	{
		"product": "Building System: Swift",
		"feature": "Ground Coupling",
		"score": 85
	},
	{
		"product": "Building System: Swift",
		"feature": "View Quality",
		"score": 60
	},
	{
		"product": "Building System: Skylark",
		"feature": "Wind Exposure",
		"score": 70
	},
	{
		"product": "Building System: Skylark",
		"feature": "Shading Efficiency",
		"score": 63
	},
	{
		"product": "Building System: Skylark",
		"feature": "Cross Ventilation",
		"score": 78
	},
	{
		"product": "Building System: Skylark",
		"feature": "Ground Coupling",
		"score": 50
	},
	{
		"product": "Building System: Skylark",
		"feature": "View Quality",
		"score": 30
	}
];

// import { RadarChart } from 'carbon-components-react'; 

/* ------ Carbon Data visualation Config  -------- */
export const example_radarChartOptions: RadarChartOptions = {

	"title": "Performance within Enviroment",
	"radar": {
		"axes": {
			"angle": "feature",
			"value": "score"
		}
	},
	"data": {
		"groupMapsTo": "product"
	},
	"height": "400px",
    "resizable": true,

};


interface RadarChartProps {
    data: RadarChartData; 
    options: RadarChartOptions; 
}

const _RadarChart = ({data, options}: { data: RadarChartData, options: RadarChartOptions }): JSX.Element => {

    return (
        <>
		<RadarChart
			data={data}
			options={options}
        />	
        </>
    )

}
export default _RadarChart; 



