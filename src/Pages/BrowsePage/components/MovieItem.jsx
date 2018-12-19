import React from "react";
import propTypes from "prop-types";

import { Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { getPosterUrl } from "../../../api/helpers";

function MovieItem(props) {
  const { movie, size } = props;
  const imgSrc = getPosterUrl(movie, size);
  return (
    <Grid.Column className="movie-item">
      <Link
        to={{
          pathname: "/movie-detail/" + movie.id
        }}
      >
        <Image src={imgSrc} centered fluid />
      </Link>
    </Grid.Column>
  );
}

MovieItem.propTypes = {
  movie: propTypes.any.isRequired, // define proper schema for movie
  size: propTypes.oneOf([
    "w92",
    "w154",
    "w185",
    "w342",
    "w500",
    "w780",
    "original"
  ])
};

export default MovieItem;
