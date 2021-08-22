/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { getMostPopularTVs } from "../redux/modules/films";

import Films from "../components/films";

function MostPopularTVS({ films, getMostPopularTVs, allItemsLoaded, loading }) {
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
  console.log(getMostPopularTVs);
  useEffect(() => {
    if (!allItemsLoaded) {
      getMostPopularTVs();
    }
  }, [allItemsLoaded, getMostPopularTVs]);

  const array = films.slice(0, countFilms);

  return <Films array={array} loading={loading} />;
}
const mapStateToProps = ({ films }) => ({
  films: films.mostPopularTVs.items,
  allItemsLoaded: films.mostPopularTVs.allItemsLoaded,
  loading: films.isFetching,
});

export default connect(mapStateToProps, { getMostPopularTVs })(MostPopularTVS);
