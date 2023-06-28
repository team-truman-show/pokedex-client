import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  MyPokemonImage,
  BigBox,
  ProgressBox,
  ButtonBox,
} from '../../../styles/myPage/bringUp/bringUp.style';
import CustomModal from './CustomModal';
import {
  pokeCleanliness,
  pokeGifLike,
  pokeMomentum,
  pokeSatitety,
} from '../../../api/pokemonAPI';

const BringUp = () => {
  const { pokeid } = useParams();
  const [satiety, setSatiety] = useState(50);
  const [cleanliness, setCleanliness] = useState(50);
  const [momentum, setMomentum] = useState(50);
  const [PokemonData, setPokemonData] = useState(null);
  const [isEating, setIsEating] = useState(false);
  const [isMoving, setIsMoving] = useState(true);
  const [isWalking, setIsWalking] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBathing, setIsBathing] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    message: '',
    isError: false,
    imageSrc: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mypoke = await pokeGifLike(pokeid);
        setPokemonData(mypoke);
      } catch (error) {
        console.error('API 호출 실패:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleEatButtonClick = () => {
    setIsEating(true);
    setIsModalOpen(true);
    if (satiety + 5 <= 100) setSatiety(satiety + 5);
    pokeSatitety(pokeid, satiety);
    setTimeout(() => {
      setIsEating(false);
      setIsModalOpen(false);
    }, 3000);
    setModalContent({
      title: '밥먹기',
      message: '포만감 +5',
      isError: false,
      imageSrc: '../../../public/image/eating.gif',
    });
  };

  const handleWalkButtonClick = () => {
    setIsWalking(true);
    setIsModalOpen(true);
    if (momentum + 5 <= 100) setMomentum(momentum + 5);
    pokeMomentum(pokeid, momentum);
    setTimeout(() => {
      setIsWalking(false);
      setIsModalOpen(false);
    }, 3000);
    setModalContent({
      title: '산책하기',
      message: '운동량 +5',
      isError: false,
      imageSrc: '../../../public/image/walking.gif',
    });
  };

  const handleBathButtonClick = () => {
    setIsModalOpen(true);
    setIsBathing(true);
    if (cleanliness + 5 <= 100) setCleanliness(cleanliness + 5);
    pokeCleanliness(pokeid, cleanliness);
    setTimeout(() => {
      setIsBathing(false);
      setIsModalOpen(false);
    }, 3000);
    setModalContent({
      title: '목욕하기',
      message: '청결도 +5',
      isError: false,
      imageSrc: '../../../public/image/bathing1.gif',
    });
  };

  const handleEvolutionButtonClick = () => {};

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url('../../../public/image/back1.jpg')`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <ProgressBox>
        <div>
          <h2 style={{ textAlign: 'center' }}>포만도</h2>
          <progress
            style={{ width: '300px' }}
            className="nes-progress is-primary"
            value={satiety}
            max="100"
          ></progress>
        </div>
        <div>
          <h2 style={{ textAlign: 'center' }}>친밀도</h2>
          <progress
            style={{ width: '300px' }}
            class="nes-progress is-warning"
            value={momentum}
            max="100"
          ></progress>
        </div>
        <div>
          <h2 style={{ textAlign: 'center' }}>청결도</h2>
          <progress
            style={{ width: '300px' }}
            class="nes-progress is-error"
            value={cleanliness}
            max="100"
          ></progress>
        </div>
      </ProgressBox>
      <div>
        <BigBox>
          <MyPokemonImage
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif"
            className={`pokemon-image ${isEating ? 'eating' : ''} ${
              isMoving ? 'moving-image' : ''
            } ${isWalking ? 'walking' : ''} ${isBathing ? 'bathing' : ''}`}
          ></MyPokemonImage>
          {/* <MyPokemonImage
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokeid}.gif"
            className={`pokemon-image ${isEating ? "eating" : ""} ${isMoving ? "moving-image" : ""} ${isWalking ? "walking" : ""} ${isBathing ? "bathing" : ""}`}
          ></MyPokemonImage> */}
        </BigBox>
        <BigBox>
          <ButtonBox>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div>
                <button
                  type="button"
                  className="nes-btn is-primary"
                  onClick={handleEatButtonClick}
                  style={{ marginRight: '10px' }}
                >
                  밥먹기
                </button>
                <button
                  type="button"
                  className="nes-btn is-warning"
                  onClick={handleWalkButtonClick}
                  style={{ marginRight: '10px' }}
                >
                  산책하기
                </button>
                <button
                  type="button"
                  className="nes-btn is-error"
                  onClick={handleBathButtonClick}
                >
                  목욕하기
                </button>
              </div>
              {satiety + momentum + cleanliness >= 300 ? (
                <div style={{ position: 'absolute', right: '0px' }}>
                  <button type="button" className="nes-btn is-success">
                    진화
                  </button>
                </div>
              ) : null}
            </div>
          </ButtonBox>
        </BigBox>
      </div>

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
