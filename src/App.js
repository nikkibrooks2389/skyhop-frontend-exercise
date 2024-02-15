
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
      <Button type="primary" onClick={handleOpenModal}>Document Upload</Button>
      <CustomModal open={showModal} handleClose={handleCloseModal}>
        {/* Assuming DocumentUpload can be a child. Adjust as necessary. */}
        <DocumentUpload onClose={handleCloseModal} />
      </CustomModal>
    </div>
  );
}

export default App;
