import React, { Component } from "react";
import VitalityB from '../../videos/VitalityB.mp4';

class ContactBanner extends Component {
  render() {
    return (
      <div>
        <video src={VitalityB} alt="Vitality Fitness Company" type="video/mp4" id="banner" width="1300" height="150" autoplay="true" loop="true" />
      </div>
    )
  };
}

export default ContactBanner;