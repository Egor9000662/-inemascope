/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/homePage.module.scss";
import FilmItem from "../common/FilmsItem";
import { connect } from "react-redux";
import { searchFilms } from "../../redux/modules/films";
import Spinner from "../common/Spinner";

function SearchPage(props) {
  const {
    match: {
      params: { phrase },
    },
    films,
    loading,
    searchFilms,
  } = props;

  useEffect(() => {
    searchFilms(phrase);
  }, [searchFilms, phrase]);

  return (
    <div className={styles.container_content}>
      {!loading ? (
        films.map((item) => {
          return (
            <Link to={`/films/${item.id}`} key={item.id}>
              <FilmItem image={item.image} />
            </Link>
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
}
export default connect(
  ({ films }) => ({ films: films.foundFilms, loading: films.isFetching }),
  {
    searchFilms,
  }
)(SearchPage);
