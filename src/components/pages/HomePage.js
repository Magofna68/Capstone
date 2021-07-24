import React from 'react';
import { useEffect, useRef } from 'react';
import { init } from 'ityped';

import Hero from '../Hero';
import Carousel from '../Carousel';

function HomePage(props) {

  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) {
      return;
    }
    init(textRef.current, {
      backDelay: 1500,
      startDelay: 0,
      typeSpeed: 150,
      showCursor: true,
      strings: ['Developer', 'Designer', 'Content Creator']
    })
  }, []);

  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      {/* <h3><span> ref={textRef} </span></h3> */}
      <br></br>
      <br></br>
      <br></br>
      <Carousel />
    </div>
  );
}

export default HomePage;