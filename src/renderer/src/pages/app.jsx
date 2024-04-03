import { Tabs, Tab } from '@nextui-org/react'
import Page_1 from './page_1'
import Page_2 from './page_2'
import photo from '../../../../resources/logo.png'
import { Image } from '@nextui-org/react'

const App = () => {
  return (
    <div className="h-[100dvh] bg-white px-3 py-3">
      <div className="h-full relative">
        <Image src={photo} width={80} radius="none" className="absolute" />
        <Tabs
          aria-label="Options"
          size="sm"
          color="primary"
          radius="md"
          className="w-full justify-end"
        >
          <Tab key="dashboard" title="Dashboard">
            <Page_1 />
          </Tab>
          <Tab key="data" title="Data View">
            <Page_2 />
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default App
