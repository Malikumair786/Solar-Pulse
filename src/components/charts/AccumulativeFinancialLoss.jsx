import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { table2 } from "Resources/table2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FinancialLossDistributionChart = () => {
  const data = {
    labels: table2.map((info) => info.anomalyName),
    datasets: [
      {
        label: "Accumulative Financial Loss ($)",
        data: table2.map((info) => parseFloat(info.AnnualLoss)),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
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
        text: "Accumulative Financial Loss (per fault type)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          // Improve formatting of financial data
          callback: function (value) {
            return "$" + value.toLocaleString();
          },
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

export default FinancialLossDistributionChart;
