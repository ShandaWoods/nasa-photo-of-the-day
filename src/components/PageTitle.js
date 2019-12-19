import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const PageTitle = (props) => {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">NASA Picture of the Day</h1>
            <p className="lead">"Change is the essential process of all existence." -- Spock</p>
          </Container>
        </Jumbotron>
      </div>
    );
  };
  
  export default PageTitle;