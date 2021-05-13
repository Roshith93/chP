import { useState, useContext } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

import { ChildRegistration } from './ChildRegistration'
import { ChildCancellation } from './ChildCancellation'
import { ChirpContext } from '../Context/ChirpContext'
import { UserLists } from './UserLists'
import { firstPageData, tabTitles } from '../Context/data'

export const TabMenus = () => {
  const [key, setKey] = useState('home')
  const userDetails = useContext(ChirpContext)

  return (
    <div>
      <Tabs
        id='controlled-tab-example'
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey='home' title={tabTitles.first}>
          <Row style={{ marginTop: '10px' }} noGutters>
            <Col xs={12} md='auto'>
              <Image src={firstPageData.image} alt='main' rounded />
            </Col>
            <Col xs={12} md={8}>
              <Card border='primary' style={{ width: 'auto' }}>
                <Card.Header>{firstPageData.title}</Card.Header>
                <Card.Body>
                  <Card.Text>{firstPageData.content}</Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey='profile' title={tabTitles.second}>
          <Row style={{ marginTop: '10px' }}>
            <Col xs={12} md='auto'>
              <img src={firstPageData.image} alt='main' />
            </Col>
            <Col sm={8}>
              <Card border='secondary'>
                <Card.Header style={{ fontSize: 'larger' }}>
                  Childs Participation interest
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <ChildRegistration />
                    <UserLists />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey='contact' title={tabTitles.third}>
          <ChildCancellation />
        </Tab>
      </Tabs>
    </div>
  )
}
