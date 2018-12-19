import React from "react";

import { withLayout } from "../../components/AppLayout";
import { getSingleMovie, getSingleMovieVideos } from "../../api/apiClient";
import { Container } from "semantic-ui-react";
import MovieHeader from "./components/MovieHeader";
import MovieInfoCard from "./components/MovieInfoCard";
import MovieTrailerList from "./components/MovieTrailerList";

class MoviePage extends React.Component {
  state = {
    movie: {},
    isLoaded: false
  };
  async componentDidMount() {
    const id = this.props.match.params.id;
    const [movie, videos] = await Promise.all([
      getSingleMovie(id),
      getSingleMovieVideos(id)
    ]);
    this.setState({
      movie,
      videos,
      isLoaded: true
    });
  }

  render() {
    const { movie, videos, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <MovieHeader title={movie.original_title} />
        <Container fluid>
          <MovieInfoCard size={"w185"} movie={movie} />
          <MovieTrailerList trailers={videos.results} />
        </Container>
      </div>
    );
  }
}

export default withLayout({
  showBack: true,
  title: "Movie Detail"
})(MoviePage);
