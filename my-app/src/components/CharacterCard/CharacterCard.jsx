import React from "react";

import styles from "./CharacterCard.module.css";

export const CharacterCard = ({ image, name }) => {
  return (
    <figure className={styles.CharacterCard}>
      <p className={styles.ImgContainer}>
        <img src={image} alt={name} className={styles.CharacterImg} />
      </p>
      <figcaption className={styles.CharactersName}>{name}</figcaption>
    </figure>
  );
};
