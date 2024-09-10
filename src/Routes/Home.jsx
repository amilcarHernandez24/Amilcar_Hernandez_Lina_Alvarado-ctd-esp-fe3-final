import "../index.css";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./styles/home.module.css";
import Card from "../Components/Card/Card";
import dentistImg from "../assets/dentist.jpg";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(url).then((response) => {
      setDentists(response.data);
      console.log("dentro del useEffect", response.data);
    });
  }, []);
  console.log("Afuera", dentists);
  return (
    <main className="">
      <section className={styles.main_section_title}>
        <div className={styles.div_main_title}>
          <h1 className={styles.title_light}>Encuentra a tu Dentista Ideal</h1>
          <p>
            Descubre una selección de los mejores dentistas disponibles, listos
            para brindarte el mejor cuidado dental.
          </p>
        </div>
        <img src={dentistImg} alt="" />
      </section>

      <h2>Conoce a Nuestros Dentistas Destacados</h2>
      <p>Agrega a tus favoritos</p>

      <section className={styles.card_grid}>
        {dentists.map((dentist) => (
          <Card key={dentist.id} currentDentist={dentist} />
        ))}
      </section>
    </main>
  );
};

export default Home;
