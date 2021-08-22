import React from "react";
import styles from "../../styles/homePage.module.scss";
import FilmItem from "../FilmsItem";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";

function Films({ array, loading }) {
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
export default Films;
