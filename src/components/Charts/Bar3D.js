import React from 'react'

//Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

ReactFC.fcRoot(FusionCharts, Chart);

const Bar3D = ({data, caption, x, y, type}) => {
    const chartConfigs = {
        type, // The chart type
        width: '100%',
        height: '350',
        renderAt: 'charts-container',
        dataFormat: "json", // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            
            caption,
            xAxisName: x,
            yAxisName: y,
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

export default Bar3D