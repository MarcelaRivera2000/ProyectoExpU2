import React,{useState}  from 'react';
import Etiquetas from './Etiqueta.js';
import Like from '../assets/imagenes/like.png';
import dislike from '../assets/imagenes/dislike.png';
import Compartir from '../assets/imagenes/share.png';

const Apunte =({titulo,descripcion,etiquetas})=>{
        const[cont,setcont]= useState(0);
        const[dislik,setdislike]= useState(0);
        const[comp,setdomp]= useState(0);
        var aux=etiquetas.split("#");

        return (
            <div id="Contenido-Contener">
                <button id="btnFecha">Eliminar</button>
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
                        <p id="btnLikes" className="btnInterracion" onClick={()=>setcont(cont+1)}>
                        Like:{cont}<img src={Like} className="tamano" alt=""/>
                        </p>
                        <p id="btnDislikes" className="btnInterracion"  onClick={()=>setdislike(dislik+1)}>
                        Dislike:{dislik}<img src={dislike} className="tamano" alt=""/>
                        </p>
                        <p id="btnCompartir" className="btnInterracion" onClick={()=>setdomp(comp+1)}>
                        Share:{comp}<img src={Compartir} className="tamano" alt=""/>
                        </p>
                    </div>
                </div>

            </div>
        );
}

export default Apunte;