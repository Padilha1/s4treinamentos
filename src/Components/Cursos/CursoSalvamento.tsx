import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'

export const CursoSalvamento = () => {
  return (
    <Dialog.Trigger className='Trigger'>
        <div className='card'>
            <div>
                <img src="/servicos/EQuimica-1.jpg" alt="" className='card-image'/>
                <h3 className='card-title'><strong>Salvamento em Espaço Confinado</strong></h3>
            </div>
        </div>
    </Dialog.Trigger>
  )
}
