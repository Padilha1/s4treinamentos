import React from 'react'
import * as Dialog from "@radix-ui/react-dialog"
import '../../Css/Cursos.css'
import { Cross2Icon } from '@radix-ui/react-icons';


export const Brigada = () => {
  return (
    <Dialog.Portal>
            <Dialog.Overlay className='Overlay'/>
            <Dialog.Close className='btn-close'>
                <Cross2Icon/>
            </Dialog.Close>
            
            <Dialog.Content className='modal-content'>
                <h1>Brigada de Incêndio</h1>
                <h3 className='subTitles'>Objetivo</h3>
                <ul>
                    <li className='list-content'>Capacitar profissionais da Brigada de Emergência através de protocolos atualizados no atendimento inicial à vitimas de trauma ou doenças cardiovasculares, visando contribuir com a prevenção, diminuição de sequelas e óbitos que possam ocorrer nas atividades laborais.</li><br></br>
                    <li className='list-content'>Carga Horária: Conforme necessidade do contratante</li>
                    <li className='list-content'>Solicite um orçamento para mais detalhes</li>
                </ul>
                <h3 className='subTitles'>Conteúdo Programático</h3>
                <ul className='list-content'>
                    <li>Biossegurança</li>
                    <li>Cinemática do trauma</li>
                    <li>Sinais Vitais</li>
                    <li>Atendimento inicial ao paciente</li>
                    <li>Vias aéreas</li>
                    <li>Ressuscitação Cardirrespiratória - <strong>RCP</strong></li>
                    <li>Ferimentos, curativos e bandagens</li>
                    <li>Hemorragia e choque</li>
                    <li>Fratuas e luxações</li>
                    <li>Imobilizações e remoções</li>
                    <li>Emergências Clínicas</li>
                    <li>Atividades práticas</li>
                </ul>
            </Dialog.Content>
    </Dialog.Portal>
  )
}
