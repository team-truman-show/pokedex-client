// components/MyMain.js
import { useState, useEffect } from "react";
import { myInfoFetch, myPokeFetch } from "/@/api/userAPI";
import { pokemonDetail } from "/@/api/pokemonAPI";
import MyInfo from "./MyInfo";
import MyPokemons from "./MyPokemons";
import PasswordChangeModal from "./PasswordChangeModal";

const MyMain = () => {
  const [myInfo, setMyInfo] = useState(null);
  const [myPokeData, setMyPokeData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mydata = await myInfoFetch();
        setMyInfo(mydata);
        const mypokemons = await myPokeFetch();
        const pokemonDataArr = await Promise.all(
          mypokemons.map((id) => pokemonDetail(id))
        );
        setMyPokeData(pokemonDataArr);
      } catch (error) {
        console.error("API 호출 실패:", error.message);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <MyInfo myInfo={myInfo} openModal={openModal} />
      <MyPokemons myPokeData={myPokeData} />
      {showModal && <PasswordChangeModal closeModal={closeModal} />}
    </div>
  );
};

export default MyMain;
