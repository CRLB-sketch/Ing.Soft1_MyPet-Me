/**#######################################################################################
 * Universidad del Valle de Guatemala
 * Departamento de Ciencias de la Computación
 * Ingeniería de Software 1 - Sección 10
 * 
 * Me Pet & Me
 * ! Main: Página principal de My Pet & Me
 * 
 * Integrantes:
 * Cristian Laynez
 * Elean Rivas
 * Sara Paguaga
 * Diego Ruiz
 * Javier Alvarez
 #######################################################################################*/

import React from 'react'
import '../styles/landingPage.css'
import HeaderComponent from './components/HeaderComponent'

function Main() {
    return (
        <div>
            <HeaderComponent className="header" />
            <div >

            <div className="textCont">
                

                <div class="text">
                    <h2>
                        <b>My Pet & Me</b>
                    </h2>
                    <h3>
                        {' '}
                        <b>
                            Brindandote tranquilidad a ti y bienestar a tu
                            mascota.
                        </b>
                    </h3>
                    <p>
                        <b className="description">
                        <br/>
                            Brindamos información acerca de veterinarias y los
                            doctores que atienden en ellas, para que puedas
                            llevar a tu mascota en caso de emergencia o atención
                            médica.
                        </b>
                    </p>
                </div>
                
            </div>
            <div className='overlay'></div>

            </div>
            
        </div>
    )
}

export default Main
