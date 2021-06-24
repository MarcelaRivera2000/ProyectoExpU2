import React,{useState} from 'react';
import {Modal} from 'reactstrap';

const Form =({setInputText,setTodos,todo})=>{
    let apunte={
        titulo:"",
        descripcion:"",
        etiquetas:"",
    }

    const[abrir,setAbrir]= useState(false);

    const submitTodoHandler=(e)=>{
        setInputText(apunte);
        e.preventDefault();
        setTodos([
            ...todo,
            {titulo: apunte.titulo,
            descripcion: apunte.descripcion,
            etiquetas:apunte.etiquetas,
            completed: false,
            favorite:false
        }
        ]);
        setInputText("");
    };

    const inputTitulo=(titulo)=>{
        apunte.titulo=titulo.target.value;
    };
    const inputDescripcion=(Descrip)=>{
        apunte.descripcion=Descrip.target.value;

    };
    const inputEtiquetas=(eti)=>{
        apunte.etiquetas=eti.target.value;
    };
    
    return (
        <div>
        <button id="btnAgregar" onClick={()=>setAbrir(!abrir)}>Agregar Apunte</button>
            <Modal isOpen={abrir} className="overlay" id="overlay">
                <div  className="popup" id="popup">               
                <a href="#" class="btn-cerrar-popup" id="btn-cerrar-popup" onClick={()=>setAbrir(!abrir)}>x</a>
                <h3 className ="wrapper">NUEVA APUNTE</h3>
                <form action="" className="wrapper">
                    <div className="contenedor">
                        <p>Titulo: 
                            <input id= "Vtitulo" type="text"  onChange={inputTitulo}/>
                        </p>
                        <textarea id="Vtext-area" onChange={inputDescripcion}></textarea>
                    </div>
                    <p>Etiquetas: <input id= "Vetiquetas" type="text" onChange={inputEtiquetas}/></p>
                    <button id="btnGuardar" className="btnGuardar" onClick={submitTodoHandler}>Guardar</button>
                </form>
                </div>
            </Modal>
        </div>        
        );  
    }

export default Form;
