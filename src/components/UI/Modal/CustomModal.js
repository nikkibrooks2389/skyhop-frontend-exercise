import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

/**
 * Component: CustomModal
 * Purpose: Renders a customizable modal dialog using Material-UI components. It can be reused throughout the application for consistent modal presentations.
 * Props:
 *   open (Boolean): Controls the visibility of the modal. If true, the modal is shown.
 *   handleClose (Function): A function to call when the modal needs to be closed. This can be triggered by the close icon button or any custom logic within the modal's content.
 *   children (Node): The content to be displayed inside the modal. This allows for flexible use of the modal component with any custom content.
 *   width (String ): Specifies the width of the modal. Can be any valid CSS value (e.g., '70vw', '600px'). Default is '70vw'.
 *   height (String ): Specifies the height of the modal. Can be any valid CSS value (e.g., '85vh', '400px'). Default is '85vh'.
 *   customStyle (Object): Custom styles that can be applied to the modal's Box component for further customization.
 *   backdropStyle (Object): Custom styles that can be applied to the modal's backdrop. Default is { backgroundColor: 'transparent' }.
 *   closeButtonStyle (Object): Custom styles that can be applied to the close icon button.
 *   showCloseButton (Boolean): Controls the visibility of the close icon button. If true, the button is shown. Default is true.
 *   ariaLabelledby (String): Provides an accessible name for the modal, which is referenced by ID.
 *   ariaDescribedby (String): Provides an accessible description for the modal, which is referenced by ID.
 */

const defaultStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: '0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  p: 4,
  textAlign: 'center',

};

function CustomModal({
  open,
  handleClose,
  children,
  width = '70vw',
  height = '85vh',
  customStyle = {},
  backdropStyle = { backgroundColor: 'transparent' },
  closeButtonStyle = {},
  showCloseButton = true,
  ariaLabelledby = 'custom-modal-title',
  ariaDescribedby = 'custom-modal-description',

}) {
  const style = { ...defaultStyle, height, width, ...customStyle };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
      BackdropProps={{
        style: backdropStyle,
      }}

    >
      <Box sx={style}>
        {showCloseButton && (
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              left: 25,
              top: 25,
              color: (theme) => theme.palette.grey[500],
              ...closeButtonStyle
            }}

          >
            <CloseIcon />

          </IconButton>
        )}
        {children}
      </Box>
    </Modal>
  );
}

export default CustomModal;