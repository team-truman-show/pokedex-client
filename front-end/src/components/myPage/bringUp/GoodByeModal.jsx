import PropTypes from "prop-types";
import { Modal, Typography, Box, Button } from "@mui/material";

import { pokeLetgo } from "../../../api/pokemonAPI";
// import { useParams } from "react-router-dom";
const GoodByeModal = ({
  isOpen,
  onClose,
  title,
  myPokeId,
  message,
  isError,
  imageSrc,
}) => {
  // console.log(`myPokeId: ${myPokeId}`);
  const handleClick = async (event) => {
    event.stopPropagation();
    try {
      await pokeLetgo(myPokeId);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
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
        <Button
          onClick={handleClick}
          variant={isError ? "contained" : "outlined"}
          sx={{
            border: "2px solid black",
            marginTop: "1rem",
            marginRight: "20px",
            padding: "0.5rem 1rem",
            backgroundColor: isError ? "#FF0000" : "#00FF00",
            color: "white",
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
              backgroundColor: isError ? "#CC0000" : "#00CC00",
            },
          }}
        >
          놓아주기
        </Button>
        <Button
          onClick={onClose}
          variant={isError ? "contained" : "outlined"}
          sx={{
            border: "2px solid black",
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: isError ? "#FF0000" : "#FF0000",
            color: "#FFFFFF",
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
              backgroundColor: isError ? "#CC0000" : "#CC0000",
            },
          }}
        >
          취 소
        </Button>
      </Box>
    </Modal>
  );
};

GoodByeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  myPokeId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  imageSrc: PropTypes.string,
};
export default GoodByeModal;
