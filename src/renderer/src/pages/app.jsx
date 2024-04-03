import { Tabs, Tab } from '@nextui-org/react'
import Page_1 from './page_1'
import Page_2 from './page_2'

const App = () => {
  return (
    <div>
      <Tabs aria-label="Options">
        <Tab key="dashboard" title="Dashboard">
          <Page_1 />
        </Tab>
        <Tab key="data" title="Data View">
          <Page_2 />
        </Tab>
      </Tabs>
    </div>
  )
}

export default App
