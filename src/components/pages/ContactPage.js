import React from 'react';
import Hero from '../Hero';
import Content from '../Content';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import Banner from '../ContactBanner';

class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disable: 'false',
      emailSent: 'null'
    }
  }

  handleChange = (event) => {
    console.log(event)
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true,
      // emailSent: true

    });

    Axios.post('http://localhost:3000/api/email', this.state)
      .then(res => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false
          });
        }
      })
      .catch(res => {
        this.setState({
          disabled: false,
          emailSent: false
        });
      })
  }

  render() {
    return (
      <div>
        <Banner banner={this.props.banner} />
        <Hero title={this.props.title} />

        <Content id="color">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="full-name">Name</Form.Label>
              <Form.Control id="full-name" name="name" type="text" placeholder="Enter Full Name" value={this.state.name} onChange={this.handleChange}>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control id="email" name="email" type="email" placeholder="name@example.com" value={this.state.email} onChange={this.handleChange}>
              </Form.Control>
              <Form.Text className="text-muted">We'll never share your info with anyone</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange}>
              </Form.Control>
            </Form.Group>

            <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
              Send
            </Button>

            {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
            {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}

          </Form>

        </Content>
      </div>
    );
  }
}

export default ContactPage;