import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components of Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TransactionVolume = () => {
  const [timePeriod, setTimePeriod] = useState("7d"); // Default to 7 days
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Transaction Volume",
        data: [],
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  });

  // Dummy data generator (for simulation)
  const fetchTransactionData = (timePeriod) => {
    const currentDate = new Date();
    const labels = [];
    const data = [];
    let dateOffset;

    switch (timePeriod) {
      case "7d":
        dateOffset = 7;
        break;
      case "30d":
        dateOffset = 30;
        break;
      case "90d":
        dateOffset = 90;
        break;
      default:
        dateOffset = 7;
    }

    // Generate labels (dates) and dummy data points (random)
    for (let i = dateOffset - 1; i >= 0; i--) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - i);
      labels.push(date.toLocaleDateString());
      data.push(Math.floor(Math.random() * 1000)); // Random transaction volume
    }

    setChartData({
      labels,
      datasets: [
        {
          label: "Transaction Volume",
          data,
          borderColor: "rgba(75,192,192,1)",
          fill: false,
        },
      ],
    });
  };

  // Fetch data when the time period changes
  useEffect(() => {
    fetchTransactionData(timePeriod);
  }, [timePeriod]);

  return (
    <div>
      <h2 className="text-sm">Transaction Period</h2>

      {/* Time Period Filters */}

      <select
        onChange={(e) => setTimePeriod(e.target.value)}
        className="select select-bordered w-full max-w-xs"
      >
        <option disabled selected>
          Filter Data
        </option>
        <option value="7d">1 Week</option>
        <option value="30d">1 Month</option>
        <option value="90d">3 Months</option>
      </select>

      {/* Line chart component */}
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Transaction Volume",
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return `Volume: ${tooltipItem.raw}`;
                },
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Date",
              },
            },
            y: {
              title: {
                display: true,
                text: "Transaction Volume",
              },
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default TransactionVolume;
