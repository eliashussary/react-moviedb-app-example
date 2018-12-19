import React from "react";
import { Grid } from "semantic-ui-react";

export default function MovieGrid(props) {
  return (
    <Grid columns={2} className="movie-grid">
      {props.children}
    </Grid>
  );
}
