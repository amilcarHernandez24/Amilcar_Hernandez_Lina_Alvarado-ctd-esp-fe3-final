import styles from "./card.module.css";
import profileImg from "../../assets/profile_dentist.webp";
import { Link } from "react-router-dom";
import { useDentistStates } from "../utils/global.context";

const Card = ({ currentDentist }) => {
  const { name, username, id } = currentDentist;
  const { state, dispatch } = useDentistStates();
  const isFav = state.favs.find((fav) => fav.id == id);

  const handleFavs = () => {
    dispatch({
      type: isFav ? "REMOVE_FAV" : "ADD_FAV",
      payload: currentDentist,
    });
  };

  return (
    <div className={styles.card}>
      <img src={profileImg} alt="profile dentist" />
      <Link to={"/detail/" + id} className={styles.link_text}>
        <h3>{name}</h3>
      </Link>
      <p>{`${username} - ${id}`}</p>

      <button onClick={handleFavs} className={styles.favButton}>
        {isFav ? "⭐" : "Agregar"}
      </button>
    </div>
  );
};

export default Card;
