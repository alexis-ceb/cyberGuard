import { useState } from 'react'
import { Tabs, Tab } from '@nextui-org/react'
import SimpleTable from './simpleTable'
import routes from '../api/routes'
import dayjs from 'dayjs'
import usePolling from '../api/usePolling'

const packagesColumns = [
  {
    key: 'time',
    label: 'TIME'
  },
  {
    key: 'sender_ip',
    label: 'SENDER IP'
  },
  {
    key: 'receiver_ip',
    label: 'RECEIVER IP'
  },
  {
    key: 'size_bytes',
    label: 'SIZE (BYTES)'
  }
]

const packagesCustomColumns = {
  time: (value) => <div>{dayjs(value).format('LL LTS')}</div>,
  size_bytes: (value) => (
    <div>
      {value} bytes ({(value / 1024).toFixed(2)} KB)
    </div>
  )
}

const DataView = () => {
  const [selected, setSelected] = useState('packages')
  const [packages] = usePolling(routes.packages)

  return (
    <div className="grow flex flex-col gap-2">
      <div>
        <Tabs
          aria-label="PAGE_OPTIONS"
          size="sm"
          color="default"
          radius="md"
          className="w-full justify-end"
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          <Tab aria-label="TAB_OPTION" key="packages" title="Packages" />
        </Tabs>
      </div>
      <div className="grow flex flex-row overflow-clip">
        <SimpleTable
          key="packages"
          columns={packagesColumns}
          rows={packages}
          customColumns={packagesCustomColumns}
        />
      </div>
    </div>
  )
}

export default DataView
