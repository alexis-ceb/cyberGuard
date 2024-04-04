import AlertsIndicator from '../components/alertsIndicator'
import NetworkTrafficChart from '../components/networkTrafficChart'
import { Card, CardBody } from '@nextui-org/react'
import NetworkResume from '../components/NetworkResume'
import usePolling from '../api/usePolling'
import routes from '../api/routes'

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

const networkResume = 'Todo cool.'

const Dashboard = () => {
  const trafficData = usePolling(routes.packages_by_second)

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
