import React from "react";
import { Card, Col } from "react-bootstrap";

const PokeCard = ({ name, id }) => {
  return (
    <Col sm="3" key={id}>
      <Card style={{ marginTop: 20 }}>
        <Card.Body>
          <Card.Img
            width={160}
            height={160}
            className="img-fluid"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          />
          <hr />
          <Card.Title className="text-center font-weight-bold">{name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PokeCard;
