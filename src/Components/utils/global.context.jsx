import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

// export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

  const [theme, setTheme] = useState()
  const [dentists, setDentists] = useState([])
  const [favs, setFavs] = useState(lsFavs)


  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(url).then((response) => {
      setDentists(response.data);
      console.log("dentro del useEffect", response.data);
    })
    .catch((err) => console.log(err));
  }, []);

  useEffect(()=>{
    localStorage.setItem("favs", JSON.stringify(favs))
  }, [favs])


  return (
    <ContextGlobal.Provider value={{theme, setTheme, dentists, favs, setFavs }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useDentistStates = () => useContext(ContextGlobal)