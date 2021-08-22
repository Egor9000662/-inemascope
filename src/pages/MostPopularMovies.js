/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { getMostPopularMovies } from "../redux/modules/films";
import Films from "../components/films";

function MostPopularMovies({
  films,
  getMostPopularMovies,
  allItemsLoaded,
  loading,
}) {
  const [countFilms, setCountFilms] = useState(25);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      if (countFilms < films.length) {
        setCountFilms((old) => old + 25);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  useEffect(() => {
    if (!allItemsLoaded) {
      getMostPopularMovies();
    }
  }, [allItemsLoaded, getMostPopularMovies]);

  const array = films.slice(0, countFilms);

  return <Films array={array} loading={loading} />;
}
const mapStateToProps = ({ films }) => ({
  films: films.mostPopular.items,
  allItemsLoaded: films.mostPopular.allItemsLoaded,
  loading: films.isFetching,
});

export default connect(mapStateToProps, { getMostPopularMovies })(
  MostPopularMovies
);
