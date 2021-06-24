import React,{useState}  from 'react';
import Etiquetas from './Etiqueta.js';
import Like from '../assets/imagenes/like.png';
import dislikeE from '../assets/imagenes/dislike.png';
import Compartir from '../assets/imagenes/share.png';

const Apunte =({titulo,descripcion,etiquetas,like,dislike,share})=>{
        const[likee,setlike]= useState(like);
        const[dislik,setdislike]= useState(dislike);
        const[sharee,setShare]= useState(share);
        var aux=etiquetas.split("#");
        let newDate=new Date();
        return (
            <div id="Contenido-Contener">
                <button id="btnFecha">{newDate.getDate()}/{newDate.getMonth()}/{newDate.getFullYear()}</button>
                <div id="Contenido-Tarea">
                    <h4 id="Titulo">{titulo}</h4>
                    <p id="Descripcion">{descripcion}</p>
                    <div id="Etiquetas">
                    {aux.map(aux=>(
                        <Etiquetas 
                            etiquetas={aux}
                        />))}  
                    </div>
                    <div id="Tarea-Interacciones">
                        <p id="btnLikes" className="btnInterracion" onClick={()=>setlike(likee+1)}>
                        Like:{likee}<img src={Like} className="tamano" alt=""/>
                        </p>
                        <p id="btnDislikes" className="btnInterracion"  onClick={()=>setdislike(dislik+1)}>
                        Dislike:{dislik}<img src={dislikeE} className="tamano" alt=""/>
                        </p>
                        <p id="btnCompartir" className="btnInterracion" onClick={()=>setShare(sharee+1)}>
                        Share:{sharee}<img src={Compartir} className="tamano" alt=""/>
                        </p>
                    </div>
                </div>
            </div>
        );
}

export default Apunte;