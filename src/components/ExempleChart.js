import React from 'react'

//Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ExempleChart = ({data}) => {
  const chartConfigs = {
    type: "column2d", // The chart type
    
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Prgramming langueges ... the most used",
        //Set the chart subcaption
        subCaption: "default subcaption",
        //Set the x-axis name
        xAxisName: "Language",
        //Set the y-axis name
        yAxisName: "Using rate",
        numberSuffix: "M",
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

export default ExempleChart


// Preparing the chart data


  // STEP 3 - Creating the JSON object to store the chart configurations
