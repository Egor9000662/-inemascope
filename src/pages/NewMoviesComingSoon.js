/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getComingSoon } from "../redux/modules/films";
import Films from "../components/films";

function NewComingSoon({ films, getComingSoon, allItemsLoaded, loading }) {
  useEffect(() => {
    if (!allItemsLoaded) {
      getComingSoon();
    }
  }, [allItemsLoaded, getComingSoon]);

  return <Films array={films} loading={loading} />;
}

const mapStateToProps = ({ films }) => ({
  films: films.comingSoon.items,
  allItemsLoaded: films.comingSoon.allItemsLoaded,
  loading: films.isFetching,
});
export default connect(mapStateToProps, { getComingSoon })(NewComingSoon);
