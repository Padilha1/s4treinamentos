import React from 'react'
import '../Css/Cursos.css'
import * as Dialog from '@radix-ui/react-dialog'
import { Brigada } from './Modais/Brigada'
import { BrigadaIncendio } from './Cursos/BrigadaIncendio'
import { CursoSalvamento } from './Cursos/CursoSalvamento'
import { Salvamento } from './Modais/Salvamento'
import { CursoNR33 } from './Cursos/CursoNR33'
import { NR33 } from './Modais/NR33'
import { NR35 } from './Modais/NR35'
import { CursoNR35 } from './Cursos/CursoNR35'

export const Cursos = () => {
  return (
    <section id='Cursos' className='Cursos'>
        <h2>Cursos e Treinamentos</h2>
        <div className='grid'>
            <Dialog.Root>
                <BrigadaIncendio/>
                <Brigada/>
            </Dialog.Root>
            <Dialog.Root>
                <CursoSalvamento/>
                <Salvamento/>
            </Dialog.Root>
            <Dialog.Root>
                <CursoNR33/>
                <NR33/>
            </Dialog.Root>
            <Dialog.Root>
                <CursoNR35/>
                <NR35/>
            </Dialog.Root>
        </div>

    </section>
  )
}
