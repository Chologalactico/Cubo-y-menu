import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
interface CardBodyProps {
  title: string;
  text: string;
}

/*
Para poder pasar un componente desde otra funcion 
tenemos que:
1.Meter los componentes dentro de otro componente
<div></div> Funcional pero agregamos una etiqueta de div que no es necesaria 
o llamar a losFragamets y llamarlos desde react </Fragmets> 
o <> que simplificaria los trabajos a la hora de trabajar 

Lo que hicimso fue separar los componentes y tenemos estos dentro del mismo archivo 


*/

function Card(props: Props) {
  const { children } = props;
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}

//llamar a funcion con otros componentes dentro de este 
export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
