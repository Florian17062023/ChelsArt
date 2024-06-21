import React from 'react';
import Link from 'next/link';
import styles from '../styles/iconBar.module.css';

const IconBar = ({ onSearchClick }) => {
  return (
    <div className={styles.iconBar}>
      <div onClick={onSearchClick} className={styles.icon}>
        <img src="/search.png" alt="Search" />
      </div>
      <div className={styles.icon}>
        <Link href="/login">
          <img src="/user.png" alt="User" />
        </Link>
      </div>
      <div className={styles.icon}>
        <Link href="/cart">
          <img src="/panier.png" alt="Cart" />
        </Link>
      </div>
    </div>
  );
};

export default IconBar;
