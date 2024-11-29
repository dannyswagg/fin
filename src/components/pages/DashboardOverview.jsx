import React from "react";
import Home from "../Home";

const DashboardOverview = () => {
  return (
    <>
      <div className="dashboard-section">
        <Home />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-x-5 my-5">
        <div className="card bg-black text-primary-content mb-2">
          <div className="flex p-5 justify-between items-center">
            <div className="space-y-5">
              <h2 className="card-title">Resources</h2>
              <p className="text-xs">
                For users looking to improve their financial knowledge, the app
                offers various resources and learning materials.
              </p>
              <button className="bg-secondary card-actions justify-end text-white rounded-md text-xs px-2 py-2">
                Get Access
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-secondary text-primary-content mb-2">
          <div className="flex p-5 justify-between items-center">
            <div className="space-y-5">
              <h2 className="card-title text-black">Report Generator</h2>
              <p className="text-xs text-black">
                Generate detailed reports to understand your financial
                situation, prepare for tax season, and review historical
                performance.
              </p>
              <button className="bg-black card-actions justify-end text-white rounded-md text-xs px-2 py-2">
                Get Access
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-black text-primary-content mb-2">
          <div className="flex p-5 justify-between items-center">
            <div className="space-y-5">
              <h2 className="card-title">Performance </h2>
              <p className="text-xs">
                Leverage powerful analytics to understand trends, performance,
                and potential opportunities in your financial life.
              </p>
              <button className="bg-secondary card-actions justify-end text-white rounded-md text-xs px-2 py-2">
                Get Access
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="stats shadow w-full">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Users</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Items Sold</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Completed Transactions</div>
          <div className="stat-desc text-secondary">3% pending</div>
        </div>
      </div>
    </>
  );
};

export default DashboardOverview;
