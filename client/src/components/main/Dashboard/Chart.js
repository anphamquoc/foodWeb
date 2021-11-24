import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

const Chart = ({ user }) => {
  let data = [];
  // const today = new Date();
  for (let i = 0; i < 12; i += 1) {
    data.push({
      month: i + 1,
      user: user.filter((u) => {
        const dateUser = new Date(Date.parse(u.ngdk)).getMonth();
        return dateUser === i;
      }).length,
    });
  }
  return (
    <div className="chart">
      <h3>Thông tin người dùng trong 12 tháng</h3>
      <AreaChart
        width={690}
        height={387}
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="5 5" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="user"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
          strokeWidth={2}
        />
        {/* <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        /> */}
      </AreaChart>
    </div>
  );
};

export default Chart;
