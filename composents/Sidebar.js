import React, { useState } from 'react';
import styles from '../styles/sidebar.module.css';

const Sidebar = ({ isOpen, onClose, items, onDeleteItem }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (itemId, quantity) => {
    setQuantities((prevQuantities) => ({...prevQuantities, [itemId]: quantity }));
  };

  const handleQuantityIncrement = (itemId) => {
    handleQuantityChange(itemId, (quantities[itemId] || 1) + 1);
  };

  const handleQuantityDecrement = (itemId) => {
    handleQuantityChange(itemId, Math.max(1, (quantities[itemId] || 1) - 1));
  };

  // Modification ici pour supprimer l'élément de la liste
  const handleDeleteItem = (itemId) => {
    // Créez une copie de la liste des articles sans l'article à supprimer
    const newItems = items.filter(item => item.id!== itemId);
    setQuantities((prevQuantities) => {
      const newQuantities = {...prevQuantities };
      delete newQuantities[itemId];
      return newQuantities;
    });
    onDeleteItem(newItems); // Passez la nouvelle liste à onDeleteItem
  };

  return (
    <div className={`${styles.sidebar} ${isOpen? styles.open : ''}`}>
      <button className={styles.closeButton} onClick={onClose}>&times;</button>
      <h2 className={styles.sidebarTitle}>Votre Panier</h2>
      <div className={styles.header}>
        <span>PRODUIT</span>
        <span>TOTAL</span>
      </div>
      <hr className={styles.divider} />
      <ul>
        {items.map((item, index) => (
          <li key={index} className={styles.cartItem}>
            <div className={styles.itemLeft}>
              <img src={item.image} alt={item.title} className={styles.cartItemImage} />
              <div>
                <p>{item.title}</p>
                <p>Prix unitaire : {item.price} €</p>
                <div className={styles.quantityContainer}>
                  <button className={styles.quantityButton} onClick={() => handleQuantityDecrement(item.id)}>-</button>
                  <input
                    type="number"
                    value={quantities[item.id] || 1}
                    onChange={(event) => handleQuantityChange(item.id, parseInt(event.target.value))}
                    className={styles.quantityInput}
                  />
                  <button className={styles.quantityButton} onClick={() => handleQuantityIncrement(item.id)}>+</button>
                  <img src="poubelle.png" alt="Supprimer" className={styles.deleteButton} onClick={() => handleDeleteItem(item.id)} />
                </div>
              </div>
            </div>
            <div className={styles.itemRight}>
              <p>{(item.price * (quantities[item.id] || 1)).toFixed(2)} €</p>
            </div>
          </li>
        ))}
      </ul>
      <hr className={styles.divider} />
      <div className={styles.totalPrice}>
        <span>Total Panier :</span>
        <span>{items.reduce((total, item) => total + item.price * (quantities[item.id] || 1), 0).toFixed(2)} €</span>
      </div>
      <button className={styles.commandButton}>Commander</button>
    </div>
  );
};

export default Sidebar;
