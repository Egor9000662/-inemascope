/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getTopMovies250 } from "../../redux/modules/films";
import styles from "../../styles/homePage.module.scss";
import FilmItem from "../../components/common/FilmsItem";
import Spinner from "../common/Spinner";

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

  return (
    <div className={styles.container_content}>
      {!loading ? (
        array.map((item) => {
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
  films: films.top250.items,
  allItemsLoaded: films.top250.allItemsLoaded,
  loading: films.isFetching,
});
export default connect(mapStateToProps, { getTopMovies250 })(HomePage);
