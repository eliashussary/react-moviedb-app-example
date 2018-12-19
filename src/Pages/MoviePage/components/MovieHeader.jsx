import React from "react";
import propTypes from "prop-types";
import { Menu, Header } from "semantic-ui-react";

function MovieHeader(props) {
  return (
    <Menu color={"teal"} inverted borderless>
      <Menu.Item heading='true'>
        <Header as="h2" inverted>
          <Header.Content>{props.title}</Header.Content>
        </Header>
      </Menu.Item>
    </Menu>
  );
}

MovieHeader.propTypes = {
  title: propTypes.string.isRequired
};

export default MovieHeader;
