import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";


const d1 = [
  { name: "Macedon Ranges Shire Council", id:1, value: 60.5 },
  { name: "Rest", id:1, value: 39.5 }
]

const d2 = [
  { name: "Bayside City Council", id:2, value: 55.2 },
  { name: "Rest", id:1, value: 44.8 }
]

const d3 = [
  { name: "Corangamite Shire Council", id:3, value: 62.7 },
  { name: "Rest", value: 37.3 }
]

const d4 = [
  { name: "Golden Plains Shire Council", id:4, value: 22.5 },
  { name: "Rest", value: 77.5 }
]

const d5 = [
  { name: "Benalla Rural City Council", id:5, value: 58.7 },
  { name: "Rest", value: 41.3 }
]



const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";




  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.value+"%"}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 10}
        outerRadius={outerRadius + 20}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{"Diversion Rate"}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {/* {`(Rate ${(percent * 100).toFixed(2)}%)`} */}
      </text>
    </g>
  );
};

export default function PieChartVis(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const generateCouncilDataById = () =>{
    switch(props.councilId){
      case "5":
        return d1
        break
      case "7":
        return d2
        break
      case "16":
        return d3
        break
      case "20":
        return d4
        break
      case "79":
        return d5
        break
    }
  }

  return (
    <PieChart width={400} height={400}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={generateCouncilDataById()}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
}
