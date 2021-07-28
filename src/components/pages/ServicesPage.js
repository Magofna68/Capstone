import React from 'react';
import Hero from '../Hero';
import Content from '../Content';
import Maddie05 from '../../IMG/Maddie05.jpg';
import Banner from '../ServicesBanner';

function ServicesPage(props) {
  return (
    <div>
      <Banner banner={props.banner} />
      <Hero title={props.title} />
      <Content>
        <h3><bold>What You Can Expect:</bold></h3>
        <br></br>
        <ol>
          <li>Customized training programs specifically based on your goals, preferences, equipment access, and physical limitations.</li>
          <li>Instruction and guidance on proper lifting form with continuous feedback</li>
          <li>Guidance with how to select exercises, weights, and rest periods based on your goals.</li>
          <li>Nutritional Guidance with the option for instruction on how to track your macros.  Tracking Macros will allow you to dial in your nutrition based on your specific needs. <br></br><span id="smallFont">This is not a diet, it is a way to track your food consumption and learn exactly how much food your body needs based on your goals.</span></li>
          <li>Body composition measurements - skin caliper, tape measure, and scale weight are used to track progress.  Nutritional feedback is given based on biweekly measurement results.</li>
          <li>Me as your resource! You may text of call me with any questions that arise regarding nutrition or exercise.</li>
        </ol>
        <br></br>
        <img src={Maddie05} alt="fit girl" className="aboutPhoto"></img>
        <br></br>
        <br></br>
        <h4>FAQ:</h4>
        <ul>
          <li><strong>What are <a href="https://www.sclhealth.org/blog/2018/10/what-are-macros-and-why-should-i-be-counting-them/">Macros</a>?</strong></li>
          <p>
            "macro is short for macronutrient. What’s a macronutrient? They’re the three categories of nutrients you eat the most and provide you with most of your energy: protein, carbohydrates and fats. So when you’re counting your macros, you’re counting the grams of proteins, carbs or fat that you’re consuming."
            <br></br>
            - SLCHealth.org
          </p>
          <li><strong>What does the Pricing Structure Look Like?</strong></li>
          <p>
            An hourly rate of $60 will give you access to all the services listed above.
          </p>
        </ul>
      </Content >

    </div >
  );
}

export default ServicesPage;