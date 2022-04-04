import React from "react";
import { Card, CardGroup } from 'react-bootstrap';
import python from "../assets/python.png"
import js from "../assets/js.png"
import css from "../assets/css.png"
export const Cards = () => {
  

  return (
    <CardGroup>
    <Card>
      <Card.Img variant="top" class="" src={python} />
      <Card.Body>
        <Card.Title>Python
        </Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={css} />
      <Card.Body>
        <Card.Title>Css</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={js} />
      <Card.Body>
        <Card.Title>Javascript</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  </CardGroup>
  
  );
};

