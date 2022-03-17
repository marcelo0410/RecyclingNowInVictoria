
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
    GeneralWasteVolume: 4745,
  },
  {
    name: "Wodonga City",
    GeneralWasteVolume: 4669,
  },
  {
    name: "Strathbogie Shire",
    GeneralWasteVolume: 1077
  },
  {
    name: "Indigo Shire",
    GeneralWasteVolume: 2055
  },
  {
    name: "Corangamite Shire",
    GeneralWasteVolume: 1814
  },
  {
    name: "Macedon Ranges Shire",
    GeneralWasteVolume: 6600
  },
  {
    name: "Warrnambool City",
    GeneralWasteVolume: 5200
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
      <Bar dataKey="GeneralWasteVolume" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
  );
}
