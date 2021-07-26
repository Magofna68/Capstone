import React from 'react';
import Hero from '../Hero';
import Content from '../Content';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <h2><bold>I'm Maddie McConnell</bold></h2>
        <p>
          My passion is helping others develop the skills necessary to live healthy lives through nutrition and exercise.  My main goal with all of my clients is to provide them with the education necessary to eventually leave my services feeling confident in their ability to effectively exercise on their own and have control over their weight.
        </p>
        <p>
        </p>
        <h3><bold>Your $60 hourly rate is paying for:</bold></h3>
        <ul>
          <li>Customized training programs specifically based on your goals, preferences, equipment access, and physical limitations.</li>
          <li>Instruction and guidance on proper lifting form with continuous feedback</li>
          <li>Guidance with how to select exercises, weights, and rest periods based on your goals.</li>
          <li>Nutritional Guidance with the option for instruction on how to track your macros.  Tracking Macros will allow you to dial in your nutrition based on your specific needs - it is not a diet, it is a way to track your food consumption and learn exactly how much food your body needs based on your goals.</li>
          <li>Body composition measurements - skin caliper, tape measure, and scale weight are used to track progress.  Nutritional feedback is given based on biweekly measurement results.</li>
          <li>Me as your resource! You may text of call me with any questions that arise regarding nutrition or exercise.</li>
        </ul>
        </p>
      <h4>Lorem ipsum:</h4>
      <p>
        Aenean sed adipiscing diam donec adipiscing. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Pellentesque pulvinar pellentesque habitant morbi. Urna cursus eget nunc scelerisque viverra mauris in. Mi proin sed libero enim sed faucibus turpis. Dignissim sodales ut eu sem integer. A arcu cursus vitae congue mauris rhoncus aenean. Tellus in metus vulputate eu. Netus et malesuada fames ac turpis. Eleifend mi in nulla posuere sollicitudin aliquam. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Elementum curabitur vitae nunc sed velit dignissim sodales. Donec ac odio tempor orci dapibus ultrices. Scelerisque mauris pellentesque pulvinar pellentesque. Dignissim enim sit amet venenatis urna. Ac ut consequat semper viverra nam libero justo. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Duis ultricies lacus sed turpis tincidunt id.
      </p>
      <p>
        Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Scelerisque fermentum dui faucibus in. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Interdum varius sit amet mattis vulputate enim. Volutpat odio facilisis mauris sit amet massa vitae. Quam quisque id diam vel. Massa vitae tortor condimentum lacinia. Pulvinar elementum integer enim neque volutpat ac. Purus in mollis nunc sed id semper risus in. Molestie at elementum eu facilisis sed odio morbi quis commodo. Risus in hendrerit gravida rutrum quisque non tellus orci. Felis bibendum ut tristique et. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. In hendrerit gravida rutrum quisque. Venenatis cras sed felis eget velit aliquet sagittis id. Bibendum est ultricies integer quis auctor. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Cursus in hac habitasse platea dictumst. In hac habitasse platea dictumst quisque sagittis purus sit.
      </p>
      </Content>

    </div >
  );
}

export default AboutPage;