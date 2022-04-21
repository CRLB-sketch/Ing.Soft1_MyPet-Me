/**#######################################################################################
 * Universidad del Valle de Guatemala
 * Departamento de Ciencias de la Computación
 * Ingeniería de Software 1 - Sección 10
 * 
 * Me Pet & Me
 * ! Emergency: Mostrar mapa y solicitar que se atienda a la mascota
 * 
 * Integrantes:
 * Cristian Laynez
 * Elean Rivas
 * Sara Paguaga
 * Diego Ruiz
 * Javier Alvarez
 #######################################################################################*/

 import React from "react";

 function Emergency({setCurrentPage}) {

    const returnToMain = () => {
      setCurrentPage("#main")
      window.history.pushState({}, '', '/main')
    }

     return (
       <div>
          <button onClick={returnToMain}>← Regresar</button>
          <h1>Emergency</h1>
          <h1>Veterinarias más cercanas</h1>
          <button>Llamar ambulancia</button>
       </div>
     );
   }
   
 export default Emergency;
   