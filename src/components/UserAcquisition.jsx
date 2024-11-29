import React, { useState, useEffect } from "react";
import LineChart from "./charts/LineChart";
// import axios from "axios";

const UserAcquisition = () => {
  const [userData, setUserData] = useState({ labels: [], values: [] });

  useEffect(() => {
    // Fetch data (you can replace with your API endpoint)
    fetch("/api/user-acquisition")
      .then((response) => {
        const data = response.data;
        setUserData({
          labels: data.map((item) => item.date),
          values: data.map((item) => item.count),
        });
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <div className="user-acquisition">
      <h2>User Acquisition</h2>
      <LineChart data={userData} />
    </div>
  );
};

export default UserAcquisition;
