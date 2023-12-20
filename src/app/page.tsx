import React from 'react';
import styles from './page.module.css';
import Functionrow from './components/functionrow';
import Navbar from './components/Navbar';

//home page
const home = () => {
  return (
    <>
      <Navbar />
      <div
        className={`${styles.fullWidthContainer} relative z-0`}
        style={{ margin: '10px' }}
      >
        <Functionrow />
      </div>
    </>
  );
};

export default home;
