import './App.css'
import Title from './components/Title'

export default function App() {

  const nombre = "Juancito Perez"

  //Logica de la función
  // ...
  // ...

  return (
    <>

      <Title principal="Titulo principal de mi aplicación" secundario="Prop secundaria" />

      <p>Bienvenido a mi aplicación de React.</p>

      <hr />

      <h2>Sección de contenido</h2>
      <p>Este es el contenido de la sección.</p>

      <img src="algo" alt="algo" />

      <Title principal="Acerca de" />

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae expedita corporis perspiciatis dolore inventore cupiditate, reiciendis non, facere fugit obcaecati consequatur animi rerum optio pariatur iste dolores earum. Enim labore eaque ipsam maiores deleniti? Provident, eum? Odit ab, dolores, voluptatibus accusantium provident nam harum beatae a excepturi quae enim dicta eos ea totam? Magni nobis praesentium minima quas. Magni quaerat nobis perferendis, atque eligendi sint est ullam distinctio ab? Tenetur iusto nisi illo consequuntur dolore perferendis qui at delectus officiis consectetur error, hic molestias nostrum itaque possimus in optio ipsam cum? Non, voluptatibus ipsam ipsum reiciendis illo a corporis!</p>


      <Title principal="Tercer uso de mi title" />

      <p>Este es otro párrafo de ejemplo en la aplicación de React.</p>

    </>
  )
}
