import React from "react";
import Card from "react-bootstrap/Card";


class Movies extends React.Component {
  render() {
    return (
      <>
        <h1>Movies</h1>
        
        {this.props.moviesData.map((movie) => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Title: {movie.title}</Card.Title>
                <Card.Text>Description: {movie.overview}:</Card.Text>
              </Card.Body>
            </Card>
          )
          })}     
        </> 
    )
  };
}

export default Movies;