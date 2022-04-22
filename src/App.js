/**#######################################################################################
 * Universidad del Valle de Guatemala
 * Departamento de Ciencias de la Computación
 * Ingeniería de Software 1 - Sección 10
 * 
 * Me Pet & Me
 * ! App: Para unir todos los componentes
 * 
 * Integrantes:
 * Cristian Laynez
 * Elean Rivas
 * Sara Paguaga
 * Diego Ruiz
 * Javier Alvarez
 #######################################################################################*/

// ---------------------------------------------------------------------------------------
// -> Importar los paquetes importantes
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// -> Importar el resto de las páginas
import Main from "./pages/Main";
import Emergency from "./pages/Emergency";
import Login from "./pages/Login";
import Popup from "./pages/Popup";
import Search from "./pages/Search";
import VetView from "./pages/Vetview";
import Register from "./pages/Register"
import HeaderComponent from "./HeaderComponent";

// ---------------------------------------------------------------------------------------
 
function App() {

  const [currentPage, setCurrentPage] = useState("#main")

  useEffect(() => {
    window.history.pushState({}, '', '/main')
  })

  // -> Página Principal ----------------------------------------------------------------
  if(currentPage === '#main'){
    return (
      <Main
        setCurrentPage={setCurrentPage}
      />
    )
  }

  // -> Página Principal ----------------------------------------------------------------
  if(currentPage === '#emergency'){
    return (
      <Emergency
        setCurrentPage={setCurrentPage}
      />
    )
  }

  // -> Página Principal ----------------------------------------------------------------
  if(currentPage === '#login'){
    return (
      <Login
        setCurrentPage={setCurrentPage}
      />
    )
  }

  // -> Página Principal ----------------------------------------------------------------
  if(currentPage === '#popup'){
    return (
      <Popup
        setCurrentPage={setCurrentPage}
      />
    )
  }

  // -> Página Principal ----------------------------------------------------------------
  if(currentPage === '#search'){
    return (
      <Search
        setCurrentPage={setCurrentPage}
      />
    )
  }

  // -> Página Principal ----------------------------------------------------------------
  if(currentPage === '#vetview'){
    return (
      <VetView
        setCurrentPage={setCurrentPage}
      />
      )
    }

  if(currentPage === '#register'){
    return (
      <Register
        setCurrentPage={setCurrentPage}
      />
      )
    }
      
  // -> Por si no se selecciono una de las páginas anteriores ---------------------------
  return (
    <Routes>
    <Route path='/' element={<> <Main/>  </>}></Route>
    <Route path='/emergency' element={<> <HeaderComponent/> <Emergency/>  </>}></Route>
    <Route path='/search' element={<> <HeaderComponent/> <Search/>  </>}></Route>
    <Route path='/login' element={<> <Login/>  </>}></Route>
    <Route path='/register' element={<>  <Register/>  </>}></Route>
    <Route path='/Popup' element={<>  <Popup/>  </>}></Route>
  </Routes>
  );
}

export default App;