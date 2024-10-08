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

import { useContext } from "react";
import { LanguageContext } from "../../../../context/LanguageContext";

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

  const { language } = useContext(LanguageContext);

  const activeTileData = tilesData.filter(
    (item) => item.title[language] === activeTile
  );

  // console.log(activeTile);

  chosenDayForecast.map((item) =>
    data.push({
      name: `${item.time.slice(11, 13)}`,
      [activeTileData[0]?.title[language]]: item[activeTileData[0]?.dataName],
      unit: `${activeTileData[0]?.unit}`,
    })
  );

  const convertedWind = data.map((item) => {
    return {
      ...item,
      [activeTile]: Math.round((item[activeTile] / 3.6) * 10) / 10,
    };
  });

  const convertedWindGust = data.map((item) => {
    return {
      ...item,
      [activeTile]: Math.round((item[activeTile] / 3.6) * 10) / 10,
    };
  });

  if (activeTile === "Porywy wiatru" || activeTile === "Wind gusts") {
    data = convertedWindGust;
  } else if (activeTile === "Wiatr" || activeTile === "Wind") {
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
              interval={0}
              type="number"
              domain={
                activeTile === "Zachmurzenie"
                  ? [0, 100]
                  : activeTile === "Wiatr" || activeTile === "Porywy wiatru"
                  ? [0, "dataMax + 1"]
                  : ["dataMin - 2", "dataMax + 2"]
              }
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
