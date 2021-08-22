/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { newMoviesInTheaters } from "../redux/modules/films";
import styles from "../styles/homePage.module.scss";
import FilmItem from "../components/FilmsItem";
import Spinner from "../components/Spinner";

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

  return (
    <div className={styles.container_content}>
      {!loading ? (
        films.map((item) => {
          return (
            <Link to={`/films/${item.id}`} key={item.id}>
              <FilmItem
                fullTitle={item.fullTitle}
                imDbRating={item.imDbRating}
                image={item.image}
                crew={item.crew}
                title={item.title}
                s
              />
            </Link>
          );
        })
      ) : (
        <div className={styles.box_spinner}>
          <Spinner />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = ({ films }) => ({
  films: films.newInTheaters.items,
  allItemsLoaded: films.newInTheaters.allItemsLoaded,
  loading: films.isFetching,
});
export default connect(mapStateToProps, { newMoviesInTheaters })(NewInTheaters);
