import React from 'react';
import styles from '../page.module.css';
import Navbar from '../components/Navbar';

const about = () => {
  return (
    <div className={styles.about}>
      <Navbar />
      <p>About ember</p>
    </div>
  );
};

export default about;
