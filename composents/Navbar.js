
import React from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}><Link href="/">Home</Link></li>
        <li className={styles.li}><Link href="/projets">Projets</Link></li>
        <li className={styles.li}><Link href="/about">A propos de moi</Link></li>
        <li className={styles.li}><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;