import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  PokeImgWrapper,
  MyPokemonImage,
  BigBox,
  ProgressBox,
  ButtonBox,
} from "../../../styles/myPage/bringUp/bringUp.style";
import CustomModal from "./CustomModal";
import EvolutionModal from "./EvolutionModal";
import {
  pokeFull,
  pokeIntimate,
  pokeClean,
  pokeEvolve,
  pokemonDetail,
  pokeStatus,
} from "../../../api/pokemonAPI";

const BringUp = () => {
  const { mypokeid, pokemonid } = useParams();
  const [full, setFull] = useState(50);
  const [clean, setClean] = useState(50);
  const [intimate, setIntimate] = useState(50);
  const [PokemonData, setPokemonData] = useState(null);
  const [isEating, setIsEating] = useState(false);
  const [isMoving] = useState(true);
  const [isWalking, setIsWalking] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBathing, setIsBathing] = useState(false);
  const [isEvolutionModalOpen, setIsEvolutionModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    isError: false,
    imageSrc: "",
  });
  // const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mypoke = await pokemonDetail(pokemonid);
        setPokemonData(mypoke);
        const status = await pokeStatus(mypokeid);
        setFull(status.full);
        setClean(status.clean);
        setIntimate(status.intimate);
      } catch (error) {
        console.error("API 호출 실패:", error.message);
      }
    };

    fetchData();
  }, [mypokeid, pokemonid]);

  //포만감
  const handleEatButtonClick = async () => {
    setIsEating(true);
    setIsModalOpen(true);
    if (full + 10 <= 100) setFull(full + 10);
    setTimeout(() => {
      setIsEating(false);
      if (full + 10 <= 100) pokeFull(mypokeid, full + 10);
    }, 3000);
    console.log("🚀 ~ file: BringUp.jsx:68 ~ setTimeout ~ full:", full);
    if (full + 10 <= 100) {
      setModalContent({
        title: "밥먹기",
        message: "포만도 +10",
        isError: false,
        imageSrc: "../../../public/image/eating.gif",
      });
    } else {
      setModalContent({
        title: "밥먹기",
        message: "배부르다",
        isError: false,
        imageSrc: "../../../public/image/eatfull.gif",
      });
    }
  };

  //친밀도
  const handleWalkButtonClick = async () => {
    setIsWalking(true);
    setIsModalOpen(true);
    if (intimate + 10 <= 100) setIntimate(intimate + 10);
    setTimeout(() => {
      setIsWalking(false);
      if (intimate + 10 <= 100) pokeIntimate(mypokeid, intimate + 10);
    }, 3000);
    console.log("🚀 ~ file: BringUp.jsx:87 ~ setTimeout ~ intimate:", intimate);
    if (intimate + 10 <= 100) {
      setModalContent({
        title: "산책하기",
        message: "친밀도 +10",
        isError: false,
        imageSrc: "../../../public/image/walking.gif",
      });
    } else {
      setModalContent({
        title: "산책하기",
        message: "나가기 싫다",
        isError: false,
        imageSrc: "../../../public/image/notwalking.gif",
      });
    }
  };

  //청결도
  const handleBathButtonClick = async () => {
    setIsModalOpen(true);
    setIsBathing(true);
    if (clean + 10 <= 100) {
      setClean(clean + 10);
    }
    setTimeout(() => {
      setIsBathing(false);
      if (clean + 10 <= 100) pokeClean(mypokeid, clean + 10);
    }, 3000);
    console.log("🚀 ~ file: BringUp.jsx:109 ~ setTimeout ~ clean:", clean);
    if (clean + 10 <= 100) {
      setModalContent({
        title: "목욕하기",
        message: "청결도 +10",
        isError: false,
        imageSrc: "../../../public/image/bathing1.gif",
      });
    } else {
      setModalContent({
        title: "목욕하기",
        message: "씻기 싫다",
        isError: false,
        imageSrc: "../../../public/image/notbathing.gif",
      });
    }
  };

  //진화
  const handleEvloutionClick = async () => {
    setIsEvolutionModalOpen(true);
    setModalContent({
      title: "진화하기",
      message: "앗 포켓몬 상태가?",
      isError: false,
      imageSrc: "../../../public/image/evl.gif",
      mypokeid: mypokeid,
      pokemonid: pokemonid,
    });
  };

  const handleEvolutionConfirm = async () => {
    setIsEvolutionModalOpen(false);
    try {
      const evolveData = await pokeEvolve(mypokeid, pokemonid);
      console.log(`evolving data: ${evolveData}`);
      if (evolveData.id && evolveData.pokeid) {
        setPokemonData(evolveData);
      } else {
        console.error("Failed to evolve the Pokémon.");
      }
    } catch (error) {
      console.error("Error while evolving Pokémon:", error);
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEvolutionCancel = () => {
    setIsEvolutionModalOpen(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url('../../../public/image/back1.jpg')`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <ProgressBox>
        <div>
          <h2 style={{ textAlign: "center" }}>포만도</h2>
          <progress
            style={{ width: "300px" }}
            className="nes-progress is-primary"
            value={full}
            max="100"
          ></progress>
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>친밀도</h2>
          <progress
            style={{ width: "300px" }}
            className="nes-progress is-warning"
            value={intimate}
            max="100"
          ></progress>
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>청결도</h2>
          <progress
            style={{ width: "300px" }}
            className="nes-progress is-error"
            value={clean}
            max="100"
          ></progress>
        </div>
      </ProgressBox>
      <BigBox>
        {PokemonData && (
          <PokeImgWrapper>
            <MyPokemonImage
              src={
                PokemonData.imagegif
                  ? PokemonData.imagegif
                  : PokemonData.imageurl
              }
              className={`pokemon-image ${isEating ? "eating" : ""} ${
                isMoving ? "moving-image" : ""
              } ${isWalking ? "walking" : ""} ${isBathing ? "bathing" : ""}`}
            />
          </PokeImgWrapper>
        )}
      </BigBox>
      <ButtonBox>
        <div>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={handleEatButtonClick}
            style={{ marginRight: "10px" }}
          >
            밥먹기
          </button>
          <button
            type="button"
            className="nes-btn is-warning"
            onClick={handleWalkButtonClick}
            style={{ marginRight: "10px" }}
            // disabled="disabled"
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
        {full + intimate + clean >= 300 && PokemonData.nextevolves ? (
          <div style={{ position: "absolute", right: "0px" }}>
            <button
              type="button"
              className="nes-btn is-success"
              onClick={handleEvloutionClick}
            >
              진화
            </button>
          </div>
        ) : null}
      </ButtonBox>

      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        message={modalContent.message}
        isError={modalContent.isError}
        imageSrc={modalContent.imageSrc}
      />
      <EvolutionModal
        isOpen={isEvolutionModalOpen}
        onClose={handleEvolutionCancel}
        onConfirm={handleEvolutionConfirm}
        title={modalContent.title}
        message={modalContent.message}
        isError={modalContent.isError}
        imageSrc={modalContent.imageSrc}
        mypokeid={mypokeid} // 추가된 부분
        pokemonid={pokemonid}
      />
    </div>
  );
};

export default BringUp;
