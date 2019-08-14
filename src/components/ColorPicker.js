import React from 'react';
import styles from './ColorPicker.css';

function ColorPicker() {
  const redHandler = () => {
    /* eslint-disable no-console */
    console.log('red');
  };

  const yellowHandler = () => {
    console.log('yellow');
  };

  const blueHandler = () => {
    console.log('blue');
  };

  return (
    <section className={styles.ColorPicker}>
      <button className={styles.red} onClick={redHandler}>Red</button>
      <button className={styles.yellow} onClick={yellowHandler}>Yellow</button>
      <button className={styles.blue} onClick={blueHandler}>Blue</button>
    </section>
  );
}

export default ColorPicker;

