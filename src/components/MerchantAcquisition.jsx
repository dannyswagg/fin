import React, { useState, useEffect } from "react";
import BarChart from "./charts/BarChart";

// This is the JSON object we'll use for demo purposes
const demoData = [
  { date: "2024-01-01", engagement: 345 },
  { date: "2024-01-02", engagement: 789 },
  { date: "2024-01-03", engagement: 234 },
  { date: "2024-01-04", engagement: 567 },
  { date: "2024-01-05", engagement: 678 },
  { date: "2024-01-06", engagement: 456 },
  { date: "2024-01-07", engagement: 890 },
  { date: "2024-01-08", engagement: 123 },
  { date: "2024-01-09", engagement: 112 },
  { date: "2024-01-10", engagement: 789 },
];

const MerchantAcquisition = () => {
  const [merchantData, setMerchantData] = useState({ labels: [], values: [] });

  useEffect(() => {
    // Simulating an API call by using the demoData
    setMerchantData({
      labels: demoData.map((item) => item.date),
      values: demoData.map((item) => item.engagement),
    });
  }, []);

  return (
    <div className="merchant-acquisition">
      <h2>Merchant Acquisition</h2>
      {merchantData.labels.length === 0 || merchantData.values.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        <BarChart data={merchantData} />
      )}
    </div>
  );
};

export default MerchantAcquisition;
