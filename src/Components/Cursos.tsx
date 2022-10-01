import React from 'react'
import '../Css/Cursos.css'

export const Cursos = () => {
  return (
    <article id='Cursos' className='Cursos'>
        <h2>Cursos e Treinamentos</h2>
        <div className='grid'>
            <div className='card'>
                <img src="/aditional/boneco.jpg" alt="" className='card-image'/>
                <h3 className='card-title'> Socorrista </h3>
            </div>
            <div className='card'>
                <img src="/servicos/EQuimica-1.jpg" alt="" className='card-image'/>
                <h3 className='card-title'> Químicos </h3>
            </div>
            <div className='card'>
                <img src="/servicos/Segurança-300x300.png" alt="" className='card-image'/>
                <h3 className='card-title'> Espaço Confinado</h3>
            </div>
            <div className='card'>
                <img src="/servicos/Trab-Altura-300x300.jpg" alt="" className='card-image'/>
                <h3 className='card-title'> Trabalho em altura </h3>
            </div>
        </div>

    </article>
  )
}