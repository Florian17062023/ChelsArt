import React, { useState } from 'react';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText } from '@coreui/react';
import { motion } from 'framer-motion';
import styles from '../styles/popupStyle.module.css';

const ProductPopup = ({ item, onClose, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1); // État pour la quantité sélectionnée

  const handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value);
    setQuantity(quantity);
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
            className={styles['card-img-top']}
          />
        </div>
        <div className={styles.contentContainer}>
          <CCardBody className={styles['card-body']}>
            <CCardTitle className={styles['card-title']}>{item.title}</CCardTitle>
            <CCardText className={styles['card-text']}>
              {item.description}
            </CCardText>
            <div>
              <label htmlFor="quantity">Quantité :</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={handleQuantityChange}
              />
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
