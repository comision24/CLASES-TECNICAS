import React from "react";
import PropTypes from 'prop-types'
import Card from "./Card";

export const ContainerCards = ({ items }) => {
  return (
    <div className="container my-4">
      <div className="row gap-2">
        {items.map((item, i) => {
          return <Card key={i} {...item} />;
        })}
      </div>
    </div>
  );
};

Card.propTypes = {
  items: PropTypes.array,
}

Card.defaultProps = {
  items: []
}

export default ContainerCards;
