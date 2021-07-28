import React from 'react';
import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import ITyped from '../Ityped';
import Banner from '../banners/ContactBanner';

import Hero from '../Hero';
import Carousel from '../Carousel';

function HomePage(props) {

  return (
    <div>
      {/* <Banner /> */}
      <Hero title={props.title} subTitle={props.subTitle} />
      <br></br>
      <Hero text={props.text} />

      <br></br>
      <br></br>
      <Carousel />
    </div >
  );
}

export default HomePage;