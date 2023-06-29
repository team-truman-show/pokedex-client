import PropTypes from "prop-types";
import { Modal, Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { pokeEvolve } from "../../../api/pokemonAPI";
// import { useParams } from "react-router-dom";
const EvolutionModal = ({
  isOpen,
  onClose,
  title,
  mypokeid,
  pokemonid,
  message,
  isError,
  imageSrc,
}) => {
  const history = useHistory();
  // const { mypokeid, pokemonid } = useParams();
  const [pokemon, setPokemon] = useState();

  const handleClick = async () => {
    try {
      const evolveData = await pokeEvolve(mypokeid, pokemonid);
      if (evolveData.id && evolveData.pokeid) {
        setPokemon(evolveData);
        onClose();
        // history.push(`/bringup/${evolveData.id}/${evolveData.pokeid}`);
        window.location.replace(
          `/bringup/${evolveData.id}/${evolveData.pokeid}`
        );
      } else {
        console.error("Failed to evolve the Pokémon.");
      }
    } catch (error) {
      console.error("Error while evolving Pokémon:", error);
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
            padding: "0.5rem 1rem",
            marginRight: "20px",
            backgroundColor: isError ? "#FF0000" : "#00FF00",
            color: "#FFFFFF",
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
              backgroundColor: isError ? "#CC0000" : "#00CC00",
            },
          }}
        >
          진 화
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

EvolutionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  mypokeid: PropTypes.string,
  pokemonid: PropTypes.string,
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  imageSrc: PropTypes.string,
};
export default EvolutionModal;
