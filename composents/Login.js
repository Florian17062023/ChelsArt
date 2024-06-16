import React from 'react';
import Link from 'next/link';
import { CRow, CCol, CFormInput, CButton, CContainer } from '@coreui/react';
import styles from '../styles/login.module.css';

const SignIn = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Connexion</h2>
      <CRow className="g-3">
        <CCol sm={12}>
          <CFormInput
            className={styles.input}
            placeholder="E-mail"
            aria-label="E-mail"
            prepend={<img src="/enveloppe.png" alt="Enveloppe" />}
          />
        </CCol>
        <CCol sm={12}>
          <CFormInput
            className={styles.input}
            type="password"
            placeholder="Mot de passe"
            aria-label="Mot de passe"
            prepend={<img src="/password.png" alt="Mot de passe" />}
          />
        </CCol>
      </CRow>
      <CButton className={styles.button} color="primary">
        Se connecter
      </CButton>
      <div className={styles.socialLogin}>
        <p>Connectez-vous avec :</p>
        <div className={styles.socialIcons}>
          <img src="/facebook.png" alt="Facebook" />
          <img src="/google.png" alt="Google" />
        </div>
      </div>
      <Link href="/signup" className={styles.link}>
       Pas de compte ? Créer un compte
      </Link>
    </div>
  );
};

export default SignIn;