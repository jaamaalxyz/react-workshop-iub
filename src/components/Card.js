import React from 'react';
import styles from '../utils/styles';

export const Card = props => {
  return (
    <div style={styles.column}>
      <div style={styles.card}>
        <img alt="avatar" style={styles.cardImg} src={props.avatar_url} />
        <div style={styles.cardContainer}>
          <h2 style={styles.cardUserName}>{props.name}</h2>
          <p style={styles.cardTitle}>{props.bio}</p>
          <p>{props.blog}</p>
          <p><button style={styles.cardButton}>Contact</button></p>
        </div>
      </div>
    </div>
  );
};

export default Card;