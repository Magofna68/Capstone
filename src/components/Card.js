import React from 'react';
import CardInfo from '../components/CardInfo';

function Card(props) {

  return (
    <div className="inline-block g-card">
      <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
      {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} />}
    </div>

  );
}
// onClick={(e) => props.click(props.item)}
export default Card;