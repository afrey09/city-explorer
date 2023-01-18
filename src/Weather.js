import React from "react";
import Card from "react-bootstrap/Card";

class Weather extends React.Component {
  render() {
    return (
      <>
        <h1>Location Weather </h1>
        
        {this.props.weatherData.map((e) => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Date: {e.date}</Card.Title>
                <Card.Text>Description {e.description}:</Card.Text>
              </Card.Body>
            </Card>
          )
          })}     
        </> 
    )
  };
}

export default Weather;
