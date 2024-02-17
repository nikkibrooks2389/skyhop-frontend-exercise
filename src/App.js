
import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import CustomModal from './components/UI/Modal/CustomModal';
import DocumentUpload from './components/DocumentUpload/DocumentUpload';
import './App.css';




function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <div className="App">
      <Button type="primary" onClick={handleOpenModal}>Document Upload </Button>
      <CustomModal open={showModal} handleClose={handleCloseModal}
        ariaLabelledby="document-upload-modal"
        ariaDescribedby="modal-to-upload-documents"
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
