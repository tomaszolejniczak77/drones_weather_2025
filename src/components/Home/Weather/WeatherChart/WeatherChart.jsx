import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

import styles from "./WeatherChart.module.css";

const WeatherChart = ({ data, hourNow }) => {
  return (
    <>
      <div className={styles.chart}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="temperatura" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis
              tickCount={6}
              type="number"
              domain={["auto", "auto"]}
              tickFormatter={(number) => number.toFixed(0)}
            />
            <CartesianGrid opacity={0.1} vertical={false} />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine x={hourNow} stroke="darkgreen" />
            <Legend
              align="right"
              verticalAlign="top"
              iconType="plainline"
              height={36}
            />
            <Area
              type="monotone"
              dataKey="ciśnienie"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#temperatura)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );

  function CustomTooltip({ active, payload, label }) {
    if (active) {
      return (
        <div className={styles.tooltip}>
          {payload[0].value} {payload[0].payload.unit}
        </div>
      );
    }
    return null;
  }
};

export default WeatherChart;
