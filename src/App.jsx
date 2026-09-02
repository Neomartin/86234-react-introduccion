import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid'
import './App.css'
import Button from './components/Button'
import Title from './components/Title'

export default function App() {

  function handleEditar() {
    console.warn("Vamos a comenzar a editar")
  }

  function handleAceptar() {
    console.log("Has aceptado la acción")
  }

  function handleAñadir() {
    console.log("Has añadido un nuevo elemento")
  }

  function handleBorrar() {
    console.error("Has borrado un elemento")
  }



  return (
    <>

      <Title tituloPrincipal="Titulo principal de mi aplicación"
        subtitulo="Subtitulo de mi aplicación"
        cualquierCosa="Cualquier cosa" />

      <Button texto="Editar" accion={handleEditar} type="success" size="lg" Icon={PencilIcon} disabled={true} />


      <p>Bienvenido a mi aplicación de React.</p>

      <hr />

      <h2>Sección de contenido</h2>
      <p>Este es el contenido de la sección.</p>


      <Title tituloPrincipal="Acerca de" />

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae expedita corporis perspiciatis dolore inventore cupiditate, reiciendis non, facere fugit obcaecati consequatur animi rerum optio pariatur iste dolores earum. oluptatibus ipsam ipsum reiciendis illo a corporis!</p>

      <Button texto="Aceptar" accion={handleAceptar} size="sm" />


      <Title tituloPrincipal="Tercer uso de mi title" subtitulo="Subtitulo del tercer uso" type="danger" />


      <Button texto="Añadir" type="warning" />

      <p>Este es otro párrafo de ejemplo en la aplicación de React.</p>



      <Button texto="Borrar" accion={handleBorrar} type="danger" Icon={TrashIcon} />

    </>
  )
}