import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import HomePage from "./components/pages/home.page";
import MostPopularMovies from "./components/pages/MostPopularMovies";
import MostPopularTVs from "./components/pages/MostPopularTVs";
import NewMoviesComingSoon from "./components/pages/NewMoviesComingSoon";
import NewMoviesInTheaters from "./components/pages/NewMoviesInTheaters";
import Top250TVs from "./components/pages/Top250TVs";
import FilmPage from "./components/pages/FilmPage";
import InputSerch from "./components/common/InputSearch";
import SearchPage from "./components/pages/SearchPage";

import styles from "./styles/app.module.scss";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const clickMenu = () => {
    setOpenMenu(!openMenu);
  };
  const customHistory = createBrowserHistory();

  return (
    <div className={styles.global_container} id="element">
      <Router history={customHistory}>
        <header className={styles.header}>
          <div className={styles.buttons}>
            <div className="btn_home">
              <NavLink to="/" className={styles.double_border_button}>
                Home
              </NavLink>
            </div>
            <div className="btn_menu" onClick={clickMenu}>
              <div className={styles.double_border_button}>Menu</div>
            </div>
            {openMenu && (
              <div className={styles.navigation}>
                <ul>
                  <li>
                    <NavLink
                      to="/MostPopularMovies"
                      activeClassName={styles.chosen}
                    >
                      Popular Movies
                    </NavLink>
                    <NavLink
                      to="/MostPopularTVs"
                      activeClassName={styles.chosen}
                    >
                      Popular TVs
                    </NavLink>
                    <NavLink
                      to="/NewMoviesComingSoon"
                      activeClassName={styles.chosen}
                    >
                      Upcoming movies
                    </NavLink>
                    <NavLink
                      to="/NewMoviesInTheaters"
                      activeClassName={styles.chosen}
                    >
                      Movies In Theaters
                    </NavLink>
                    <NavLink to="/Top250TVs" activeClassName={styles.chosen}>
                      Top 250 TVs
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <div className={styles.search}>
          <InputSerch />
        </div>

        <div className={styles.container_content}>
          <section className={styles.section}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/MostPopularTVs" component={MostPopularTVs} />
              <Route
                exact
                path="/NewMoviesComingSoon"
                component={NewMoviesComingSoon}
              />
              <Route
                exact
                path="/NewMoviesInTheaters"
                component={NewMoviesInTheaters}
              />
              <Route exact path="/Top250TVs" component={Top250TVs} />

              <Route
                exact
                path="/MostPopularMovies"
                component={MostPopularMovies}
              />
              <Route exact path="/search/:phrase" component={SearchPage} />
              <Route path="/films/:filmId" component={FilmPage} />
            </Switch>
          </section>
        </div>
      </Router>
    </div>
  );
}
export default App;
