import React from 'react'
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

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