import React, { useEffect } from "react";
import PropTypes from 'prop-types'

export const Card = ({title, gif}) => {

  useEffect(() => {

    return () => {
      console.log("Se desmonto la tarjeta");
    }

  }, [])

  return (
    <div className="card col-4" style={{width: "18rem"}}>
      <img src={gif} className="card-img-top" alt="..." style={{height:"150px",objectFit:"contain"}} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );

}

Card.propTypes = {
  gif: PropTypes.string,
  title: PropTypes.string,
}

Card.defaultProps = {
  gif: "",
  title: "",
}

export default Card;
