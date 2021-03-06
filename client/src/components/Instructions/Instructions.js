import React, {useState} from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import './style.css'

/* Instructions show up on the home page telling the user how to use the site. 
Uses react-bootstrap accordion to make instructions hideable. */

function Instructions() {

    const [ isClicked, setIsClicked ] = useState(false)

  return (
      <Accordion className="w-100 text-center" defaultActiveKey="0">
        <Card className="bg-dark text-light">
          <Accordion.Collapse eventKey="0">
            <Card.Body className="w-100 h5 col-10 offset-1 col-md-8 offset-md-2">Select one or more of the categories below and click Create My Workout! 
            You will need a suspension trainer and a pull-up bar.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="bg-dark text-light accordionButton">
            <Accordion.Toggle as={Button} className="m-0 p-0" onClick={() => setIsClicked(!isClicked)} variant="link" eventKey="0">
              {isClicked ? <img className="arrowImg m-0" alt="Down arrow" src="/down-arrow.png" /> : <img className="arrowImg m-0" alt= "Up arrow" src="/up-arrow.png" />}
            </Accordion.Toggle>
        </Card>
      </Accordion>
  );
}

export default Instructions;
