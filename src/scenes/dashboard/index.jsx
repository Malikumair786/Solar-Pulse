import React, { useState } from "react";

import DashboardTab from "./Dashboard";
import SiteInfo from "./SiteInfo";
import Anomalies from "./Anomalies";
import Report from "./Report";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <>
      <div className="bg-secondary">
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="default-tab"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className={`inline-block text-white p-4 border-b-2 rounded-t-lg ${
                  selectedTab === "Dashboard" ? "border-tertiary" : ""
                }`}
                id="Dashboard-tab"
                onClick={() => handleTabClick("Dashboard")}
                type="button"
                role="tab"
                aria-controls="Dashboard"
                aria-selected={selectedTab === "Dashboard"}
              >
                Dashboard
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4  text-white border-b-2 rounded-t-lg ${
                  selectedTab === "dashboard" ? "border-tertiary" : ""
                }`}
                id="dashboard-tab"
                onClick={() => handleTabClick("dashboard")}
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected={selectedTab === "dashboard"}
              >
                Site Info
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block  text-white p-4 border-b-2 rounded-t-lg ${
                  selectedTab === "settings" ? "border-tertiary" : ""
                }`}
                id="settings-tab"
                onClick={() => handleTabClick("settings")}
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected={selectedTab === "settings"}
              >
                Anomalies
              </button>
            </li>
            <li role="presentation">
              <button
                className={`inline-block  text-white p-4 border-b-2 rounded-t-lg ${
                  selectedTab === "contacts" ? "border-tertiary" : ""
                }`}
                id="contacts-tab"
                onClick={() => handleTabClick("contacts")}
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected={selectedTab === "contacts"}
              >
                Report
              </button>
            </li>
          </ul>
        </div>
        <div id="default-tab-content">
          <div
            className={`rounded-lg bg-secondary ${
              selectedTab === "Dashboard" ? "" : "hidden"
            }`}
            id="Dashboard"
            role="tabpanel"
            aria-labelledby="Dashboard-tab"
          >
            <div className="text-sm text-secondary">
              <DashboardTab />
            </div>
          </div>
          <div
            className={`rounded-lg bg-secondary ${
              selectedTab === "dashboard" ? "" : "hidden"
            }`}
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <div className="text-sm text-gray-500">
              <SiteInfo />
            </div>
          </div>
          <div
            className={`rounded-lg bg-secondary max-[100%] ${
              selectedTab === "settings" ? "" : "hidden"
            }`}
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <div className="text-sm text-gray-500 bg-secondary">
              <Anomalies />
            </div>
          </div>
          <div
            className={`rounded-lg bg-secondary ${
              selectedTab === "contacts" ? "" : "hidden"
            }`}
            id="contacts"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <div className="text-sm text-gray-500 bg-secondary">
              <Report />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
