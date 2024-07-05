"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";

const HorizontalBarChart = () => {
  const series = [
    {
      name: "Actual",
      data: [
        { x: "2013", y: 54 },
        { x: "2014", y: 66 },
        { x: "2015", y: 100 },
        { x: "2016", y: 67 },
      ],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false, // Disable the download toolbar
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%", // Decrease the bar height
        borderRadius: 8, // Border radius for the right side
        borderRadiusApplication: "end", // Apply radius to the right side only
        distributed: true, // Ensure colors are applied to each bar individually
      },
    },
    colors: ["#4dc7e3", "#73d196", "#00d6c9", "#fca08c"], // Apply the specified colors
    xaxis: {
      labels: {
        show: true, // Show the x-axis labels
      },
    },
    yaxis: {
      labels: {
        show: false, // Hide the y-axis labels
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    legend: {
      show: false, // Hide the legend
    },
    grid: {
      show: false, // Remove background grid lines
    },
    tooltip: {
      enabled: false, // Disable tooltips
    },
  };
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={200}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default HorizontalBarChart;
