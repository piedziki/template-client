import { BiLike, BiDislike } from "react-icons/bi";
import "./postbox.css"
import { useState } from "react";
import coracaov from "../assets/coracaored.png"
import coracaop from "../assets/coracaoblack.png"

function PostBox(title, text){
    const [countLike, setCountLike] = useState(0);
    const [countDislike, setCountDislike] = useState(0);

    let meucoracao = coracaop;
    if (countLike >= 1)
    meucoracao = coracaov;

    return(
        <div className="title">{title}
         <div className="corpo"> 
            <p>{text}</p>
            </div>
         <footer> 
            <p>  
            <button className="btnLike" onClick={() => setCountLike(countLike + 1)}>
                <img src= {meucoracao}/>
            </button> {countLike}
            <BiDislike className="btnLike"  onClick={() => setCountDislike(countDislike + 1)}/>
            {countDislike} 
            </p>
         </footer>
        </div>
    );
}
export default PostBox;