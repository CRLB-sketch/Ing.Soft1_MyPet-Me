import React from "react";
import { Route, Routes } from 'react-router-dom';

import Main from "./pages/Main";
import Emergency from "./pages/Emergency";
import Login from "./pages/Login";
import Popup from "./pages/Popup";
import Search from "./pages/Search";
import Register from "./pages/Register"
import HeaderComponent from "./pages/components/HeaderComponent";

function App() {
      
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