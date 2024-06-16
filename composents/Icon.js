import React from 'react';
import Link from 'next/link';
import styles from '../styles/iconBar.module.css';

const IconBar = () => {
  return (
    <div className={styles.iconBar}>
      <Link href="/search">
        <img src="/search.png" alt="Search" className={styles.icon} />
      </Link>
      <Link href="/login">
        <img src="/user.png" alt="User" className={styles.icon} />
      </Link>
      <Link href="/cart">
        <img src="/panier.png" alt="Cart" className={styles.icon} />
      </Link>
    </div>
  );
};

export default IconBar;
