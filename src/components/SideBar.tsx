import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function SideBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        variant='light'
        sticky='top'
        className='side-bar'
      >
        <Container>
          <Navbar.Brand className='side-bar-brand'>Victoria.</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'></Nav>
            <Nav>
              <Nav.Link href='#about'>About</Nav.Link>
              <Nav.Link href='#experience'>Experience</Nav.Link>
              <Nav.Link href='#projects'>Projects</Nav.Link>
              <Nav.Link href='#contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
