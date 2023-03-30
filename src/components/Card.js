import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


// const Card = ({ results }) => {


function Cards({results}) {
  return (
  <div className="cardcontainer">
        <Link
          style={{ textDecoration: "none" }}
          to={`/details/${results.id}`}
          key={results.id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
      >
        
         <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={results.images.main} />
        <Card.Body>
        <Card.Title>{`${results.name.first} ${results.name.middle} ${results.name.last}`}</Card.Title>
        <Card.Text>
        {results.sayings[0]}
        </Card.Text>
     
      </Card.Body>
      </Card>
      </Link>
      </div>
  );
}

export default Cards;