import React from 'react';
import CardInfo from '../components/CardInfo';

function Card(props) {

  return (
    <div className="" style={{ display: "inline-block", width: "27%", margin: "10px 0px" }} onClick={(e) => props.click(props.item)}>
      <img className="cardimg" src={props.item.imgSrc} alt={props.item.imgSrc} />
      <div className="test">
        {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
      </div>
    </div>

  );
}

export default Card;