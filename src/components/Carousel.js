import React from 'react';
import Maddie001 from '../IMG/Maddie001.png';
import Maddie002 from '../IMG/Maddie002.jpeg';
import Maddie003 from '../IMG/Maddie003.JPG';
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
          imgSrc: Maddie001,
          link: 'https://www.instagram.com/maddie_vitalityfitness/',
          selected: false
        },
        {
          id: 1,
          title: 'Genuine Fitness',
          subTitle: 'Private Personal Training',
          imgSrc: Maddie002,
          link: 'https://genuinefitnesstraining.com/',
          selected: false
        },
        {
          id: 2,
          title: 'Facebook',
          subTitle: 'Maddie\'s Profile',
          imgSrc: Maddie003,
          link: 'https://www.facebook.com/maddie.kiplinger',
          selected: false
        },
      ]
    }
  }
  handleCardClick = (id, card) => {
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
      return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
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
