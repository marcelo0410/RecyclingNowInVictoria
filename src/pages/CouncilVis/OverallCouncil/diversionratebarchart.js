
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
    DiversionRate: 75.8,
  },
  {
    name: "Wodonga City",
    DiversionRate: 69.7,
  },
  {
    name: "Strathbogie Shire",
    DiversionRate: 68.6
  },
  {
    name: "Indigo Shire",
    DiversionRate: 65
  },
  {
    name: "Corangamite Shire",
    DiversionRate: 62.7
  },
  {
    name: "Macedon Ranges Shire",
    DiversionRate: 60.5
  },
  {
    name: "Warrnambool City",
    DiversionRate: 60.4
  }
];

export default function DiversionRateBarChart() {
  return (
    <BarChart
      width={700}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} angle={-20} tick={{fontSize: 12}} interval={0}/>
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="DiversionRate" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
  );
}
