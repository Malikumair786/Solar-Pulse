import React from "react";
import { Bar } from "react-chartjs-2";
import { table2 } from "Resources/table2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FaultTypeDistributionChart = () => {
  const data = {
    labels: table2.map((info) => info.anomalyName),
    datasets: [
      {
        label: "Module Count",
        data: table2.map((info) => parseInt(info.moduleCount)),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Fault Type Distribution",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ height: "400px", maxWidth: "100%", padding: "0 10px" }}>
      {" "}
      <Bar data={data} options={options} />
    </div>
  );
};

export default FaultTypeDistributionChart;
