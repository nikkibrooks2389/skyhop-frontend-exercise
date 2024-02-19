
import React, { useState, useEffect } from 'react';
import Button from './components/UI/Button/Button';
import CustomModal from './components/UI/Modal/CustomModal';
import DocumentUpload from './components/DocumentUpload/DocumentUpload';
import { useTheme } from '@mui/material/styles';
import './App.css';




function App() {
  const [showModal, setShowModal] = useState(false);
  const [dynamicWidth, setDynamicWidth] = useState('900px'); // Default width

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const theme = useTheme();

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let width = '900px'; // Default width for large screens

      // Define breakpoints for medium and small screens
      const mediumScreenWidth = theme.breakpoints.values.md; // Example medium screen width
      const smallScreenWidth = theme.breakpoints.values.sm; // Example small screen width

      // Set width based on screen size
      if (screenWidth <= smallScreenWidth) {
        width = '85vw'; // Full width for small screens
      } else if (screenWidth <= mediumScreenWidth) {
        width = '550px'; // Adjust width for medium screens
      }

      setDynamicWidth(width);
    };

    // Calculate initial width and add resize event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures effect runs only once on mount


  return (
    <div className="App">
      <Button type="primary" onClick={handleOpenModal}>Document Upload </Button>
      <CustomModal open={showModal} handleClose={handleCloseModal}
        ariaLabelledby="document-upload-modal"
        ariaDescribedby="modal-to-upload-documents"
        width={dynamicWidth}
        closeButtonStyle={{
          backgroundColor: '#1C3E6E',
          padding: '.2rem',
          borderRadius: "8px",
          color: 'white',
          '&:hover': {
            backgroundColor: '#1C3E6E',
            color: 'white',
          },
        }}>

        <DocumentUpload onClose={handleCloseModal} />
      </CustomModal>
    </div>
  );
}

export default App;
