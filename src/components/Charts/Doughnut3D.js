import React from 'react'
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";

ReactFC.fcRoot(FusionCharts, Chart);

const Doughnut3D = ({data}) => {
    const chartConfigs = {
        type: "doughnut2d", // The chart type
        width: '100%',
        height: '350',
        renderAt: 'charts-container',
        dataFormat: "json", // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            //Set the chart caption
            caption: "Stars Per Language",
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

export default Doughnut3D;