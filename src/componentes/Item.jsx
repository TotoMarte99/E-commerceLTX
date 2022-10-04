import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Item(prop) {
  return (
    <div className="bg-color text-center">
      <div className="container-watches">
        <Card className="cards">
          <Link to={`/item/${prop.id}`} className="navigation">
            <Card.Img className="img-class" variant="top" src={prop.src} />
          </Link>
          <Card.Body className="card-body">
            <Card.Title>{prop.Title}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Item;
