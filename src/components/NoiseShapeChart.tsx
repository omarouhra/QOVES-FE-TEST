"use client";

import { Chart, registerables } from "chart.js";
import { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { ChartOptions } from "chart.js";

Chart.register(...registerables);

const generateBellCurveData = (mean = 0.5, stdDev = 0.15, points = 200) => {
  const data = [];
  const min = mean - stdDev * 3;
  const max = mean + stdDev * 3;
  const step = (max - min) / points;

  for (let i = 0; i <= points; i++) {
    const x = min + step * i;
    const y =
      (1 / (stdDev * Math.sqrt(2 * Math.PI))) *
      Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));
    data.push({ x, y });
  }
  return data;
};

export default function NoiseShapeChart() {
  const chartRef = useRef<null>(null);
  const [yourValue] = useState(0.49);

  const bellCurveData = generateBellCurveData();

  // Split data into below and above average
  const belowAverageData = bellCurveData.filter((point) => point.x <= 0.5);

  const data = {
    datasets: [
      // Main curve line
      {
        data: bellCurveData.map((point) => ({ x: point.x, y: point.y })),
        borderColor: "#666",
        borderWidth: 2,
        pointRadius: 0,
        fill: false,
        tension: 0.4,
        zIndex: 1,
      },
      // Below average filled area
      {
        data: belowAverageData.map((point) => ({ x: point.x, y: point.y })),
        backgroundColor: "#E3EBED",
        borderWidth: 0,
        pointRadius: 0,
        fill: true,
        zIndex: 2,
      },
      // Marker points
      {
        data: [
          { x: 0.05, y: 0 },
          {
            x: yourValue,
            y:
              bellCurveData.find((p) => Math.abs(p.x - yourValue) < 0.01)?.y ||
              0,
          },
          { x: 0.95, y: 0 },
        ],
        pointBackgroundColor: "#9AAEB5",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        showLine: false,
        zIndex: 9999,
      },
    ],
  };
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "nearest",
      intersect: false,
    },
    scales: {
      x: {
        type: "linear" as const,
        min: 0,
        max: 1,
        grid: {
          color: "#f0f0f0",
          drawTicks: false,
        },
        border: { display: false },
        ticks: { display: false },
      },
      y: {
        grid: {
          color: "#f0f0f0",
          drawTicks: false,
        },
        border: { display: false },
        ticks: { display: false },
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
        external: (context: {
          tooltip: {
            dataPoints?: { datasetIndex?: number }[];
            caretX: number;
            caretY: number;
          };
          chart: { canvas: { getBoundingClientRect: () => DOMRect } };
        }) => {
          const tooltipEl = document.getElementById("chartjs-tooltip");
          const hoveredDatasetIndex =
            context.tooltip.dataPoints?.[0]?.datasetIndex;

          // Only show tooltip for specific datasets
          if (hoveredDatasetIndex === undefined) return;

          if (!tooltipEl) {
            const div = document.createElement("div");
            div.id = "chartjs-tooltip";
            div.innerHTML = `
                <div class="hidden lg:block bg-[#2a3441] text-white p-4 rounded-lg shadow-xl w-[250px]">
                    <p class="text-xs text-[#758084] font-mono">
                    YOUR VALUE  <span class="float-right">IDEAL <span class="float-right text-white ml-1.5"> 0.52</span></span>
                    </p>
                    <p class="text-4xl mt-4 text-white"><span class="text-[#758084]">0.<span/><span class="text-white">49</span></p>
                </div>
            `;
            document.body.appendChild(div);
          }

          const position = context.chart.canvas.getBoundingClientRect();
          const tooltipDiv = document.getElementById("chartjs-tooltip");

          if (tooltipDiv) {
            tooltipDiv.style.opacity = "1";
            tooltipDiv.style.position = "absolute";
            tooltipDiv.style.left =
              position.left + context.tooltip.caretX + "px";
            tooltipDiv.style.top = position.top + context.tooltip.caretY + "px";
            tooltipDiv.style.transform = "translate(-50%, -100%)";
          }
        },
      },
      legend: { display: false },
    },
  };

  useEffect(() => {
    return () => {
      const tooltipEl = document.getElementById("chartjs-tooltip");
      if (tooltipEl) tooltipEl.remove();
    };
  }, []);

  return (
    <div className="flex flex-col justify-between space-y-5">
      <div className="w-full">
        <div className="w-full h-[153px] aspect-video">
          {/* /@ts-expect-error: type */}
          <Line ref={chartRef} data={data} options={options} />
        </div>
        <div className="grid grid-cols-3 text-center text-[#758084] text-[8px] font-mono">
          <p>BELOW AVERAGE</p>
          <p>AVERAGE</p>
          <p>ABOVE AVERAGE</p>
        </div>
      </div>

      <div className="bg-[#F2F5F5] p-2 rounded-[6px] text-xs md:text-base text-[#3D5861]">
        Your nasal prominence is in the
        <span className="font-medium"> 41st</span> percentile (average)
      </div>
    </div>
  );
}
