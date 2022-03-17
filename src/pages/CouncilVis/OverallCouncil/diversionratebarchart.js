
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
    diversionrate: 75.8,
  },
  {
    name: "Wodonga City",
    diversionrate: 69.7,
  },
  {
    name: "Strathbogie Shire",
    diversionrate: 68.6
  },
  {
    name: "Indigo Shire",
    diversionrate: 65
  },
  {
    name: "Corangamite Shire",
    diversionrate: 62.7
  },
  {
    name: "Macedon Ranges Shire",
    diversionrate: 60.5
  },
  {
    name: "Warrnambool City",
    diversionrate: 60.4
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
      <Bar dataKey="diversionrate" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
  );
}
