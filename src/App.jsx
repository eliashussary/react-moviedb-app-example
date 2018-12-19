import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BrowsePage from "./Pages/BrowsePage/BrowsePage";
import MoviePage from "./Pages/MoviePage/MoviePage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={BrowsePage} />
          <Route path="/movie-detail/:id" component={MoviePage} />
        </div>
      </Router>
    );
  }
}

export default App;
