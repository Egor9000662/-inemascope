/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getComingSoon } from "../../redux/modules/films";
import styles from "../../styles/homePage.module.scss";
import FilmItem from "../../components/common/FilmsItem";
import Spinner from "../common/Spinner";

function NewComingSoon({ films, getComingSoon, allItemsLoaded, loading }) {
  useEffect(() => {
    if (!allItemsLoaded) {
      getComingSoon();
    }
  }, [allItemsLoaded, getComingSoon]);

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
  films: films.comingSoon.items,
  allItemsLoaded: films.comingSoon.allItemsLoaded,
  loading: films.isFetching,
});
export default connect(mapStateToProps, { getComingSoon })(NewComingSoon);
