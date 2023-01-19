import React from "react";
import Card from "react-bootstrap/Card";

class Movie extends React.Component {
  render() {
    return (

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Title: {this.props.title}</Card.Title>
          <Card.Text>Description: {this.props.overview}:</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}  

export default Movie;