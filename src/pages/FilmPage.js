/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFilm, resetSelectedFilm } from "../redux/modules/films";
import SimilarItem from "../components/SimilarItem";
import styles from "../styles/filmPage.module.scss";
import Spinner from "../components/Spinner";

function FilmPage(props) {
  const {
    match: {
      params: { filmId },
    },
    film,
    loading,
    getFilm,
    resetSelectedFilm,
  } = props;

  useEffect(() => {
    getFilm(filmId);
  }, [filmId, getFilm]);

  useEffect(() => {
    return () => {
      resetSelectedFilm();
    };
  }, [resetSelectedFilm]);

  return (
    <div className={styles.container}>
      {!loading && film ? (
        <>
          <div className={styles.container_post}>
            <div className={styles.box_post}>
              <img src={film.image} alt="error" />
            </div>
            <div className={styles.container_content}>
              <div className={styles.fullTitle}>{film.fullTitle}</div>
              <div className={styles.box_hr}>
                <hr className={styles.hr} />
              </div>
              <table className={styles.box_table}>
                <tr className={styles.th}>
                  <td className={styles.td}>Creators</td>
                </tr>
                <tr className={styles.th}>
                  <td className={styles.td}>Director</td>
                  <td className={styles.td}>{film.directors}</td>
                </tr>
                <tr className={styles.th}>
                  <td className={styles.td}>Writer</td>
                  <td className={styles.td}>{film.writers}</td>
                </tr>

                <tr className={styles.th}>
                  <td className={styles.td}>Informations</td>
                </tr>
                <tr className={styles.th}>
                  <td className={styles.td}>Release Date</td>
                  <td className={styles.td}>{film.releaseDate}</td>
                </tr>
                <tr className={styles.th}>
                  <td className={styles.td}>Runtime</td>
                  <td className={styles.td}>{film.runtimeStr}</td>
                </tr>
                <tr className={styles.th}>
                  <td className={styles.td}>Genre</td>
                  <td className={styles.td}>{film.genres}</td>
                </tr>
                <tr className={styles.th}>
                  <td className={styles.td}>Rating</td>
                  <td className={styles.td}>{film.imDbRating}</td>
                </tr>
                <tr className={styles.th}>
                  <td className={styles.td}>Awards</td>
                  <td className={styles.td}>{film.awards}</td>
                </tr>
                <tr className={styles.th}>
                  <td className={styles.td}>Country</td>
                  <td className={styles.td}>{film.countries}</td>
                </tr>
                <tr className={styles.th}>
                  <td className={styles.td}>Language</td>
                  <td className={styles.td}>{film.languages}</td>
                </tr>
              </table>
              <div className={styles.box_hr}>
                <hr className={styles.hr} />
              </div>
            </div>
          </div>
          <div className={styles.similar_title}>similars</div>
          <div className={styles.similar_box}>
            {film.similars.map((item) => {
              return (
                <SimilarItem
                  key={item.id}
                  image={item.image}
                  fullTitle={item.fullTitle}
                  stars={item.stars}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className={styles.box_spinner}>
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default connect(
  ({ films }) => ({ film: films.selectedFilm, loading: films.isFetching }),
  {
    getFilm,
    resetSelectedFilm,
  }
)(FilmPage);
