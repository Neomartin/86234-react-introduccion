import './App.css'
import Title from './components/Title'

export default function App() {

  const producto = {
    name: "Producto 1",
    price: 1000,
    description: "Descripción del producto",
    stock: 50,
    category: "Electrónica",
    imageUrl: "https://via.placeholder.com/150"
  }

  //Logica de la función
  // ...
  // ...

  return (
    <>

      <Title tituloPrincipal="Titulo principal de mi aplicación"
        subtitulo="Subtitulo de mi aplicación"
        cualquierCosa="Cualquier cosa"
        propiedadComponenteProducto={producto} />


      <p>Bienvenido a mi aplicación de React.</p>

      <hr />

      <h2>Sección de contenido</h2>
      <p>Este es el contenido de la sección.</p>



      <Title tituloPrincipal="Acerca de" />






      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae expedita corporis perspiciatis dolore inventore cupiditate, reiciendis non, facere fugit obcaecati consequatur animi rerum optio pariatur iste dolores earum. oluptatibus ipsam ipsum reiciendis illo a corporis!</p>


      <Title tituloPrincipal="Tercer uso de mi title" subtitulo="Subtitulo del tercer uso" type="danger" />

      <p>Este es otro párrafo de ejemplo en la aplicación de React.</p>

    </>
  )
}