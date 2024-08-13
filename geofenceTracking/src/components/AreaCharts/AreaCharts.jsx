import React from 'react'
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
const AreaCharts = () => {
    const options = {
        chart: {
          height: "100%",
          width: "100%", // Ensure the chart takes the full width of its container
          type: "area",
          fontFamily: "Inter, sans-serif",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 6,
        },
        grid: {
          show: false,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 2,
            top: 0,
          },
        },
        series: [
          {
            name: "New Employees",
            data: [6500, 6418, 6456, 6526, 6356, 6456],
            color: "#84BACE",
          },
        ],
        xaxis: {
          categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
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
        yaxis: {
          show: false,
        },
      };
    
      return (
        <div id="area-chart" style={{ width: '100%', height: '100%' }}>
          <Chart options={options} series={options.series} type="area" height="100%" width="100%" />
        </div>
      );
    };
    
export default AreaCharts