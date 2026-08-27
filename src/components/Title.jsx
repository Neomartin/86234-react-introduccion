import "./Title.css";

function Title(props) {

  return (
    <div className="title-container">


      <h1 className="title">{props.principal}</h1>




      <hr />
      <p className="subtitle">Esta es una aplicación de ejemplo en React.</p>
      <img className="title-image" src="https://i.pinimg.com/originals/e0/ef/d4/e0efd4434e673b3b146e5d06817dd8ac.png" alt="" />
    </div>
  )

}

export default Title;