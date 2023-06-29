import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

import "nes.css/css/nes.min.css";

const CustomModal = ({ message, onClose, isError }) => {
  const title = isError ? "앗!" : "야호!";

  return (
    <Modal
      open={true}
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
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default CustomModal;
