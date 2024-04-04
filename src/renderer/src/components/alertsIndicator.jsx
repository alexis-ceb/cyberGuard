import { PiWarningDiamondDuotone, PiWarningDuotone, PiInfoDuotone } from 'react-icons/pi'
import { Divider } from '@nextui-org/react'

const Alert = ({ title, description, severity }) => {
  const icons = {
    danger: <PiWarningDiamondDuotone className="text-rose-500" />,
    warning: <PiWarningDuotone className="text-yellow-500" />,
    info: <PiInfoDuotone className="text-indigo-500" />
  }

  const severitySuffixes = {
    danger: 'Danger',
    warning: 'Warning',
    info: 'Information'
  }

  return (
    <div className="flex flex-col gap-2 px-4 py-2">
      <div className="flex justify-between">
        <p className="flex gap-2">
          <span className="text-xl pt-0.5">{icons[severity]}</span>
          <span className="text-sm font-medium">
            {severitySuffixes[severity]}: {title}
          </span>
        </p>
      </div>
      <div>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  )
}

const AlertsIndicator = ({ alerts }) => {
  return (
    <div>
      {alerts.map(({ title, description, severity }, i) => (
        <>
          <Alert title={title} description={description} severity={severity} key={i} />
          <Divider className="my-2" />
        </>
      ))}
    </div>
  )
}

export default AlertsIndicator
