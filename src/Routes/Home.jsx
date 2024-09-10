import "../index.css";
import styles from "./styles/home.module.css";
import Card from "../Components/Card/Card";
import dentistImg from "../assets/dentist.jpg";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
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

      <div className={styles.card_grid}>
        <p>cards aqui</p>
        {/* Aqui deberias renderizar las cards */}
        <Card />
      </div>
    </main>
  );
};

export default Home;
