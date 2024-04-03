import { Tabs, Tab } from '@nextui-org/react'
import Page_1 from './page_1'
import Page_2 from './page_2'
import photo from '../../../../resources/logo.png'
import { Image } from '@nextui-org/react'

const App = () => {
  return (
    <div className="bg-white">
      <Image src={photo} width={100} />
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
