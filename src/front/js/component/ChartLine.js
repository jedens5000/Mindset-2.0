import React, { useContext, useEffect, PureComponent } from "react";

import { Context } from "../store/appContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const ChartLine = () => {
  const { store, actions } = useContext(Context);
  // useEffect(() => {
  //   actions.getIssues();
  // }, []);
  console.log(store.issues);
  console.log(store.issues.issue1);
  console.log(store.issues.issue2);
  console.log(store.issues.issue3);

  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`;

  const data = [
    {
      name: "6/09",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "6/10",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "6/11",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "6/12",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "6/13",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "6/14",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: { date },
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  // export default class Example extends PureComponent {
  //   static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  return (
    <LineChart
      width={800}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      className="LineChart"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};