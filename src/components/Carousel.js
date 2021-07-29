import React from 'react';
import Maddie001 from '../IMG/Maddie001.png';
import Maddie002 from '../IMG/Maddie002.jpeg';
import Maddie07 from '../IMG/Maddie07.jpeg';
import Maddie06 from '../IMG/Maddie06.jpg';
import Card from '../components/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Instagram',
          subTitle: 'Pics, or it didn\'t happen',
          imgSrc: Maddie002,
          link: 'https://www.instagram.com/maddie_vitalityfitness/',
          selected: false
        },
        {
          id: 1,
          title: 'Virtual Tour',
          subTitle: 'Get a 3d View',
          imgSrc: Maddie07,
          link: 'https://tour-uswest.metareal.com/apps/player?asset=749b26c9-4fbc-4183-b6a8-ef47dc03d0d0&position=5.28x1.67y4.15z&rotation=3.67x491.69y0.00z',
          selected: false
        },
        {
          id: 2,
          title: 'Genuine Fitness',
          subTitle: 'Private Coaching & Personal Training',
          imgSrc: Maddie06,
          link: 'https://genuinefitnesstraining.com/',
          selected: false
        },
      ]
    }
  }
  handleCardClick = (id) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items
    });
  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }

  render() {
    return (
      <Container fluid={true}>
        <Row className="spaceAround">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
