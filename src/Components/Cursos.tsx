import React from 'react'
import '../Css/Cursos.css'

export const Cursos = () => {
  return (
    <section id='Cursos' className='Cursos'>
        <h2>Cursos e Treinamentos</h2>
        <div className='grid'>
            
                <div className='card'>
                    <img src="/aditional/boneco.jpg" alt="" className='card-image'/>
                    <h3 className='card-title'><strong> Brigada de Incêndio</strong> </h3>
                </div>
                <div className='card'>
                    <div>
                        <img src="/servicos/EQuimica-1.jpg" alt="" className='card-image'/>
                        <h3 className='card-title'><strong>Salvamento em Espaço Confinado</strong></h3>
                        <div className='teste'>
                            hello
                        </div>
                    </div>
                    
                </div>
                <div className='card'>
                    <img src="/servicos/Segurança-300x300.png" alt="" className='card-image'/>
                    <h3 className='card-title'><strong>Capacitação NR 33 </strong></h3>
                </div>
                <div className='card'>
                    <img src="/servicos/Trab-Altura-300x300.jpg" alt="" className='card-image'/>
                    <h3 className='card-title'><strong>Capacitação NR 35 </strong></h3>
                </div>
            
        </div>

    </section>
  )
}
