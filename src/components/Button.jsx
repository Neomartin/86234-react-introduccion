import './Button.css'
// ✅ texto
// ✅ acción
// ✅ type
// ✅ size

// icono


function Button({ texto, accion, type, size = "md", Icon, disabled = false, loading = false }) {


  return (
    <button className={`button ${type ? "button-" + type : ""} ${"button-" + size}`} onClick={accion} disabled={disabled}>

      {
        Icon && <Icon />
      }

      {/* {
        loading ? <spinner></spinner>
                : { texto }
      } */}

      {texto}


    </button>
  )

}


export default Button;