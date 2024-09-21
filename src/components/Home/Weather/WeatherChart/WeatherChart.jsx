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

const WeatherChart = ({
  hourNow,
  activeTile,
  chosenDayForecast,
  tilesData,
  day,
  setActiveTile,
}) => {
  let data = [];

  const activeTileData = tilesData.filter((item) => item.title === activeTile);

  chosenDayForecast.map((item) =>
    data.push({
      name: `${item.time.slice(11, 13)}`,
      [`${activeTileData[0]?.title}`]: item[activeTileData[0]?.dataName],
      unit: `${activeTileData[0]?.unit}`,
    })
  );

  const convertedWindGust = data.map((item) => {
    return {
      ...item,
      "Porywy wiatru": Math.round((item["Porywy wiatru"] / 3.6) * 10) / 10,
    };
  });

  const convertedWind = data.map((item) => {
    return {
      ...item,
      Wiatr: Math.round((item["Wiatr"] / 3.6) * 10) / 10,
    };
  });

  if (activeTile === "Porywy wiatru") {
    data = convertedWindGust;
  } else if (activeTile === "Wiatr") {
    data = convertedWind;
  }

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
              tickFormatter={(number) =>
                activeTile === "Porywy wiatru" || activeTile === "Wiatr"
                  ? number.toFixed(1)
                  : number.toFixed(0)
              }
            />
            <CartesianGrid opacity={0.1} vertical={false} />
            <Tooltip content={<CustomTooltip />} />
            {day === 0 && <ReferenceLine x={hourNow} stroke="#76dbd1" />}
            <Legend
              align="right"
              verticalAlign="top"
              iconType="plainline"
              height={36}
            />
            <Area
              type="monotone"
              dataKey={activeTile}
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
          {payload[0]?.value} {payload[0]?.payload.unit}
        </div>
      );
    }
    return null;
  }
};

export default WeatherChart;
