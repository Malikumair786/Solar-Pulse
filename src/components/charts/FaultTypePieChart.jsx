import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { table2 } from "Resources/table2";

ChartJS.register(Tooltip, Legend, ArcElement);

const FaultTypePieChart = () => {
  const data = {
    labels: table2.map((info) => info.anomalyName),
    datasets: [
      {
        data: table2.map((info) => info.moduleCount),
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let label = data.labels[tooltipItem.dataIndex] || "";
            if (label) {
              label += ": ";
            }
            label += tooltipItem.raw;
            return label;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", padding: "0 10px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default FaultTypePieChart;
