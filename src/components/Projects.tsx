import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import ColoredLine from './ColoredLine';

export default function Projects() {
  return (
    <div id='projects'>
      <Container>
        <p className='main-header'>Projects</p>
        <ColoredLine height={5} color='black' width='17%' />
        
      </Container>
    </div>
  );
}
