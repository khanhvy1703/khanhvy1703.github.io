import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import ColoredLine from './ColoredLine';

export default function Projects() {
  return (
    <div id='projects'>
      <Container>
        <p className='main-header'>Projects</p>
        <ColoredLine height={5} color='black' width='17%' />
        <Row>
          <Col className='row-content'>
            <Card
              className='hover-right'
              style={{
                width: '35rem',
                borderRadius: '10px',
                boxShadow: '1px 3px 1px #5F9EA0',
              }}
            >
              <Card.Body>
                <Card.Title className='card-title'>Covey Town</Card.Title>
                <Card.Text>
                  <p className='about-para font-18'>
                    It is a group project from CS4530 - a town where people will
                    be able to join, chat and videos call.
                  </p>
                  <p className='about-para font-18'>
                    My group contributed to the CoveyTown source code made by
                    professors by adding new features:
                  </p>
                  <ul className='font-18'>
                    <li>
                      User authentication: users have to log-in or register to
                      able join town
                    </li>
                    <li>
                      Users can also choose their avatar and create their own
                      unique usernames
                    </li>
                    <li>
                      Users can able to send friends' requests, add friends or
                      invite their friends to join their current town
                    </li>
                  </ul>
                  <div>
                    <Image
                      className='card-icon'
                      src={require('../images/react.png')}
                    />
                    <Image
                      className='card-icon'
                      src={require('../images/typescript.png')}
                    />
                    <Image
                      className='card-icon'
                      src={require('../images/nodeJS.png')}
                    />
                    <Image
                      className='card-icon'
                      src={require('../images/firebase.png')}
                    />
                    <Image
                      className='card-icon'
                      src={require('../images/graphql.png')}
                    />
                    <Image
                      className='card-icon'
                      src={require('../images/postgreSQL.png')}
                    />
                    <Image
                      className='card-icon'
                      src={require('../images/mikroORM.jpg')}
                    />
                  </div>
                </Card.Text>
                <Button variant='light' className='btn-bg'>
                  <a
                    className='link'
                    target='_blank'
                    href='https://adoring-darwin-cc5359.netlify.app/'
                    rel='noreferrer'
                  >
                    Demo
                  </a>
                </Button>
                <Button
                  variant='secondary'
                  disabled
                  className='btn-bg btn-mg-left'
                >
                  Source code
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='row-content mg-top-col'>
            <Card
              className='hover-left'
              style={{
                width: '35rem',
                borderRadius: '10px',
                boxShadow: '1px 3px 1px #5F9EA0',
              }}
            >
              <Card.Body>
                <Card.Title>Restaurant Searching Mobile App</Card.Title>
                <Card.Text>
                  <p className='about-para font-18'>
                    An app allows users to search the restaurant by entering
                    either the dishes or restaurants' names in the specific
                    localtion
                  </p>
                  <p className='about-para font-18'>
                    The search results will show the very first 50 restaurants
                    in the list. It will also shows the rates and prices' ranges
                    of the restaurant.
                  </p>
                  <p className='about-para font-18'>
                    The result pages currently just show the three images of the
                    most famous dishes in the restaurant
                  </p>
                  <Image
                    className='card-icon'
                    src={require('../images/react.png')}
                  />
                  <Image
                    className='card-icon'
                    src={require('../images/javascript.png')}
                  />
                </Card.Text>

                <Button variant='light' className='btn-bg'>
                  <a
                    className='link'
                    target='_blank'
                    href='https://github.com/khanhvy1703/restaurant-search-app'
                    rel='noreferrer'
                  >
                    Source code
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='mg-top-row'>
          <Col className='row-content'>
            <Card
              className='hover-right'
              style={{
                width: '35rem',
                borderRadius: '10px',
                boxShadow: '1px 3px 1px #5F9EA0',
              }}
            >
              <Card.Body>
                <Card.Title>Password Generator</Card.Title>
                <Card.Text>
                  <p className='about-para font-18'>
                    A simple application generates a complex password for the
                    user.
                  </p>
                  <p className='about-para font-18'>
                    The new password will be created dependeding on the desire
                    length, characters of the password that users want. (upper
                    or lower letters, numbers, and symbol). The minimum length
                    should be 6 and the application will send an error warning
                    if users don't choose any box options or choose the length
                    that are less than the minimum.
                  </p>
                  <Image
                    className='card-icon'
                    src={require('../images/java.png')}
                  />
                  <Image
                    className='card-icon'
                    src={require('../images/html5.png')}
                  />
                  <Image
                    className='card-icon'
                    src={require('../images/css.png')}
                  />
                  <Image
                    className='card-icon'
                    src={require('../images/javascript.png')}
                  />
                </Card.Text>
                <Button variant='light' className='btn-bg'>
                  <a
                    className='link'
                    target='_blank'
                    href='https://github.com/khanhvy1703/Password-Generator'
                    rel='noreferrer'
                  >
                    Source code
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='row-content mg-top-col'>
            <Card
              className='hover-left'
              style={{
                width: '35rem',
                borderRadius: '10px',
                boxShadow: '1px 3px 1px #5F9EA0',
              }}
            >
              <Card.Body>
                <Card.Title>Easy Animator</Card.Title>
                <Card.Text>
                  <p className='about-para font-18'>
                    This project was created for Object-Oriented Design class
                    (CS3500). The source code for this project has been set
                    private due to the instructor's requests.
                  </p>
                  <p className='about-para font-18'>
                    The project is about building an application that helps to
                    create simple but effective 2D animations from shapes by
                    using MVC design pattern and OOP principles. The application
                    allows user to input different shapes, move them, change
                    their colors or sizes as well as the speed. It also reads
                    the txt file and shows the text output, animation or exports
                    svg file.
                  </p>
                  <Image
                    className='card-icon'
                    src={require('../images/java.png')}
                  />
                </Card.Text>
                <Button variant='light' className='btn-bg'>
                  <a
                    className='link'
                    target='_blank'
                    href='https://60e3ab25582304f7c2eee526--ngockhanhvyle.netlify.app/easy-animators.svg'
                    rel='noreferrer'
                  >
                    Sample output
                  </a>
                </Button>
                <Button
                  variant='secondary'
                  disabled
                  className='btn-bg btn-mg-left'
                >
                  Source code
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className='mg-top-row'>
          <Col className='row-content'>
            <Card
              className='hover-right'
              style={{
                width: '35rem',
                borderRadius: '10px',
                boxShadow: '1px 3px 1px #5F9EA0',
              }}
            >
              <Card.Body>
                <Card.Title>Pyramid Solitare</Card.Title>
                <Card.Text>
                  <p className='about-para font-18'>
                    This project was created for Object-Oriented Design class
                    (CS3500). The source code for this project has been set
                    private due to the instructor's requests.
                  </p>
                  <p className='about-para font-18'>
                    This is a text-based version of Pyramid Solitaire game. It
                    is made by using the MVC design pattern and OOP, using the
                    command-line arguments to play. The game is enhanced and
                    there are 3 different levels for users to choose.
                  </p>
                  <Image
                    className='card-icon'
                    src={require('../images/java.png')}
                  />
                </Card.Text>
                <Button
                  variant='secondary'
                  disabled
                  className='btn-bg btn-mg-left'
                >
                  Source code
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='row-content mg-top-col'>
            <Card
              className='hover-left'
              style={{
                width: '35rem',
                borderRadius: '10px',
                boxShadow: '1px 3px 1px #5F9EA0',
              }}
            >
              <Card.Body>
                <Card.Title>Snake</Card.Title>
                <Card.Text>
                  <p className='about-para font-18'>
                    This is my version of the classic, famous and nostalgic
                    arcade snake game. The gameplay is using the arrow keys to
                    control the snake and eat the food. The game can only be
                    played on a computer
                  </p>
                  <p className='about-para font-18'>
                    There is a small bug happening: when the user's score is 0
                    and if the snake eats the food, it's supossed to return
                    "GAME OVER" screen but instead the score keeps substracting
                    to negative score
                  </p>
                  <Image
                    className='card-icon'
                    src={require('../images/html5.png')}
                  />
                  <Image
                    className='card-icon'
                    src={require('../images/css.png')}
                  />
                  <Image
                    className='card-icon'
                    src={require('../images/javascript.png')}
                  />
                </Card.Text>
                <Button variant='light' className='btn-bg'>
                  <a
                    className='link'
                    target='_blank'
                    href='https://github.com/khanhvy1703/Snake'
                    rel='noreferrer'
                  >
                    Source code
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='mg-top-row'>
          <Col className='row-content'>
            <Card
              className='hover-right'
              style={{
                width: '35rem',
                borderRadius: '10px',
                boxShadow: '1px 3px 1px #5F9EA0',
              }}
            >
              <Card.Body>
                <Card.Title>Matching Cards</Card.Title>
                <Card.Text>
                  <p className='about-para font-18'>
                    This is my version of the classic mix-match game.
                  </p>
                  <p className='about-para font-18'>
                    The game rule is easy: find two cards that contain the same
                    pictures. You will win when you find all the pairs. The deck
                    will be shuffled every new game.
                  </p>
                  <Image
                    className='card-icon'
                    src={require('../images/html5.png')}
                  />
                  <Image
                    className='card-icon'
                    src={require('../images/css.png')}
                  />
                  <Image
                    className='card-icon'
                    src={require('../images/javascript.png')}
                  />
                </Card.Text>
                <Button variant='light' className='btn-bg'>
                  <a
                    className='link'
                    target='_blank'
                    href='https://github.com/khanhvy1703/Memory-Game'
                    rel='noreferrer'
                  >
                    Source code
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <p className='row-content text-proj-info'>
          You can find more projects in my Github
          <Image className='proj-icon' src={require('../images/github.png')} />
        </p>
      </Container>
    </div>
  );
}
