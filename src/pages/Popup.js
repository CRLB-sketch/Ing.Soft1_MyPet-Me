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

function Popup({ vet, regretOriginal }) {
    return (
        <div>
            <button onClick={() => regretOriginal(false)}>REGRESAR</button>
            <div class="body-a">
                <div class="vet-container">
                    <Avatar
                        size="2xl"
                        name="Dan Abrahmov"
                        src="https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jpg"
                    />
                    <div class="info">
                        <h1>{vet['name']}</h1>
                        <Divider orientation="horizontal" />
                        <h1>Correo: {vet['address']}</h1>
                        <Divider orientation="horizontal" />
                        <h1>Número de telefono: {vet['phone']}</h1>
                        <Divider orientation="horizontal" />
                        <h1>Dirección: {vet['direction']}</h1>
                    </div>
                    <button class="emBtn">Ir allí</button>
                    <Skeleton height="20px" />
                </div>
            </div>
            <footer class="footer-section">
                <div class="container">
                    <div class="footer-cta pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="cta-text">
                                        <h4>My Pet & My</h4>
                                        <span>Universidad del Valle</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-phone"></i>
                                    <div class="cta-text">
                                        <h4>Ingeniería de Software</h4>
                                        <span>9876543210 0</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="far fa-envelope-open"></i>
                                    <div class="cta-text">
                                        <h4>Contactanos</h4>
                                        <span>correol@ejemplo.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-logo"></div>

                                    <div class="subscribe-form">
                                        <form action="#"></form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 text-center text-lg-left"></div>
                            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div class="footer-menu">
                                    <ul></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Popup
