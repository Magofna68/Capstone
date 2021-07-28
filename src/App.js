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
import ServicesBanner from './components/banners/ServicesBanner';
import ContactBanner from './components/banners/ContactBanner';



import Footer from './components/Footer'
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import ServicesPage from './components/pages/ServicesPage';
import ITyped from './components/Ityped';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      title: 'Maddie McConnell',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Services', path: '/services' }
      ],
      home: {

        subTitle: 'Vitality Fitness',
        title: <ITyped />,
        // text: <ITyped />,
        text: 'Let\'s get to work.',

      },
      about: {
        title: 'About Maddie',
      },
      contact: {
        title: 'Let\'s Chat.',
        banner: <ContactBanner />
      },
      services: {
        title: 'Services Provided',
        banner: <ServicesBanner />
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>
              <Link className="logo" to="/">Greatness Awaits</Link>
            </Navbar.Brand>

            <NavbarToggle className="border-0" aria-controls="navbar-toggle" />
            <NavbarCollapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/services">Services</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <div className="anchorTag1">
                  <a href="https://www.instagram.com/maddie_vitalityfitness/" alt="instagram"><span><InstagramIcon fontSize="large" /></span></a>
                </div>
                <div className="anchorTag2">
                  <a href="https://www.facebook.com/maddie.kiplinger" alt="facebook"><span><FacebookIcon fontSize="large" /></span></a>
                </div>

              </Nav>
            </NavbarCollapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />

          <Route path="/services" render={() => <ServicesPage title={this.state.services.title} />} />

          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />

          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Footer />
        </Container>

      </Router>
    )
  }
}
export default App;
