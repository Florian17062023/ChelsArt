import React from 'react';
import Header from '../composents/Header';
import Navbar from '../composents/Navbar';
import IconBar from '../composents/Icon';
import Footer from '../composents/Footer';
import styles from '../styles/layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className="container-flex">
      <Header />
      <div className={styles.navbarContainer}>
        <Navbar />
        <IconBar />
      </div>
      <div className="content-container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;