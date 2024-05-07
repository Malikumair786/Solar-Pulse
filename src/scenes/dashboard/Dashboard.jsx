import React from "react";
import Card from "components/Card";
import FaultTypeDistributionChart from "components/charts/FaultTypeDistributionChart";
import AccumulativePowerLoss from "components/charts/AccumulativePowerLoss";
import FinancialLossDistributionChart from "components/charts/AccumulativeFinancialLoss";
import FaultTypePieChart from "components/charts/FaultTypePieChart";

export const AdminLosses = {
  Revenue_Loss: "PKR 107552",
  Potential_Issues: "50",
  Power_Loss: "2.216 (KW)",
};

const DashboardTab = () => {
  return (
    <>
      <div className="flex flex-wrap justify-around p-4">
        {Object.entries(AdminLosses).map(([key, value]) => (
          <Card key={key} label={key.replace(/_/g, " ")} value={value} />
        ))}
      </div>
      <FaultTypeDistributionChart />
      <AccumulativePowerLoss />
      <FinancialLossDistributionChart />
      <FaultTypePieChart />
    </>
  );
};

export default DashboardTab;
