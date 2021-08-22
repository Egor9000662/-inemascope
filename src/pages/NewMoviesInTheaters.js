/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React, { useEffect } from "react";

import { connect } from "react-redux";
import { newMoviesInTheaters } from "../redux/modules/films";

import Films from "../components/films";

function NewInTheaters({
  films,
  newMoviesInTheaters,
  allItemsLoaded,
  loading,
}) {
  useEffect(() => {
    if (!allItemsLoaded) {
      newMoviesInTheaters();
    }
  }, [allItemsLoaded, newMoviesInTheaters]);

  return <Films array={films} loading={loading} />;
}

const mapStateToProps = ({ films }) => ({
  films: films.newInTheaters.items,
  allItemsLoaded: films.newInTheaters.allItemsLoaded,
  loading: films.isFetching,
});
export default connect(mapStateToProps, { newMoviesInTheaters })(NewInTheaters);
