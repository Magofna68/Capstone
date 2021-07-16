import React from 'react';
import Maddie003 from '../IMG/Maddie003';
import Maddie001 from '../IMG/Maddie001';
import Maddie002 from '../IMG/Maddie002';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Instagram',
          subTitle: 'Pics, or it didn\'t happen',
          imgSrc: Maddie001,
          link: 'https://www.instagram.com/maddie_vitalityfitness/',
          selected: false
        },
        {
          id: 1,
          title: 'Genuine Fitness',
          subTitle: 'Private Personal Training',
          imgSrc: Maddie003,
          link: 'https://genuinefitnesstraining.com/',
          selected: false
        },
        {
          id: 2,
          title: 'Facebook',
          subTitle: 'Maddie\'s Profile',
          imgSrc: Maddie002,
          link: 'https://www.facebook.com/maddie.kiplinger',
          selected: false
        },
      ]
    }
  }
  render() {
    return (
      <p>Carousel works!</p>
    );
  }
}

export default Carousel;
