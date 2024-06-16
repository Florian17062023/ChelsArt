import React, { useState } from 'react';
import Projets from '../composents/Projets';
import SearchBar from '../composents/SearchBar';
import styles from '../styles/projetsPage.module.css';


const ProjetsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  


  return (
    <div className={styles.container}>
      <div className={styles.searchBarContainer}>
        <SearchBar onSearch={setSearchTerm} />
      </div>
      <div className={styles.projetsContainer}>
        <Projets searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default ProjetsPage;
