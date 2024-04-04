import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'
import dayjs from 'dayjs'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

const transformData = ({ trafficData }) => {
  const labels = trafficData.map(({ time }) => dayjs(time).format('HH:mm:ss A'))
  const data = trafficData.map(({ value }) => value)
  return { labels, data }
}

const constructDataset = ({ labels, data }) => {
  return {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Network Traffic',
        data,
        borderColor: 'rgb(51, 149, 118)',
        backgroundColor: 'rgb(51, 149, 118, 0.5)'
      }
    ]
  }
}

const NetworkTrafficChart = ({ trafficData }) => {
  const { labels, data } = transformData({ trafficData })
  const chartData = constructDataset({ labels, data })

  return (
    <Line
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: 'chartArea'
          },
          title: {
            display: true,
            text: 'Network Traffic'
          }
        },
        maintainAspectRatio: false
      }}
      data={chartData}
    />
  )
}

export default NetworkTrafficChart
