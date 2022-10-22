import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved,faClock, faMoneyBill } from '@fortawesome/free-solid-svg-icons'

export const Salvamento = () => {
  return (
    <Dialog.Portal>
            <Dialog.Overlay className='Overlay'/>
            <Dialog.Close className='btn-close'>
                <Cross2Icon/>
            </Dialog.Close>
            
            <Dialog.Content className='modal-content'>
                <h1>Salvamento em Espaço Confinado</h1>
                <h3 className='subTitles'>Objetivo</h3>
                <ul>
                    <li className='list-content'><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                      Capacitar profissionais da Brigada de Emergência através de procedimentos operacionais padronizados na intervenção inicial, envolvendo o resgate em espaço confinado, buscando a excelência em prevenção e segurança na aplicação das técnicas padronizadas.</li><br></br>
                    <li className='list-content'><FontAwesomeIcon icon={faClock} className='list-style'/>
                    Carga Horária: Conforme necessidade do contratante</li>
                    <li className='list-content'><FontAwesomeIcon icon={faMoneyBill} className='list-style'/>
                      Solicite um orçamento para mais detalhes</li>
                </ul>
                <h3 className='subTitles'>Conteúdo Programático</h3>
                <ul className='list-content'>
                  <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    <strong>NR 33</strong> - Segurança e Saúde no Trabalho em Espaços Confinados
                  </li>
                  <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Introdução aos fundamentos do resgate indrustrial
                  </li>
                  <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Objetivos da equipe de resgate
                  </li>
                  <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Padronização de procedimentos
                  </li>
                  <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Equipamentos
                  </li>
                  <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Técnicas e sistemas
                  </li>
                  <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Sistemas de Comando de Incidentes
                  </li>
                  <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Proteção Respiratória
                  </li>
                  <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Regras de Segurança
                  </li>
                  <li><FontAwesomeIcon icon={faShieldHalved} className='list-style'/>
                    Atividades práticas
                  </li>
                </ul>
            </Dialog.Content>
    </Dialog.Portal>
  )
}
