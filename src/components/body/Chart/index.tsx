//https://carbon-design-system.github.io/carbon-charts/documentation/modules/_interfaces_charts_.html



////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// This file is used to just show the different options for making react charts: 
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


 
import React from "react";
import { Chart as BaseChartType } from "@carbon/charts/chart";
import { ChartTabularData, BaseChartOptions } from "@carbon/charts/interfaces";


// Chart Option types
import { 
    // BaseChartOptions,
	AxisChartOptions,
	ScatterChartOptions,
	LollipopChartOptions,
	LineChartOptions,
	BarChartOptions,
	StackedBarChartOptions,
	AreaChartOptions,
	PieChartOptions,
	GaugeChartOptions,
	DonutChartOptions,
	BubbleChartOptions,
	RadarChartOptions,
	ComboChartOptions,
	TreemapChartOptions,
	// Components
	GridOptions,
	RulerOptions,
	AxesOptions,
	TimeScaleOptions,
	TooltipOptions,
	LegendOptions,
	StackedBarOptions,
	MeterChartOptions,
	ToolbarOptions,
	ToolbarControl,
	ZoomBarsOptions,
	// ENUMS
	Alignments,
	GaugeTypes,
	LegendPositions,
	TruncationTypes,
	ToolbarControlTypes,
	ZoomBarTypes,

    ChartConfig,

 } from '@carbon/charts/interfaces'; 
 

// Chart option implementations
import { options as ImplOptions} from '@carbon/charts/configuration'; 

import { 
    TreemapChart as TC,
    RadarChart as RC
} from "@carbon/charts/charts";

export const { 
    chart,
	axisChart,
	simpleBarChart,
	groupedBarChart,
	stackedBarChart,
	bubbleChart,
	lineChart,
	areaChart,
	stackedAreaChart,
	scatterChart,
	lollipopChart,
	pieChart,
	donutChart,
	meterChart,
	radarChart,
	gaugeChart,
	comboChart,
	treemapChart } = ImplOptions; 

// import { AreaChart, StackedAreaChart, GroupedBarChart, SimpleBarChart, StackedBarChart, BubbleChart, DonutChart, GaugeChart, LineChart, LollipopChart, PieChart, ScatterChart, MeterChart, RadarChart, ComboChart, TreemapChart } from '@carbon/charts-react';



////////////////////////////////////////////////
/// react-chart wraps the vanilla chart components; 
////////////////////////////////////////////////

declare type Props<Options> = {
    options?: Options;
    data?: ChartTabularData;
};

interface BaseChart<Options = BaseChartOptions> extends React.Component<Props<Options>> {
    data: ChartTabularData | [];
    options: Options | {};
    props: Props<Options>;
    chart: BaseChartType;
    new (props: Props<Options>): BaseChart;
    shouldComponentUpdate(nextProps: Props<Options>): boolean;
    componentDidUpdate(): void;
}


type TreemapChartProps = ChartConfig<TreemapChartOptions>;
interface react_TreemapChart extends BaseChart<TreemapChartOptions> {
    chartRef: HTMLDivElement;
    props: TreemapChartProps;
    chart: TC;
    componentDidMount(): void;
    render(): JSX.Element;

    // data: ChartTabularData | [];
    // options: TreemapChartOptions | {};
    // new (props: BaseChart<TreemapChartOptions>): BaseChart;
    // shouldComponentUpdate(nextProps: BaseChart<TreemapChartOptions>): boolean;
    // componentDidUpdate(): void;
}

declare type RadarChartProps = ChartConfig<RadarChartOptions>;
interface react_RadarChart extends BaseChart<RadarChartOptions> {
    chartRef: HTMLDivElement;
    props: TreemapChartProps;
    chart: RC;
    componentDidMount(): void;
    render(): JSX.Element;

    // data: ChartTabularData | [];
    // options: TreemapChartOptions | {};
    // new (props: BaseChart<RadarChartOptions>): BaseChart;
    // shouldComponentUpdate(nextProps: BaseChart<RadarChartOptions>): boolean;
    // componentDidUpdate(): void;
}

/// Then finally: 





