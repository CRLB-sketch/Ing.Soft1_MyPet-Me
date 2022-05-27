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
            <div className="textCont">
                <img src="https://images.pexels.com/photos/247522/pexels-photo-247522.jpeg"></img>

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
                        <b>
                            Brindamos información acerca de veterinarias y los
                            doctores que atienden en ellas, para que puedas
                            llevar a tu mascota en caso de emergencia o atención
                            médica.
                        </b>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
