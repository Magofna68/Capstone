import React from 'react';
import Hero from '../Hero';
import Content from '../Content';
import Maddie05 from '../../IMG/Maddie05.jpg';
import ServicesBanner from '../banners/ServicesBanner';

function ServicesPage(props) {
  return (
    <div className="servicesBackground">
      <ServicesBanner banner={props.banner} />
      <Hero title={props.title} />
      <Content>
        <h3 className="greenFont"><bold>What You Can Expect:</bold></h3>
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
        <h4>FAQ:</h4><br></br>
        <ul id="faq" className="servicesBody">
          <li><strong>What are <a href="https://www.sclhealth.org/blog/2018/10/what-are-macros-and-why-should-i-be-counting-them/">Macros</a>?</strong></li>
          <p className="whiteText">
            "..Macro is short for macronutrient. What’s a macronutrient? They’re the three categories of nutrients you eat the most and provide you with most of your energy: protein, carbohydrates and fats. So when you’re counting your macros, you’re counting the grams of proteins, carbs or fat that you’re consuming."
            <br></br>
            <em>- SLCHealth.org</em>
          </p>
          <li><strong>What is my target heart rate zone?</strong></li>
          <p>
            "Your target heart rate zone for anti-aging purposes should be between 60% (during the start of the exercise) and 80% (at the peak of the exercise) of your maximum heart rate (which is calculated as 220 minus your age)."
            <br></br>
            -  <a href="https://www.drlamcoaching.com/blog/exercise-faq/"><em>drlamcoaching.com/blog/exercise</em></a>
          </p>
          <li><strong>What are some benefits to weight training?</strong></li>
          <p className="whiteText">
            1. It will increase your muscle and muscle burns more calories than fat.<br></br>
            2.Resistance exercise, such as "free weights, weight training machines or exercise bands" can effect bone mass, which can help prevent <a href="https://osteoporosis.ca/">osteoporosis.</a><br></br>
            3. More energy and strength to get you through everyday life.
          </p>
          <li><strong>Why should I be interested in Bodybuilding?</strong></li>
          <ol>
            <li>Improve bodily health:</li>
            <p className="smallFont">Weight training and aerobic exercise can help reduce and control high blood pressure, obesity and high cholesterol.
              Bodybuilding keeps your body and muscle strong and flexible, helping bolster defenses for osteoporosis and arthritis.
            </p>
            <li>Improve mental health:</li>
            <p className="smallFont  whiteText">
              Bodybuilding exercises can help you sleep better, reduce fatigue and psychological tension. It can also help with the release of endorphin. Endorphin is a brain chemical which influences mood.
              Weight training and physical exercise can help in rising of self-esteem and confidence.
            </p>
            <li>Stress / Anxiety:</li>
            <p className="smallFont">
              Bodybuilding exercise can help with reduction in stress, anxiety and depression. Exercise  gets the blood flowing and your brain needs a lot of blood to function correctly. Having a healthy blood flow can keep your brain and mind functioning properly.
              Physical activity can treat depression naturally. Bodybuilding, weight training and aerobic exercise increase self-esteem, improve your health and body, lift your mood, reduce stress and frustration, improve your sleeping patterns, distract your mind from worries and difficult life events and situations, help you gain control of your life, body and mind.
            </p>
            <p>
              -  <a href="https://www.bodybuilding.com/fun/what_is_bodybuilding.htm">Bodybuilding.com</a>
              <br />
              <br></br>
              <li><strong>What does the Pricing Structure Look Like?</strong></li>
              <p className="whiteText">
                An hourly rate of $60 will give you access to all the services listed above.
              </p>
            </p>
          </ol>
        </ul>
      </Content >

    </div >
  );
}

export default ServicesPage;