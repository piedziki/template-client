import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/main";
import Cadastro from "./pages/cadastro";
import Doces from "./pages/doces";

function App(){
   return(
       <BrowserRouter>
       <Routes>
           <Route  path="/" exact element = {< HomePage />}/>
           <Route  path="/registrar"  element = {< Cadastro />}/>
           <Route  path="/doces"  element = {< Doces />}/>
           </Routes>

       </BrowserRouter>
   )
}

export default App;