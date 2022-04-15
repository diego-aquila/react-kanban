import "./Cards.css";
import { Fragment } from "react";

function Cards(props) {
  const { children, img, label } = props;

  return (
    <Fragment>
      <div className="container-cards">
        <p className="title-cards">{children}</p>
        <div className="container-cards-info">
          <img src={require(`./img/${img}.png`)} />
          <p className="label-cards label-cards__purple">{label}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Cards;
