//import React from 'react';
import "./portfolio.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/19960599/pexels-photo-19960599/free-photo-of-a-view-of-the-ocean-from-above-with-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/19960599/pexels-photo-19960599/free-photo-of-a-view-of-the-ocean-from-above-with-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/19960599/pexels-photo-19960599/free-photo-of-a-view-of-the-ocean-from-above-with-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;
