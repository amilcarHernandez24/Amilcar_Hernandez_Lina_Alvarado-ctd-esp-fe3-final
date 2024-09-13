import { useState } from "react";
import styles from "./form.module.css";
import SuccessMessage from "./sucessMessage/SuccessMessage";
import { useDentistStates } from "../utils/global.context";

const Form = () => {
  const { state } = useDentistStates();

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState({ name: "", email: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateName = (name) => {
    if (name.trim().length <= 5) {
      return "El nombre debe tener más de 5 caracteres*";
    }
    return "";
  };

  const validateEmailField = (email) => {
    if (!validateEmail(email)) {
      return "Por favor, ingresa un correo electrónico válido*";
    }
    return "";
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setError({ ...error, name: validateName(value) });
    } else if (name === "email") {
      setError({ ...error, email: validateEmailField(value) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = validateName(user.name);
    const emailError = validateEmailField(user.email);

    if (!nameError && !emailError) {
      setSuccessMessage(
        `Gracias, ${user.name}. Te contactaremos cuando antes vía email.`
      );
      setError({ name: "", email: "" });
      console.log("Datos enviados:", user);
    } else {
      setError({ name: nameError, email: emailError });
      setSuccessMessage("");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={!state.theme && styles.form_dark}
      >
        <label className={styles.label}>Nombre completo</label>
        <input
          type="text"
          name="name"
          placeholder="Carlos Alberto"
          value={user.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={styles.input}
        />
        {error.name && <p className={styles.error}>{error.name}</p>}

        <label className={styles.label}>Email</label>
        <input
          type="text"
          name="email"
          placeholder="carlos11@correo.com"
          value={user.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={styles.input}
        />
        {error.email && <p className={styles.error}>{error.email}</p>}

        <button type="submit" className={styles.button_form}>
          Enviar
        </button>
        {successMessage && <SuccessMessage message={successMessage} />}
      </form>
    </div>
  );
};

export default Form;
