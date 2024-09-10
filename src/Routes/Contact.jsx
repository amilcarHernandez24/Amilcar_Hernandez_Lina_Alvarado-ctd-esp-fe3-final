import Form from "../Components/Form/Form";
import styles from "./styles/contact.module.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className={styles.div_contact}>
      <h2> Contacto - Queremos Saber de Ti </h2>
      <p className={styles.text}>Si tienes preguntas o necesitas más información, completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>
      <Form />
    </div>
  );
};

export default Contact;
