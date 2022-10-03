import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NavBar } from './Components/NavBar'
import Hero from './Components/Hero'
import { About } from './Components/About'
import { Cursos } from './Components/Cursos'
import { Galeria } from './Components/Galeria'
import { Contato } from './Components/Contato'
import { Clients } from './Components/Clients'
import { Footer } from './Components/Footer'

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
      <Contato/>
      <Footer/>
    </div>
  )
}

export default App
