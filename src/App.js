import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/main";
import Cadastro from "./pages/cadastro";
import CalculadoraPage from "./pages/calculadora";

function App(){
   return(
       <BrowserRouter>
       <Routes>
           <Route  path="/" exact element = {< HomePage />}/>
           <Route  path="/registrar"  element = {< Cadastro />}/>
           <Route path="/calculadora" element={<CalculadoraPage />} />
          
           </Routes>

       </BrowserRouter>
   )
}

export default App;