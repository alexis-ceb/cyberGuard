import AlertsIndicator from '../components/alertsIndicator'
import NetworkTrafficChart from '../components/networkTrafficChart'
import { Card, CardBody } from '@nextui-org/react'
import NetworkResume from '../components/NetworkResume'

const alerts = [
  {
    title: 'Security Alert',
    description: 'Unauthorized access detected, please verify your identity.',
    severity: 'danger'
  },
  {
    title: 'System Warning',
    description: 'System is running out of memory, please consider upgrading.',
    severity: 'warning'
  },
  {
    title: 'Information',
    description: 'A new version of the application is available.',
    severity: 'info'
  }
]

const trafficData = [
  { time: '2021-10-01T00:00:01Z', value: 5 },
  { time: '2021-10-01T00:00:02Z', value: 2 },
  { time: '2021-10-01T00:00:03Z', value: 8 },
  { time: '2021-10-01T00:00:04Z', value: 3 },
  { time: '2021-10-01T00:00:05Z', value: 6 },
  { time: '2021-10-01T00:00:06Z', value: 4 },
  { time: '2021-10-01T00:00:07Z', value: 7 },
  { time: '2021-10-01T00:00:08Z', value: 5 },
  { time: '2021-10-01T00:00:09Z', value: 9 },
  { time: '2021-10-01T00:00:10Z', value: 2 }
]

const networkResume =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.'

const Dashboard = () => {
  return (
    <div className="grow flex flex-col gap-2">
      <Card className="flex-1 bg-background p-2" shadow="none">
        <CardBody>
          <NetworkTrafficChart trafficData={trafficData} />
        </CardBody>
      </Card>

      <div className="flex-1 flex flex-row gap-2 overflow-clip">
        <Card className="flex-1 bg-background p-2" shadow="none">
          <CardBody>
            <NetworkResume danger={80} resume={networkResume} />
          </CardBody>
        </Card>

        <Card className="flex-1 bg-background p-2" shadow="none">
          <CardBody>
            <AlertsIndicator alerts={alerts} />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
