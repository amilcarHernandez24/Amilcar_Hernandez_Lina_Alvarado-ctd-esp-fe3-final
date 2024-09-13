import Form from "../Components/Form/Form";
import styles from "./styles/contact.module.css"
import { useDentistStates } from "../Components/utils/global.context";

const Contact = () => {
  const { state } = useDentistStates();
  return (
    <section className={state.theme ? "" : styles.contact_dark}>
    <div className={styles.div_contact}>
      <h2> Contacto - Queremos Saber de Ti </h2>
      <p className={styles.text}>Si tienes preguntas o necesitas más información, completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>
      <Form />
    </div>
    </section>
    
  );
};

export default Contact;
