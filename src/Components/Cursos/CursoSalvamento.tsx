import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'

export const CursoSalvamento = () => {
  return (
    <Dialog.Trigger className='Trigger'>
        <div className='card'>
            <img src="/aditional/boneco.jpg" alt="" className='card-image'/>
            <h3 className='card-title'><strong> Brigada de Incêndio</strong> </h3>
        </div>
    </Dialog.Trigger>
  )
}
