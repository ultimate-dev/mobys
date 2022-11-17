import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement,
  RadialLinearScale,
  BarElement,
} from "chart.js";
import { Doughnut, Line, PolarArea, Radar, Bar } from "react-chartjs-2";

export const CHART_COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#C9CB40", "#FF9F40"];
export const GRAY_COLOR = "#CCCCCC";
export const ALPHA_1 = "40";
export const ALPHA_2 = "80";
const sortData = (labels: string[], datasets: { label: string; data: any[] }[]) => {
  return labels
    .map((label, i) => ({
      label,
      values: datasets.map(({ data }) => data[i]),
    }))
    .sort((a, b) => a.values.reduce((sum, v) => sum + v) - b.values.reduce((sum, v) => sum + v));
};

class ChartProps {
  labels: string[];
  datasets: { label: string; data: any[] }[];
}
const DoughnutChart = ({ labels, datasets }: ChartProps) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  let chartData = sortData(labels, datasets);
  return (
    <Doughnut
      data={{
        labels: chartData.map(({ label }) => label),
        datasets: datasets.map((dataset, index) => {
          // @ts-ignore
          let data: any[] = chartData.reduce((sum, item) => [...sum, item.values[index]], []);
          return {
            label: dataset.label,
            data,
            backgroundColor: data.map(
              (value, i) =>
                (CHART_COLORS.length > i && Math.abs(value) > 0 ? CHART_COLORS[i] : GRAY_COLOR) +
                ALPHA_1
            ),
            borderColor: data.map(
              (value, i) =>
                (CHART_COLORS.length > i && Math.abs(value) > 0 ? CHART_COLORS[i] : GRAY_COLOR) +
                ALPHA_2
            ),
            borderWidth: 1,
          };
        }),
      }}
    />
  );
};

const AreaChart = ({ labels = [], datasets = [] }: ChartProps) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  return (
    <Line
      data={{
        labels,
        datasets: datasets.map((dataset, index) => {
          return {
            label: dataset.label,
            data: dataset.data,
            backgroundColor:
              (CHART_COLORS.length > index ? CHART_COLORS[index] : GRAY_COLOR) + ALPHA_1,
            borderColor: (CHART_COLORS.length > index ? CHART_COLORS[index] : GRAY_COLOR) + ALPHA_2,
            borderWidth: 1,
            fill: true,
          };
        }),
      }}
    />
  );
};

const PolarChart = ({ labels = [], datasets = [] }: ChartProps) => {
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

  return (
    <PolarArea
      data={{
        labels,
        datasets: datasets.map((dataset) => ({
          ...dataset,
          backgroundColor: ["red"],
          borderColor: ["red"],
          borderWidth: 1,
        })),
      }}
    />
  );
};

const RadarChart = ({ labels = [], datasets = [] }: ChartProps) => {
  ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

  return (
    <Radar
      data={{
        labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
        datasets: [
          {
            label: "# of Votes",
            data: [2, 9, 3, 5, 2, 3],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      }}
    />
  );
};

const VerticalChart = ({ labels = [], datasets = [] }: ChartProps) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  return (
    <Bar
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: true,
            text: "Chart.js Bar Chart",
          },
        },
      }}
      data={{
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Dataset 1",
            data: [0, 1, 2, 1, 2, 4],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Dataset 2",
            data: [0, 1, 2, 1, 2, 4],
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      }}
    />
  );
};

const HorizontalChart = ({ labels = [], datasets = [] }: ChartProps) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  return (
    <Bar
      options={{
        indexAxis: "y" as const,
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: "right" as const,
          },
          title: {
            display: true,
            text: "Chart.js Horizontal Bar Chart",
          },
        },
      }}
      data={{
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Dataset 1",
            data: [0, 1, 2, 1, 2, 4],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Dataset 2",
            data: [0, 1, 2, 1, 2, 4],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      }}
    />
  );
};

export default { DoughnutChart, AreaChart, PolarChart, RadarChart, VerticalChart, HorizontalChart };
