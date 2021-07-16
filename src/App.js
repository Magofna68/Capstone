import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Nav from 'react-bootstrap/esm/Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Maddie McConnell',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Elevate Your Gains',
        subTitle: 'Accomplish your goals. Change your life.',
        text: 'Lets get to work.'
      },
      about: {
        title: 'Elevate Your Gains',
      },
      contact: {
        title: 'Let\'s Chat',
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <p>Hi from React</p>

          <Navbar className="border-bottom">
            <Navbar.Brand>Maddie McConnell</Navbar.Brand>

            <NavbarToggle aria-controls="navbar-toggle" />
            <NavbarCollapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </NavbarCollapse>
          </Navbar>


        </Container>

      </Router>
    )
  }
}
export default App;
