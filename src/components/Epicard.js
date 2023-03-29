import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDetails from "./CardDetails";

// const Card = ({ results }) => {


function epiCards({ results }) {


  return (
  
    <Link
      style={{ textDecoration: "none" }}
          // to={`/details/${results.id}`}
          key={results.id}
          className="position-relative text-dark"
          >
      <Card style={{ width: '18rem' }}>
       
      <Card.Body className="">
        <Card.Title>{`${results.title}`}</Card.Title>
          <Card.Subtitle>
            {`Writers: ${results.writers}`}                       
          </Card.Subtitle><br/>
           <Card.Text>
            {`Description: ${results.desc}`}                         
          </Card.Text>
           <Card.Header>
            {`Air Date: ${results.originalAirDate}`}
          </Card.Header>
           <Card.Footer>
            {`Number: ${results.number}`}
          </Card.Footer>
     
      </Card.Body>
      </Card>

    </Link>
  );
}

export default epiCards;