import React from 'react';
import Hero from '../Hero';
import Content from '../Content';
import Maddie04 from '../../IMG/Maddie04.jpg';
import VeganIcon from '../../IMG/VeganIcon.jpg';

function AboutPage(props) {
  return (
    <div>
      <Content>
        <Hero title={props.title} text={props.text} />

        <p className="aboutPageText">
          {/* <h2 id="inLine"><bold>Im Maddie McConnell</bold></h2><br></br><br></br> */}
          &nbsp;&nbsp;&nbsp;&nbsp;As the owner of Vitality Fitness, Maddie's passions lie in helping others develop the skills necessary to live as the healthiest renditions of themselves. Exerting control over their fitness and weight, her goal is to transform each client into a state of confidence; in their own abilites, and to leverage the feedback and insight provided.</p>
        <p className="aboutPageText">Through a combination of nutrition and exercise, Maddie's objective is to offer encouragement and accountability to each client, empowering them with the knowledge to revolutionize their lives.</p>
        <br></br>
        <p><span className="greenBackground">In 2019, Maddie decided to take a stand for her health and the environment, as she swapped out her carnivorous life for #PlantPower. Flooded with energy and saving the environment one meal at a time, Maddie has found success as a vegan athlete, and is living testimony that one can be powered by plants and still achieve the results they work for.</span>
          <br></br><br></br>Since 2020, Maddie has found a passion in bodybuilding. Participating in her first semi-pro event, Maddie took 1st in both: Bodybuilding and Fit Body. She found continued success, as her hard work paid off in her second competition, taking 1st in both: Women's Bodybuilding and Open Figure, while placing 2nd in Fit Body. <br></br><br></br><strong>Maddie continues her strive for excellence and success in bodybuilding, and brings that same level of focus and intensity to each of her training sessions. </strong></p>
        <h3 id="plantPower"><span className="greenFont">#</span>PoweredBy<span className="greenFont">Plants</span><img src={VeganIcon} width="50px" height="50px" alt="vegan icon"></img>
        </h3>

        <div className="aboutBody">
          <br></br>
          <h3>Qualifications:</h3>
          <br></br>
          <ul>
            <li>Masters in Physical Education</li>
            <li>Bodyweight HIIT Specialist</li>
            <li>Wellness Enthusiast</li>
            <li>Competitive INBF Fitbody Athlete</li>
            <li>Female Bodybuilding Athlete</li>
          </ul>
          <br></br>
        </div>
        <br></br><br></br>
        <p><strong><em>
          "If I can empower my clients to where they feel confident in their abilities, comfortable in their own skin, and effective leveraging their own knowledge, I've done my job"</em></strong>
          <p><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="greenFont">- Maddie McConnell</span></p>
        </p>
        <br></br>
        <img src={Maddie04} alt="fit girl"></img>

        <br></br>
        <br></br>
        {/* <h3><bold>What You Can Expect:</bold></h3>
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
        </ul> */}
      </Content>

    </div >
  );
}

export default AboutPage;

