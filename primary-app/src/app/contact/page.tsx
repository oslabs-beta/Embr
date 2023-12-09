import React from 'react';
import styles from '../page.module.css';
import Navbar from '../components/Navbar';

const contact = () => {
  return (
    <div className={styles.contact}>
      <Navbar />
      <p>Contact Us</p>
    </div>
  );
};

export default contact;
