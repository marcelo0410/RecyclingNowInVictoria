
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


export default function Linechartvis(props) {

  const option=[
    {
      id:1,
      line1:"totalCollected",
      line2:"totalProcessed"
    },
    {
      id:2,
      line1:"garbageCollected",
      line2:"totalCollected"
    },
    {
      id:3,
      line1:"recycleCollected",
      line2:"recycleProcessed"
    },
    {
      id:4,
      line1:"organicCollected",
      line2:"organicProcessed"
    }
  ]

  const checkOption1 = () =>{
    if(props.category){
      return option[props.category-1]['line1']
    } else{
      return option[0]['line1']
    }
  }

  const checkOption2 = () =>{
    if(props.category){
      return option[props.category-1]['line2']
    } else{
      return option[0]['line2']
    }
  }

  return (
    <LineChart
      width={450}
      height={300}
      data={props.councilData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey={checkOption1()}
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey={checkOption2()} stroke="#82ca9d" />
    </LineChart>
  );
}