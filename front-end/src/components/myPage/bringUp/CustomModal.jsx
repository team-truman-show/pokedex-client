import React from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const CustomModal = ({
  isOpen,
  onClose,
  title,
  message,
  isError,
  imageSrc,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="custom-modal-title"
      aria-describedby="custom-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          textAlign: "center",
          fontFamily: "DungGeunMo",
        }}
      >
        <Typography id="custom-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        {imageSrc && <img src={imageSrc} alt="Modal Image" />}
        <Typography id="custom-modal-description">{message}</Typography>
        <button
          onClick={onClose}
          className={isError ? "nes-btn is-error" : "nes-btn is-success"}
        >
          확인
        </button>
      </Box>
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  imageSrc: PropTypes.string,
};

export default CustomModal;
