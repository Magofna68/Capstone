import React, { Component } from "react";
// import Vitality from '../IMG/VitalityBanner.png';
import Test from '../videos/Test.mp4';

class Banner extends Component {
  render() {
    return (
      <div>
        <video src={Test} alt="Vitality Fitness Company" type="video/mp4" id="banner" width="1300" height="150" autoplay="true" loop="true" />
      </div>
    )
  };
}

export default Banner;