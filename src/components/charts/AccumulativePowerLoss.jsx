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

const AccumulativePowerLoss = () => {
  const data = {
    labels: table2.map((info) => info.anomalyName),
    datasets: [
      {
        label: "Accumulative Power Loss (KW)",
        data: table2.map((info) => parseFloat(info.powerLoss)),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows chart to fill container height
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Accumulative Power Loss (per fault type)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Power Loss (KW)",
        },
      },
    },
  };

  return (
    <div style={{ height: "400px", maxWidth: "100%", padding: "0 10px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default AccumulativePowerLoss;
