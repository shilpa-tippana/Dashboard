import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Element",
    "Density",
    { role: "style" },
   
  ],
  ["Copper", 40, "#b87333"],
  ["Silver", 60, "silver"],
  ["Gold", 20, "gold"],
  ["Platinum", 35, "color: #e5e4e2"],
];

export const options = {
  bar: { groupWidth: "15%" },
 
};

export default function Traffic() {
  return (
    <Chart
      chartType="BarChart"
      height={"30vh"}
      data={data}
      options={options}
    />
  );
}
