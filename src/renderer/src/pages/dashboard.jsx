import AlertsIndicator from '../components/alertsIndicator'
import NetworkTrafficChart from '../components/networkTrafficChart'
import { Card, CardBody } from '@nextui-org/react'
import NetworkResume from '../components/NetworkResume'
import routes from '../api/routes'
import { useEffect, useState } from 'react'
import api from '../api/api'
import { toast } from 'react-hot-toast'

const alertMockups = [
  {
    title: 'Password Breach',
    description: 'Suspected breach in system passwords, immediate action required.',
    severity: 'danger'
  },
  {
    title: 'Firewall Breach',
    description: 'Unusual activity detected in the firewall, potential breach.',
    severity: 'warning'
  },
  {
    title: 'Phishing Attempt Detected',
    description: 'A phishing attempt was identified and blocked.',
    severity: 'warning'
  },
  {
    title: 'Malware Detected',
    description: 'Malicious software has been detected and quarantined.',
    severity: 'danger'
  },
  {
    title: 'Login Attempt Failure',
    description: 'Multiple failed login attempts detected for your account.',
    severity: 'warning'
  },
  {
    title: 'Encryption Failure',
    description: 'Data encryption process failed for sensitive files.',
    severity: 'danger'
  },
  {
    title: 'Suspicious Connection',
    description: 'An unknown device attempted to connect to the network.',
    severity: 'warning'
  },
  {
    title: 'Data Leak',
    description: 'Sensitive data exposure detected in the latest system logs.',
    severity: 'danger'
  },
  {
    title: 'API Vulnerability',
    description: 'A critical vulnerability detected in one of the APIs.',
    severity: 'danger'
  },
  {
    title: 'Certificate Expiry',
    description: 'SSL Certificate for the main domain is expiring soon.',
    severity: 'warning'
  }
]

const networkResumeMockups = [
  {
    resume: 'Network is running smoothly. No issues detected.',
    danger: 0
  },
  {
    resume: 'Network is experiencing some issues. Please check the alerts for more information.',
    danger: 2
  },
  {
    resume: 'Network is currently unstable. Please check the alerts for more information.',
    danger: 3
  },
  {
    resume: 'Network is down. Immediate action required.',
    danger: 5
  },
  {
    resume: 'Network is running smoothly. No issues detected.',
    danger: 0
  },
  {
    resume: 'Network is experiencing some issues. Please check the alerts for more information.',
    danger: 2
  },
  {
    resume: 'Network is currently unstable. Please check the alerts for more information.',
    danger: 3
  },
  {
    resume: 'Network is down. Immediate action required.',
    danger: 5
  }
]

const fetchPackages = async () => {
  try {
    const response = await api.get(routes.packages_by_second)
    return response.data
  } catch (error) {
    console.error('Error at trying to get data', error)
    if (error instanceof Error) {
      toast.error(error.message)
    }
  }
}

const Dashboard = () => {
  const [networkResume, setNetworkResume] = useState('')
  const [alerts, setAlerts] = useState([])
  const [danger, setDanger] = useState(0)
  const [trafficData, setTrafficData] = useState([])

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const packages = await fetchPackages()
      setTrafficData(packages)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * networkResumeMockups.length)
      setNetworkResume(networkResumeMockups[randomIndex].resume)
      setDanger(networkResumeMockups[randomIndex].danger)
    }, 10000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * alertMockups.length)
      setAlerts((alerts) => [...alerts, alertMockups[randomIndex]])
    }, 10000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="grow flex flex-col gap-2">
      <Card aria-label="NETWORK_TRAFFIC" className="flex-1 bg-background p-2" shadow="none">
        <CardBody aria-label="NETWORK_TRAFFIC_2">
          <NetworkTrafficChart trafficData={trafficData} />
        </CardBody>
      </Card>

      <div className="flex-1 flex flex-row gap-2 overflow-clip">
        <Card aria-label="NETWORK_RESUME" className="flex-1 bg-background p-2" shadow="none">
          <CardBody aria-label="NETWORK_RESUME_2">
            <NetworkResume danger={danger} resume={networkResume} />
          </CardBody>
        </Card>

        <Card aria-label="ALERTS_INDICATOR" className="flex-1 bg-background p-2" shadow="none">
          <CardBody aria-label="ALERTS_INDICATOR_2">
            <AlertsIndicator alerts={alerts} />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
