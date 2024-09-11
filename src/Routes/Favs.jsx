import Card from "../Components/Card/Card";

import { useDentistStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favs} = useDentistStates();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((dentist)=> <Card key={dentist.id} currentDentist={dentist}/>)}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {/* <Card /> */}
      </div>
    </>
  );
};

export default Favs;
