import Card from "../Components/Card/Card";
import { useDentistStates } from "../Components/utils/global.context";
import styles from "./styles/favs.module.css"

const Favs = () => {
  const { state } = useDentistStates();
  const favs = state.favs;

  return (
    <main className={state.theme ? "" : styles.section_dark}>
<section className={styles.section_favs}>
      {favs.length === 0 ? (
        <div>
          <h2>No hay dentistas favoritos</h2>
          <p>Aquí aparecerán los dentistas que has marcado como favoritos. Revisa sus perfiles y mantente en contacto con los profesionales que más te interesan</p>
        </div>
        
      ) : (
        <>
          <h2>Dentistas favoritos</h2>
          <div className={styles.card_grid}>
            {state.favs.map((dentist) => (
              <Card key={dentist.id} currentDentist={dentist} />
            ))}
          </div>
        </>
      )}
    </section>
    </main>
    
  );
};

export default Favs;
