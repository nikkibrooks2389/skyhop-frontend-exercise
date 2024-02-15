import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400, // Adjust based on your needs
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  pt: 2.5, // Adjust padding top to ensure space for the close icon
};

function CustomModal({ open, handleClose, children }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="custom-modal-title"
      aria-describedby="custom-modal-description"
      BackdropProps={{
        style: { backgroundColor: 'transparent' }, // Or your desired backdrop color
      }}
    >
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            left: 8, // Positioned on the left side
            top: 8,
            color: (theme) => theme.palette.grey[500],
            backgroundColor: 'darkblue', // Blue background for the button
            padding: 0, // Remove padding
            borderRadius: "10px", // Remove border radius
            width: 36, // Width of the button (making it square)
            height: 36, // Height of the button (making it square)
            // '&:hover': {
            //   backgroundColor: 'darkblue', // Darker blue on hover
            // },
          }}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
}

export default CustomModal;