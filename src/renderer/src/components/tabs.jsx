import { Tabs, Tab } from '@nextui-org/react'
import PropTypes from 'prop-types'

const Container = ({ children }) => {
  return <div className="h-full rounded-lg">{children}</div>
}

Container.propTypes = {
  children: PropTypes.node
}

const TabPages = () => {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="photos" title="Photos">
          <Container>
            <p>ola 1</p>
          </Container>
        </Tab>
        <Tab key="music" title="Music">
          <Container>
            <p>ola 2</p>
          </Container>
        </Tab>
        <Tab key="videos" title="Videos">
          <Container>
            <p>ola 3</p>
          </Container>
        </Tab>
      </Tabs>
    </div>
  )
}

export default TabPages
