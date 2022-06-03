/**#######################################################################################
 * Universidad del Valle de Guatemala
 * Departamento de Ciencias de la Computación
 * Ingeniería de Software 1 - Sección 10
 * 
 * Me Pet & Me
 * ! Popup: Mostrar los datos específicos de la veterinaria seleccionada
 * 
 * Integrantes:
 * Cristian Laynez
 * Elean Rivas
 * Sara Paguaga
 * Diego Ruiz
 * Javier Alvarez
 #######################################################################################*/

import React from 'react'
import '../styles/popup.css'
import { Avatar } from '@chakra-ui/react'
import { Skeleton } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { SocialIcon } from 'react-social-icons';

function Popup({ vet, regretOriginal }) {
    return (
        <div class="popup-div">
            <button onClick={() => regretOriginal(false)}>REGRESAR</button>
            <div class="body-a">
                <div class="vet-container">
                    <div class='img-info-cont'>
                        <Avatar
                            size="2xl"
                            name="Dan Abrahmov"
                            src="https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jpg"
                        />
                        <br class="break"></br>
                        <br class="break"></br>
                        <div class="info">
                            <h2>{vet['name']}</h2>
                            <Divider orientation="horizontal" />
                            <h1>Correo: {vet['address']}</h1>
                            <Divider orientation="horizontal" />
                            <h1>Número de telefono: {vet['phone']}</h1>
                            <Divider orientation="horizontal" />
                            <h1>Dirección: {vet['direction']}</h1>
                        </div>
                    </div>
                    
                    <SocialIcon url="https://twitter.com" />
                    <SocialIcon url='https://www.facebook.com/'/>
                    <SocialIcon url='https://arcadenoe.com.gt/'/>
                    <br></br>
                    <br></br>
                    <button class="emBtn">Ir allí</button>
                    <br></br>
                    <br></br>
                    <Skeleton height="20px" />
                    
                </div>
            </div>
            <footer class="footer-section">
                <div class="footer-grid">
                    <div class="footer-grid-elem">
                        <h4>My Pet & Me</h4>
                        <span>Universidad del Valle</span>
                    </div>
                    <div>
                        <h4>Ingeniería de Software</h4>
                        <span>9876543210 0</span>
                    </div>
                    <div>
                        <h4>Contactanos</h4>
                        <span>correo@ejemplo.com</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Popup
