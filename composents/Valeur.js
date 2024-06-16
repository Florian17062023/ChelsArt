import React from 'react';
import { CCard, CCardBody, CCardTitle, CCardText } from "@coreui/react";
import styles from "../styles/valeur.module.css";

const Valeurs = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.valeursTitle}>Mes valeurs</h2>
      <div className={styles.row}>
        <div className={styles.col}>
          <CCard className={styles.card}>
            <CCardBody className={styles.cardBody}>
              <CCardTitle className={styles.cardTitle}>
                L'art du fait main 🤲🧵
              </CCardTitle>
              <CCardText className={styles.cardText}>
                Les produits en crochet sont le reflet de ma passion pour l'artisanat, de notre recherche de qualité avec nos laines et de notre engagement envers la durabilité ♻️
              </CCardText>
            </CCardBody>
          </CCard>
        </div>
        <div className={styles.col}>
          <CCard className={styles.card}>
            <CCardBody className={styles.cardBody}>
              <CCardTitle className={styles.cardTitle}>
                Créativité 🌱
              </CCardTitle>
              <CCardText className={styles.cardText}>
                ChelsArts valorise la créativité dans la conception de produits uniques et originaux. Chaque achat chez ChelsArt vous apportera un produit unique fait main 🤲
              </CCardText>
            </CCardBody>
          </CCard>
        </div>
        <div className={styles.col}>
          <CCard className={styles.card}>
            <CCardBody className={styles.cardBody}>
              <CCardTitle className={styles.cardTitle}>
                La passion ❤️
              </CCardTitle>
              <CCardText className={styles.cardText}>
                Chez ChelsArt, je souhaite aussi partager ma passion et mon savoir-faire avec vous. L'éducation est au cœur de ma démarche à travers mes vidéos sur les réseaux.
              </CCardText>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  );
};

export default Valeurs;
