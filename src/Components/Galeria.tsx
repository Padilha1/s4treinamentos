import React from 'react'
import "../Css/Galeria.css"
import { useKeenSlider } from "keen-slider/react"


export const Galeria = () => {

  return (
    <section id='Galeria' className='Galeria'>
      <h2 className='gal-title'> Galeria </h2>
      
      <div className='gal-container'>
  
        <div className="gallery">
            <img src="/servicos/IMG-20211031-WA0047.jpg" alt="" width="600" height="400"/>
        </div>   
        <div className="gallery">
            <img src="/servicos/IMG-20211030-WA0022.jpg" alt="" width="600" height="400"/>
        </div>   
        <div className="gallery">
            <img src="/servicos/IMG-20211030-WA0025.jpg" alt="" width="600" height="400"/>
        </div>   
        <div className="gallery">
            <img src="/servicos/IMG-20211030-WA0026.jpg" alt="" width="600" height="400"/>
        </div>   
        <div className="gallery">
            <img src="/servicos/IMG-20211030-WA0032.jpg" alt="" width="600" height="400"/>
        </div>  
      </div> 
      
    </section>
  )
}
