import React from 'react';

class ContactPage extends React.Component {
  constructor(props): {
    super(props);
      this.state = {
  name: '',
  email: '',
  message: '',
  disable: 'false',
  emailSent: 'null'
}
}
}

render() {
  return (

    <p>Contact Page Works!</p>
  );
}

export default ContactPage;