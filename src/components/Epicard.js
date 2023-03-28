import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDetails from "./CardDetails";

// const Card = ({ results }) => {


function epiCards({ results }) {
  console.log('bla bla bl abla#', results);

  return (
  
        <div>
      <Card style={{ width: '18rem' }}>

          
      <Card.Body>
        <Card.Title>{`${results.title}`}</Card.Title>
          <Card.Text>
            {`Writers: ${results.writers}`}
            {`Air Date: ${results.originalAirDate}`}
            {`Description: ${results.originalAirDate}`}
            {`Number: ${results.number}`}
        </Card.Text>
     
      </Card.Body>
      </Card>

    </div>
  );
}

export default epiCards;