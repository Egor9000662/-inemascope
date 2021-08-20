/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMostPopularTVs } from "../../redux/modules/films";
import styles from "../../styles/homePage.module.scss";
import FilmItem from "../../components/common/FilmsItem";
import Spinner from "../common/Spinner";

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

  return (
    <div className={styles.container_content}>
      {!loading ? (
        films.slice(0, countFilms).map((item) => {
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
  films: films.mostPopularTVs.items,
  allItemsLoaded: films.mostPopularTVs.allItemsLoaded,
  loading: films.isFetching,
});

export default connect(mapStateToProps, { getMostPopularTVs })(MostPopularTVS);
