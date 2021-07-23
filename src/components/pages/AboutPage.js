import React from 'react';
import Hero from '../Hero';
import Content from '../Content';

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        Hello
      </Content>

    </div>
  );
}

export default AboutPage;