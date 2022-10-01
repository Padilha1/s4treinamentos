import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NavBar } from './Components/NavBar'
import Hero from './Components/Hero'
import { About } from './Components/About'
import { Cursos } from './Components/Cursos'
import { Galeria } from './Components/Galeria'
import { Form } from './Components/Form'
import { Clients } from './Components/Clients'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <About/>
      <Cursos/>
      {/* <Clients/> */}
      <Galeria/>
      <Form/>
    </div>
  )
}

export default App
