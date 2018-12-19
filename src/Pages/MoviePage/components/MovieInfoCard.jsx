import React from "react";
import propTypes from "prop-types";
import { Grid, Image, Header, Button } from "semantic-ui-react";
import { getPosterUrl } from "../../../api/helpers";

function MovieInfoCard(props) {
  const { movie, size } = props;
  const imgSrc = getPosterUrl(movie, size);
  return (
    <Grid>
      <Grid.Row columns="equal">
        <Grid.Column>
          <Image src={imgSrc} fluid />
        </Grid.Column>
        <Grid.Column>
          <Header as="h1">
            <Header.Content>
              {new Date(movie.release_date).getFullYear()}
            </Header.Content>
            <Header.Subheader>{movie.runtime + " min"}</Header.Subheader>
            <Header.Subheader>{movie.vote_average + " / 10"}</Header.Subheader>
          </Header>
          <Button
            content="Add to Favourite"
            labelPosition='left'
            icon="heart"
            color="teal"
            size="small"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns="equal">
        <Grid.Column>
          <p>{movie.overview}</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

MovieInfoCard.propTypes = {
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

export default MovieInfoCard;
