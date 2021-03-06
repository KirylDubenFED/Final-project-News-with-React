import React from "react";
import styles from "./NewsFooter.module.scss";

const NewsFooter = ({ author, category, releaseDate, url }) => {
  return (
    <div className={styles.container}>
      <span className={styles.element}>Автор: {author}</span>
      <span className={styles.element}>Категория: {category}</span>
      <time className={styles.element}>Дата: {releaseDate}</time>
    </div>
  );
};

export default NewsFooter;
