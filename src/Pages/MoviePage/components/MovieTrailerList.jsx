import React from "react";
import propTypes from "prop-types";
import { Item, Icon } from "semantic-ui-react";

function MovieTrailerList(props) {
  return (
    <Item.Group
      divided
      items={props.trailers.map(trailer => {
        return {
          childKey: trailer.key,
          content: (
            <div>
              <Icon name="play" /> {trailer.name}
            </div>
          )
        };
      })}
    />
  );
}

MovieTrailerList.propTypes = {
  trailers: propTypes.any.isRequired
};
export default MovieTrailerList;
