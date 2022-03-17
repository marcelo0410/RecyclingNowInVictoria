
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Bass Coast Shire",
    TotalCollected: 20866,
    TotalProcessed: 15820
  },
  {
    name: "Wodonga City",
    TotalCollected: 16327,
    TotalProcessed: 11374
  },
  {
    name: "Strathbogie Shire",
    TotalCollected: 3639,
    TotalProcessed: 2498
  },
  {
    name: "Indigo Shire",
    TotalCollected: 6357,
    TotalProcessed: 4130
  },
  {
    name: "Corangamite Shire",
    TotalCollected: 5222,
    TotalProcessed: 3275
  },
  {
    name: "Macedon Ranges Shire",
    TotalCollected: 18134,
    TotalProcessed: 10963
  },
  {
    name: "Warrnambool City",
    TotalCollected: 14607,
    TotalProcessed: 8823
  }
];

export default function StackedPlotVis() {
  return (
    <BarChart
      width={690}
      height={350}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" angle={-12} tick={{fontSize: 12}} interval={0}/>
      <YAxis label={{ value: 'Weight (kt)', angle: -90, position: 'insideLeft', offset:-8}} />
      <Tooltip />
      <Legend />
      <Bar dataKey="TotalCollected" stackId="a" fill="#8884d8" />
      <Bar dataKey="TotalProcessed" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
}
