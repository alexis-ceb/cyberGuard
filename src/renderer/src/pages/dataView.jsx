import { useState } from 'react'
import { PackagesViewData } from './dataView/packagesView'
import { Tabs, Tab } from '@nextui-org/react'
import SimpleTable from './simpleTable'

const views = {
  packages: PackagesViewData
}

const DataView = () => {
  const [selected, setSelected] = useState(Object.keys(views)[0])
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
          {Object.keys(views).map((key) => (
            <Tab key={key} title={views[key].label} />
          ))}
        </Tabs>
      </div>
      <div className="grow flex flex-row overflow-clip">
        <SimpleTable
          key={views[selected].key}
          columns={views[selected].columns}
          rows={views[selected].rows}
          customColumns={views[selected].customColumns}
        />
      </div>
    </div>
  )
}

export default DataView
