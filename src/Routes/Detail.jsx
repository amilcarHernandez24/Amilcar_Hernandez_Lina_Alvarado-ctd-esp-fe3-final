import styles from "./styles/detail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import profileImg from "../assets/profile_dentist.webp";
import Spinner from "../Components/Spinner/Spinner";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  console.log(params);
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url)
      .then((res) => {
        setDentist(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(dentist);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className={styles.detail_container}>
          <h2 className={styles.title}>
            Conoce más información de nuestro dentista
          </h2>
          <section className={styles.container_info}>
            <div className={styles.container_header}>
              <img src={profileImg} alt="profile dentist"/>
              <h3>{dentist.name}</h3>
            </div>
            <section className={styles.container_body}>
              <div className={styles.body_item}>
                <h4>
                  Telefono: <span>{dentist.phone}</span>
                </h4>
              </div>
              <div className={styles.body_item}>
                <h4>
                  Email: <span>{dentist.email}</span>
                </h4>
              </div>
              <div className={styles.body_item}>
                <h4>
                  Sitio web: <span>{dentist.website}</span>
                </h4>
              </div>
              <div className={styles.body_item}>
                <h4>
                  Empresa: <span>{dentist.company.name}</span>
                </h4>
              </div>
              <div className={styles.body_item}>
                <h4>
                  Direccion: <span>{dentist.address.city}</span>
                </h4>
              </div>
            </section>
          </section>
        </section>
      )}
    </>
  );
};

export default Detail;
