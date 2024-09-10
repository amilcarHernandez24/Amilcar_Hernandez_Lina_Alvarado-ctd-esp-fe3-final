import styles from "./card.module.css";
import profileImg from "../../assets/profile_dentist.webp";
import { Link } from "react-router-dom";

const Card = ({ currentDentist }) => {
  const { name, username, id } = currentDentist;

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className={styles.card}>
      <img src={profileImg} alt="profile dentist"/>
      <Link to={"/detail/" + id} className={styles.link_text}>
        <h3>{name}</h3>
      </Link>
      <p>{`${username} - ${id}`}</p>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className={styles.favButton}>
        Agregar 
      </button>
    </div>
  );
};

export default Card;
