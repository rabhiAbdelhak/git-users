import React from 'react'
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";


ReactFC.fcRoot(FusionCharts, Chart);

const Pie3D = ({data}) => {
    const chartConfigs = {
        type: "pie3d", // The chart type
        width: '100%',
        height: '350',
        renderAt: 'charts-container',
        dataFormat: "json", // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            //Set the chart caption
            caption: "Most Popular used Languages",
            decimals: "0",
            pieRadius: '50%',
            //Set the theme for your chart
            theme: "fusion"
          },
          // Chart Data
          data: data
        }
      };
  return (
    <ReactFC {...chartConfigs}/>
  )
}

export default Pie3D;