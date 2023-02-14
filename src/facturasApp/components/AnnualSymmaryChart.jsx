import { Bar, Line } from "react-chartjs-2";

export const AnnualSymmaryChart = ({billingsDataByMonth}) => {

  const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  
  const data = {
    labels: labels,
    datasets: [
      {
        type: 'bar',
        label: "Gasto en €",
        data: billingsDataByMonth,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)',
      }
    ]
  }

  return (
    <>
        <Bar data={data} />
    </>
  )
}
