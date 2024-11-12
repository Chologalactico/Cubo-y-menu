import { MouseEvent } from "react";

type Props = {
  data: string[];
};

/*
El uso de esta funcion es que cada vez que selesionemos un algo 
nos pueda salir en la consola ,ademas esa es una forma de probarlo 
de que todo esta bien con el sistema y es bastante util

*/
function List({ data }: Props) {
  const handleClick = (e: string) => {
    console.log(e);
  };
  return (
    <ul className="list-group">
      {data.map((elemento) => (
        /*
        En handClick llamo a la constante que esta tiene como elementos a e 

        Se agina la propiedad key para el poder manejar las propiedades

        */
        <li onClick={() =>handleClick(elemento)} key={elemento} className="list-group-item">
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
