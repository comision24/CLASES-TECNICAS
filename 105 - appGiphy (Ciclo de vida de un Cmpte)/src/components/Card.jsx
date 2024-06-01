import React, { Component } from "react";

export class Card extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="card col-4" style={{width: "18rem"}}>
        <img src={this.props.gif} className="card-img-top" alt="..." style={{height:"150px",objectFit:"contain"}} />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
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
}

export default Card;
