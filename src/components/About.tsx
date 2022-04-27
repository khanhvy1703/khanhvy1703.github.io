import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import ColoredLine from './ColoredLine';

export default function About() {
  return (
    <div id='about'>
      <Container className='mg-top'>
        <Row>
          <Col md={8}>
            <p className='main-header'>My About</p>
            <ColoredLine height={5} color='black' width='17%' />
            <p className='about-para'>
              Hi! I'm Ngoc. I am from Vietnam but currently living in Boston,
              Massachusetts. My friends prefer to call me Victoria since they
              keep mispronouncing my name 😭.
            </p>
            <p className='about-para'>
              I am currently studying Computer Science and Mathematics at
              Northeastern University in Boston, MA. I am extremely enjoying it.
              I love coding and solving problems. Coding is hard and
              time-consuming but when you fix all the bugs and make your
              programs work, the feeling after that is unspeakable. 
            </p>
            <p className='about-para'>
              I mainly code in Java, Javascript and Typescript. I have had ~
              1-year experience working with React, Typescript and NodeJS
              through course work, internship and CS club. I am interested in
              software, webite, or mobile developement in finance, gaming
              industry and healthcare.
            </p>
            <p className='about-para'>
              This site is an outlet where I want to share to everyone about me:
              projects, skills and experience.
            </p>
            <Accordion>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>What I do </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Wrap up my Spring semester</li>
                    <li>Take classes during summer 1</li>
                    <li>Be a TA for CS3000 in Summer 1</li>
                    <li>
                      Start my new project which will be coded in
                      React/Typescript, NodeJS, GraphQL and Redux if applicable
                    </li>
                    <li>Go to NYC and start my coop at Priceline in July</li>
                    <li>Hike more </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='13'>
                <Accordion.Header>
                  What I easily get excited about
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>video games</li>
                    <li>
                      history, especially anything that is about medieval era{' '}
                    </li>
                    <li>traveling</li>
                    <li>everything that is related to horror</li>
                    <li>numbers, puzzle</li>
                    <li>food</li>
                    <li>restaurants</li>
                    <li>water</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header>Fun fact</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>My real name is Vy (prounciation: /V:i/)</li>
                    <li>I have an instagram account just for food </li>
                    <li>
                      I don't like social media and I don't talk unless I have to
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div>
              <p className='about-language-tool-title'>Languages and Tools</p>
              <div className='about-language-tool'>
                <Image
                  className='about-icon'
                  src={require('../images/java.png')}
                />
                <Image
                  className='about-icon'
                  src={require('../images/csharp.png')}
                />
                <Image
                  className='about-icon'
                  src={require('../images/nodeJS.png')}
                />
                <Image
                  className='about-icon'
                  src={require('../images/react.png')}
                />
                <Image
                  className='about-icon'
                  src={require('../images/javascript.png')}
                />
                <Image
                  className='about-icon'
                  src={require('../images/typescript.png')}
                />
                <Image
                  className='about-icon'
                  src={require('../images/graphql.png')}
                />
                <Image
                  className='about-icon'
                  src={require('../images/mysql.png')}
                />
                <Image
                  className='about-icon'
                  src={require('../images/firebase.png')}
                />
                <Image
                  className='about-icon'
                  src={require('../images/git.png')}
                />
              </div>
            </div>
          </Col>

          <Col md={4} className='center'>
            <Image
              className='about-image'
              src={require('../images/avatar.jpg')}
              roundedCircle
            />
            <div className='about-info-header'>My Info</div>
            <ColoredLine height={5} color='black' width='50%' />
            <p className='about-info'>
              <p>
                <span className='about-info-title'>Full name:</span>
                <br></br>
                <span>Ngoc Khanh Vy Le</span>
              </p>
              <p>
                <span className='about-info-title'>Preference name:</span>
                <br></br>
                <span>Ngoc Le</span>
                <br></br>
                <span>Victoria</span>
              </p>
              <p>
                <span className='about-info-title'>Zodiac Sign:</span>
                <br></br>
                <span>Pisces (3/17)</span>
              </p>
              <p>
                <span className='about-info-title'>School:</span>
                <br></br>
                <span>Northeastern University '23</span>
              </p>
              <p>
                <span className='about-info-title'>Major:</span>
                <br></br>
                <span>Computer Science and Math</span>
              </p>
              <p>
                <span className='about-info-title'>Country:</span>
                <br></br>
                <span>
                  Vietnam{' '}
                  <Image
                    className='about-info-flag'
                    src={require('../images/vn-flag.png')}
                  />
                </span>
              </p>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
