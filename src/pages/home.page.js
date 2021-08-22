/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTopMovies250 } from "../redux/modules/films";

import Films from "../components/films";

function HomePage({ films, loading, allItemsLoaded, getTopMovies250 }) {
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

  const array = films.slice(0, countFilms);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  useEffect(() => {
    if (!allItemsLoaded) {
      getTopMovies250();
    }
  }, [allItemsLoaded, getTopMovies250]);

  return <Films array={array} loading={loading} />;
}

const mapStateToProps = ({ films }) => ({
  films: films.top250.items,
  allItemsLoaded: films.top250.allItemsLoaded,
  loading: films.isFetching,
});
export default connect(mapStateToProps, { getTopMovies250 })(HomePage);
