import styles from "./form.module.css"
const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
      <label className={styles.label}>Nombre completo</label>
        <input
          type="text"
          placeholder="Carlos Alberto"
          className={styles.input}
        />
        <label className={styles.label}>Email</label>
        <input
          type="text"
          placeholder="carlos11@correo.com"
          className={styles.input}
        />
        <button className={styles.button_form}> Enviar </button>
      </form>
      
    </div>
  );
};

export default Form;
