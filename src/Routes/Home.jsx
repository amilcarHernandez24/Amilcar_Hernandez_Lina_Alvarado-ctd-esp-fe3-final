import "../index.css";
import styles from "./styles/home.module.css";
import Card from "../Components/Card/Card";
import dentistImg from "../assets/dentist.jpg";
import { useDentistStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
 const {dentists} = useDentistStates()

  return (
    <main>
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
      
      <section  className={styles.container_cards}>
      <h2>Conoce a Nuestros Dentistas Destacados</h2>
      <p>Agrega a tus favoritos</p>

      <section className={styles.card_grid}>
        {dentists.map((dentist) => (
          <Card key={dentist.id} currentDentist={dentist} />
        ))}
      </section>
      </section>
    </main>
  );
};

export default Home;
