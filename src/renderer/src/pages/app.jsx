import { Tabs, Tab } from '@nextui-org/react'
import Dashboard from './dashboard'
import DataView from './dataView'
import photo from '../../../../resources/logo.png'
import { Image } from '@nextui-org/react'
import { useState } from 'react'

const views = {
  dashboard: <Dashboard />,
  data: <DataView />
}

const App = () => {
  const [selected, setSelected] = useState('dashboard')

  return (
    <div className="h-[100dvh] w-full flex flex-col gap-2 bg-white px-4 py-4">
      <div className="relative">
        <Image aria-label="SISA_LOGO" src={photo} width={80} radius="none" className="absolute" />
        <Tabs
          aria-label="PAGE_OPTIONS"
          size="sm"
          color="primary"
          radius="md"
          className="w-full justify-end"
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          <Tab key="dashboard" title="Dashboard" />
          <Tab key="data" title="Data View" />
        </Tabs>
      </div>
      <div className="grow flex flex-row overflow-clip">{views[selected]}</div>
    </div>
  )
}

export default App
