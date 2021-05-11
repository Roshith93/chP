import { useState, useContext } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

import { ChildRegistration } from './ChildRegistration'
import { ChildCancellation } from './ChildCancellation'
import { ChirpContext } from '../Context/PraContext'
import { UserLists } from './UserLists'

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
        <Tab eventKey='home' title='What is Chirp'>
          <Row style={{ marginTop: '10px' }}>
            <Col xs={12} md={4}>
              <Image src='/images/chirpicon.jpg' alt='main' rounded />
            </Col>
            <Col xs={12} md={8}>
              <Card border='primary' style={{ width: 'auto' }}>
                <Card.Header>What is chirp?</Card.Header>
                <Card.Body>
                  <Card.Text>
                    As we know, anyone considering participation in a clinical
                    trial must be provided with information about the trial,
                    including the participant's responsibilities and commitments
                    and the risks and benefits of participating in the trial.
                    After reviewing this information the person is then asked to
                    consent to participate in the trial. This is known as the
                    informed consent process. For children participating in a
                    clinical trial, informed consent (technically permission)
                    has to be given by the parent(s)/ legal representative of
                    the child. However, the child's view must also be taken into
                    consideration, and for this reason we also need to ask the
                    child to assent to taking part in the trial. In order to
                    assent, the child must be given information about the trial
                    that is written using language that they can understand and
                    with the detail suitable for their age. The problem we in
                    the Centre for Pediatric Development often find is that the
                    wording used in these documents is too complex for children.
                    This isn't surprising. These documents are written by adults
                    who often have years of experience in drug development, and
                    so have developed a particular vocabulary. The best people
                    to review assent documents to check if a child of the
                    relevant age can understand them are children themselves.
                    For this reason PRA has created the Children's Internal
                    Review Panel (ChIRP). ChIRP is a panel made up by children
                    of our staff who we can ask to read and provide their
                    thoughts on assent documents prepared for pediatric studies.
                    This feedback can then be provided to the sponsor and used
                    to develop more suitable assents for the children taking
                    part in these studies. If this might be of interest to you
                    and your child(ren), we welcome you to register yourself and
                    your child(ren) using the link at the end of this
                    announcement. Identities are kept confidential, it is
                    completely voluntary, and you can de-register at any time.
                    If you would like any more information please do not
                    hesitate to contact the ChIRP team
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
          </Row>
        </Tab>
        <Tab
          eventKey='profile'
          title=' I want to register my child(ren) for ChIRP'
        >
          <Row style={{ marginTop: '10px' }}>
            <Col sm={4}>
              <img src='/images/chirpicon.jpg' alt='main' />
            </Col>
            <Col sm={8}>
              <Card border='secondary'>
                <Card.Header style={{fontSize: 'larger'}}>Childs Participation interest</Card.Header>
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
        <Tab
          eventKey='contact'
          title=' I no longer wish my child(ren) to participate in ChIRP'
        >
          <ChildCancellation />
        </Tab>
      </Tabs>
    </div>
  )
}
