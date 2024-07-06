"use client";
import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

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
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
        borderRadius: 8,
        borderRadiusApplication: "end",
        distributed: true,
      },
    },
    colors: ["#4dc7e3", "#73d196", "#00d6c9", "#fca08c"],
    xaxis: {
      labels: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  };
  
  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={200}
      />
    </div>
  );
};

export default HorizontalBarChart;
