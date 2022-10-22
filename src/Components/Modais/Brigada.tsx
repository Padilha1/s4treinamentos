import React from 'react'
import * as Dialog from "@radix-ui/react-dialog"
import '../../Css/Cursos.css'
import { Cross2Icon } from '@radix-ui/react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMoneyBill, faShieldHalved } from '@fortawesome/free-solid-svg-icons';


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
                  <li className='list-content'><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                  Capacitar profissionais da Brigada de Emergência através de protocolos atualizados no atendimento inicial à vitimas de trauma ou doenças cardiovasculares, visando contribuir com a prevenção, diminuição de sequelas e óbitos que possam ocorrer nas atividades laborais.
                  </li><br></br>
                  <li className='list-content'><FontAwesomeIcon icon={faClock} className='list-style'/>
                    Carga Horária: Conforme necessidade do contratante
                  </li>
                  <li className='list-content'><FontAwesomeIcon icon={faMoneyBill} className='list-style'/>
                    Solicite um orçamento para mais detalhes
                  </li>
                </ul>
                <h3 className='subTitles'>Conteúdo Programático</h3>
                <ul className='list-content'>
                    <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Biossegurança
                    </li>
                    <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Cinemática do trauma
                    </li>
                    <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Sinais Vitais
                    </li>
                    <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Atendimento inicial ao paciente</li>
                    <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Vias aéreas
                    </li>
                    <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Ressuscitação Cardirrespiratória - <strong>RCP</strong>
                    </li>
                    <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Ferimentos, curativos e bandagens
                    </li>
                    <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Hemorragia e choque
                    </li>
                    <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Fratuas e luxações
                    </li>
                    <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Imobilizações e remoções
                    </li>
                    <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Emergências Clínicas
                    </li>
                    <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Atividades práticas
                    </li>
                </ul>
            </Dialog.Content>
    </Dialog.Portal>
  )
}
