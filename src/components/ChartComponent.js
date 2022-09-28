import React from 'react'
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({UserData}) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Profile Chart",
      },
    },
  };
  const filterName = UserData.profile.map(element => {
    return element.user.name.title+" "+element.user.name.first+" "+element.user.name.last
  });



  const labels = filterName;

  const datasets = {
    labels,
    datasets: [
      {
        label: "Random Scores",
        data: labels.map(() => Math.floor(Math.random() * 101)),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Line options={options} data={datasets} />
  )
}

export default ChartComponent