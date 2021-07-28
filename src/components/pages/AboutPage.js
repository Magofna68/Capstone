import React from 'react';
import Hero from '../Hero';
import Content from '../Content';
import Maddie04 from '../../IMG/Maddie04.jpg';
// import Maddie05 from '../../IMG/Maddie05.jpg';

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          {/* <h2 id="inLine"><bold>Im Maddie McConnell</bold></h2><br></br><br></br> */}
          As the owner of Vitality Fitness, Maddie's passions lie in helping others develop the skills necessary to live as the healthiest renditions of themselves, exerting control over their fitness and weight. Her goal is to transverse each client to a state of confidence; in their own abilites, and to leverage her insight and feedback.</p>
        <p>Through a combination of nutrition and exercise, Maddie's objective is to offer encouragement and accountability to each client, providing them with the education necessary to revolutionize their lives.</p>
        <br></br>
        <h3>Qualifications:</h3>
        <ul>
          <li>Masters in Physical Education</li>
          <li>Bodyweight HIIT Specialist</li>
          <li>Wellness Enthusiast</li>
          <li>Competitive INBF Fitbody athlete</li>
          <li>Female Bodybuilding Athlete</li>
        </ul>
        <br></br>

        <p><strong><em>
          "If I can empower my clients to where they feel confident in their abilities, comfortable in their own skin, and effective leveraging their own knowledge, I've done my job"</em></strong>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Maddie McConnell</p>
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

