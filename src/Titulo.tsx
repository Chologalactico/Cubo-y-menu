function Titulo(){

    const nombre ='Juan'
    if (nombre){
      return <h1>Hola {nombre}</h1>  
    }
    return <h1>Hola Mundo|</h1> //Codigo jsx -> Lo que react es tomar las etiquetas y tranformarlas en codigo JS para que sea algo lejible por el explorador
  }
  
  export default Titulo