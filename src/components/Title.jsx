import "./Title.css";

function Title({ tituloPrincipal, subtitulo, type }) {


  let tituloClase = "title-container";

  if (type) {
    tituloClase += ` titulo-${type}`;  // .titulo-success    .titulo-danger .titulo-info
  }

  return (


    <div className={tituloClase}>

      {/* <div className={`titulo-container ${props.type ? "titulo-" + props.type : ""}`}> */}

      <h1 className="title">{tituloPrincipal}</h1>

      <hr />

      {

        subtitulo && <p className="subtitle">{subtitulo}</p>

      }

      {/* Pintar de forma condicional la imagen del producto: */}
      {/* {
        props.producto?.image ? <img src={producto.image} alt="" />

          : <div className="image-no-provista">SIN IMAGE</div>
      } */}



      <img className="title-image" src="https://i.pinimg.com/originals/e0/ef/d4/e0efd4434e673b3b146e5d06817dd8ac.png" alt="" />
    </div>
  )

}

export default Title;