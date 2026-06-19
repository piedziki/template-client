import './main.css';
import bolo from "../assets/florestanegra.webp";
function Doces (){
    return(
    <div className="grid-container"> 
    <header className="header"></header>
    <aside className="sidebar">Meu lateral</aside> 
    <main className="content">
    <img src={bolo}/>
</main>    
    </div>
        );
    }
 export default Doces;

