import React from 'react';
import Link from 'next/link';
import { CRow, CCol, CFormInput, CButton, CCard, CCardBody, CCardTitle } from '@coreui/react';
import styles from '../styles/signup.module.css';

const SignUp = () => {
  return (
    <div className={styles.container}>
      <CCard>
        <CCardBody>
          <CCardTitle className={styles.title}>Créer un compte</CCardTitle>
          <CRow className="g-3">
            <CCol sm={12}>
              <CFormInput
                className={styles.input}
                placeholder="Nom d'utilisateur"
                aria-label="Nom d'utilisateur"
                prepend={<img src="/user.png" alt="Utilisateur" />}
              />
            </CCol>
            <CCol sm={12}>
              <CFormInput
                className={styles.input}
                placeholder="Prénom"
                aria-label="Prénom"
                prepend={<img src="/prenom.png" alt="Prénom" />}
              />
            </CCol>
            <CCol sm={12}>
              <CFormInput
                className={styles.input}
                placeholder="Nom de famille"
                aria-label="Nom de famille"
                prepend={<img src="/nom.png" alt="Nom" />}
              />
            </CCol>
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
            Créer
          </CButton>
          <div className={styles.socialLogin}>
            <p>Ou créer un compte avec :</p>
            <div className={styles.socialIcons}>
              <img src="/facebook.png" alt="Facebook" />
              <img src="/google.png" alt="Google" />
            </div>
          </div>
          <Link href="/login" className={styles.loginLink}>
            Déjà client ? Connectez-vous
          </Link>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default SignUp;