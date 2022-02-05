import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Currency", "Sales", "Expenses"],
  ["$100", 1000, 400],
  ["$200", 1170, 460],
  ["$300", 660, 1120],
  ["$400", 1030, 540],
];

export const options = {
  curveType: "function",
  legend: { position: "bottom" },
};

export default function LineGraph() {
  return (
    <Chart
      chartType="LineChart"
      height="30vh"
      data={data}
      options={options}
    />
  );
}