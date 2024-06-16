import React, { useState } from 'react';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText } from '@coreui/react';
import { motion } from 'framer-motion';
import styles from '../styles/popupStyle.module.css';

const ProductPopup = ({ item, onClose, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + delta));
  };

  return (
    <motion.div
      layoutId={`card-${item.id}`}
      className={styles.popupContainer}
    >
      <div className={styles.popupContent}>
        <div className={styles.closeButton} onClick={onClose}>
          &times;
        </div>
        <div className={styles.imageContainer}>
          <CCardImage
            orientation="top"
            src={item.image}
            style={{ maxWidth: '100%', height: 'auto' }}
            className={styles.cardImgTop}
          />
        </div>
        <div className={styles.contentContainer}>
          <CCardBody className={styles.cardBody}>
            <CCardTitle className={styles.cardTitle}>{item.title}</CCardTitle>
            <CCardText className={styles.cardText}>
              {item.description}
            </CCardText>
            <div className={styles.quantityContainer}>
              <label htmlFor="quantity">Quantité :</label>
              <div className={styles.quantityControls}>
                <button onClick={() => handleQuantityChange(-1)} className={styles.quantityButton}>-</button>
                <span className={styles.quantity}>{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className={styles.quantityButton}>+</button>
              </div>
            </div>
            <div className={styles.price}>
              Prix : {item.price} €
            </div>
            <button className={styles.buyButton} onClick={() => handleAddToCart({ ...item, quantity })}>
              Je veux
            </button>
          </CCardBody>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductPopup;
