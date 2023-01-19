import React from "react";
import Movie from "./Movie";



class Movies extends React.Component {
  render() {
    return (
      <>
        {this.props.movieData.map((movie, idx) => {
          return (
            <Movie key={idx} title={movie.title} overview={movie.overview} />

          )
        }
      )
    }
      </>
    )
  };
}

export default Movies;