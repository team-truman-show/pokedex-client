import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MyPokemonImage, BigBox } from "../../../styles/myPage/bringUp/bringUp.style";
import CustomModal from "./CustomModal";

const BringUp = () => {
  const { pokeid } = useParams();
  const [PokemonData, setPokemonData] = useState(null);
  const [isEating, setIsEating] = useState(false);
  const [isMoving, setIsMoving] = useState(true);
  const [isWalking, setIsWalking] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBathing, setIsBathing] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    isError: false,
    imageSrc: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mypoke = await pokeGifLike(pokeid);
        setPokemonData(mypoke);
      } catch (error) {
        console.error("API 호출 실패:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleEatButtonClick = () => {
    setIsEating(true);
    setIsModalOpen(true);
    setTimeout(() => {
        setIsEating(false);
        setIsModalOpen(false);
      }, 3000);
    setModalContent({
        title: "밥먹기",
        message: "애정도 +5",
        isError: false,
        imageSrc: '../../../public/image/eating.gif'
      });
  };

  const handleWalkButtonClick = () => {
    setIsWalking(true);
    setIsModalOpen(true);
    setTimeout(() => {
      setIsWalking(false);
      setIsModalOpen(false);
    }, 3000);
    setModalContent({
        title: "산책하기",
        message: "애정도 +5",
        isError: false,
        imageSrc: "../../../public/image/walking.gif"
      });
  };

  const handleBathButtonClick = () => {
    setIsModalOpen(true);
    setIsBathing(true);
    setTimeout(() => {
        setIsBathing(false);
        setIsModalOpen(false);
      }, 3000);
      setModalContent({
          title: "목욕하기",
          message: "애정도 +5",
          isError: false,
          imageSrc: "../../../public/image/bathing1.gif"
        });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{
        backgroundImage: `url('../../../public/image/wild.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <BigBox>
        <i className="nes-icon is-large heart" />
        <progress style={{ width: '25%' }} className="nes-progress is-primary" value="30" max="100"></progress>
      </BigBox>
      <div>
        <BigBox>
          <MyPokemonImage
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/172.gif"
            className={`pokemon-image ${isEating ? "eating" : ""} ${isMoving ? "moving-image" : ""} ${isWalking ? "walking" : ""} ${isBathing ? "bathing" : ""}`}
          ></MyPokemonImage>
        </BigBox>
      </div>
      <BigBox>
        <button type="button" className="nes-btn is-primary" onClick={handleEatButtonClick}>
          밥먹기
        </button>
        <button type="button" className="nes-btn is-warning" onClick={handleWalkButtonClick}>
          산책하기
        </button>
        <button type="button" className="nes-btn is-error" onClick={handleBathButtonClick}>
          목욕하기
        </button>
      </BigBox>

      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        message={modalContent.message}
        isError={modalContent.isError}
        imageSrc={modalContent.imageSrc}
      />
    </div>
  );
};

export default BringUp;
