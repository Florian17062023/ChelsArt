import React, { useState } from 'react';
import { CRow, CCol, CCard, CCardImage, CCardBody, CCardTitle, CCardText, CPagination, CPaginationItem } from '@coreui/react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/projets.module.css';
import ProductPopup from './Popup';
import FilterSearch from './FilterSearch';
import { FaShoppingCart } from 'react-icons/fa'; // Importation de l'icône du panier
import Sidebar from './Sidebar'; // Assurez-vous que vous importez Sidebar si ce n'est pas déjà le cas

const Projets = ({ searchTerm }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false); // Assurez-vous que setShowSidebar est correctement initialisé
  const itemsPerPage = 10;

  const items = [
    { id: 1, title: 'Le panda', image: '/panda.jpg', category: 'Animaux', description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', price: 25 },
    { id: 2, title: 'Le cochon', image: '/cochon.jpg', category: 'Animaux', description: 'This card has supporting text below as a natural lead-in to additional content.', price: 25 },
    { id: 3, title: 'Le dragon', image: '/dragon2.jpg', category: 'Animaux', description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.', price: 60 },
    { id: 4, title: 'Le lapin', image: '/lapin.jpg', category: 'Animaux', description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', price: 30 },
    { id: 5, title: 'Lapin rose Coeur', image: '/animalcoeur.jpg', category: 'Animaux', description: 'This card has supporting text below as a natural lead-in to additional content.', price: 30 },
    { id: 6, title: 'La souris', image: '/souris.jpg', category: 'Animaux', description: 'This card has supporting text below as a natural lead-in to additional content.', price: 30 },
    { id: 7, title: "L'elephant", image: '/elephant.jpg', category: 'Animaux', description: 'This card has supporting text below as a natural lead-in to additional content.', price: 20 },
    { id: 8, title: 'La vache orange', image: '/vache2.jpg', category: 'Animaux', description: 'This card has supporting text below as a natural lead-in to additional content.', price: 30 },
    { id: 9, title: 'La vache', image: '/vachenoire.jpg', category: 'Animaux', description: 'This card has supporting text below as a natural lead-in to additional content.', price: 25 },
    { id: 10, title: 'Le tigre', image: '/tigre.JPG', category: 'Animaux', description: 'This card has supporting text below as a natural lead-in to additional content.', price: 45 },
    { id: 11, title: 'Sac', image: '/sac.JPG', category: 'Accessoires', description: 'This card has supporting text below as a natural lead-in to additional content.', price: 90 },
    { id: 12, title: 'Maillot Blanc', image: '/maillotBlanc.JPG', category: 'Vetements', description: 'This card has supporting text below as a natural lead-in to additional content.', price: 60 },
    { id: 13, title: 'Maillot Bleu', image: '/maillotBleu.JPG', category: 'Vetements', description: 'This card has supporting text below as a natural lead-in to additional content.', price: 70 },
    { id: 14, title: 'Tshirt Plage', image: '/tshirtplage.JPG', category: 'Vetements', description: 'This card has supporting text below as a natural lead-in to additional content.', price: 50 },
    { id: 15, title: 'Haut Rose', image: '/hautRose.JPG', category: 'Vetements', description: 'This card has supporting text below as a natural lead-in to additional content.', price: 50 },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = filteredItems
    .filter((item) => {
      if (!selectedCategory) return true;
      return item.category === selectedCategory;
    })
    .slice(startIndex, endIndex);

  const handleClosePopup = () => {
    setSelectedId(null);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (item) => {
    // Vérifiez si l'item est déjà dans le panier
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // Si l'item existe déjà, mettez à jour la quantité
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedItems);
    } else {
      // Sinon, ajoutez l'item avec une quantité initiale de 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <>
      <div>
        <FilterSearch onCategorySelect={handleCategorySelect} />
        <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
          {itemsToDisplay.map((item) => (
            <CCol xs key={item.id}>
              <motion.div
                layoutId={`card-${item.id}`}
                onClick={() => setSelectedId(item.id)}
                style={{ cursor: 'pointer' }}
              >
                <CCard className={`h-100 ${styles.card}`}>
                  <CCardImage orientation="top" src={item.image} className={styles['card-img-top']} />
                  <CCardBody className={styles['card-body']}>
                    <CCardTitle className={styles['card-title']}>{item.title}</CCardTitle>
                    <CCardText className={styles['card-text']}>{item.description.slice(0, 50)}...</CCardText>
                  </CCardBody>
                </CCard>
              </motion.div>
            </CCol>
          ))}
        </CRow>
      </div>

      <div className={styles['pagination-container']}>
        <CPagination
          aria-label="Exemple de navigation de page"
          activePage={activePage}
          pages={Math.ceil(filteredItems.length / itemsPerPage)}
          onActivePageChange={handlePageChange}
        >
          {/* Pagination ici */}
        </CPagination>
      </div>

      <AnimatePresence>
        {selectedId && (
          <ProductPopup
            item={items.find((item) => item.id === selectedId)}
            onClose={handleClosePopup}
            handleAddToCart={handleAddToCart}
          />
        )}
      </AnimatePresence>

      <div>
        {/* Votre contenu JSX pour afficher les items */}
        <div className={styles.cartIcon} onClick={() => setShowSidebar(true)}>
          <FaShoppingCart size={30} />
          {cartItems.length > 0 && <span className={styles.cartItemCount}>{cartItems.length}</span>}
        </div>
      </div>

      {/* Affichage conditionnel de la Sidebar */}
      <Sidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)} items={cartItems} onDeleteItem={setCartItems} />

      {/* Autres éléments JSX comme la pagination, les modals, etc. */}
      
    </>
  );
};

export default Projets;