import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardOverview from "./components/pages/DashboardOverview";
import UserAcquisition from "./components/UserAcquisition";
import MerchantAcquisition from "./components/MerchantAcquisition";
import TransactionVolume from "./components/TransactionVolume";
import Boarding from "./components/Boarding";
import Layout from "./components/pages/Layout";
import Users from "./components/Registration/Users";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="user-acquisition" element={<UserAcquisition />} />
          <Route
            path="merchant-acquisition"
            element={<MerchantAcquisition />}
          />
          <Route path="users" element={<Users />} />
          <Route path="transaction-volume" element={<TransactionVolume />} />
          <Route path="boarding" element={<Boarding />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
