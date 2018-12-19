import React from "react";
import { withLayout } from "../../components/AppLayout";
import { getPopularMovies } from "../../api/apiClient";
import MovieGrid from "./components/MovieGrid";
import MovieItem from "./components/MovieItem";

import "./BrowsePage.css";

class BrowsePage extends React.Component {
  state = {
    results: []
  };
  async componentDidMount() {
    const response = await getPopularMovies();

    this.setState({
      ...response
    });
  }

  renderMovieItems = movies => {
    if (movies.length) {
      return movies.map(movie => {
        return <MovieItem key={movie.id} size={"w185"} movie={movie} />;
      });
    }

    return null;
  };

  render() {
    return (
      <div>
        <MovieGrid>{this.renderMovieItems(this.state.results)}</MovieGrid>
      </div>
    );
  }
}

export default withLayout({
  title: "Pop Movie"
})(BrowsePage);
