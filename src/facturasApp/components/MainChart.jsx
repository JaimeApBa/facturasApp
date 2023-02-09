import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

export const MainChart = ({billingsData}) => {
  
  const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const chartData = {
    amount: Array(12).fill(0),
    usage: Array(12).fill(0)
  };
  const { amount, usage } = chartData;
  
  billingsData.map( el => {
    const date = new Date(el.convertedDate).getMonth();
    amount[date] = +el.totalAmount;
    usage[date] = +el.usage;
    return chartData;
  })
  
  const data = {
    labels: labels,
    datasets: [
      {
        type: 'line',
        label: "Consumo",
        data: usage,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgb(54, 162, 235)',
      },
      {
        type: 'bar',
        label: "Gasto en €",
        data: amount,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)',
      }
    ]
  }

  return (
    <>
        <Line data={data} />
    </>
  )
}
