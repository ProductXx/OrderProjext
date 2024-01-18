import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  elements: {
    line: {
      tension: 0.3,
    },
  },
  plugins: {
    datasets: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
};

const LineChart = ({ data }) => {
  const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  
  const d = {
    labels,
    datasets: [
      {
        data,
        borderColor: "#6576ff",
        backgroundColor: "#6576ff40",
        fill: false,
      },
    ],
  };
  return <Line options={options} data={d} />;
};

export default LineChart;
