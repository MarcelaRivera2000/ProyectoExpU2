import React,{useState} from 'react';
import './assets/css/App.css';
import MenuVar from './Componetes/MenuVarIn.js';
import Form from './Componetes/AgregarApunte.js';
import TodoList from './Componetes/ApunteLista';
import Inicio from './Inicio';
import {Modal} from 'reactstrap';

function App () {
  const [inputText,setInputText] = useState ("");
  const [Apunte,setApunte]=useState ([]);
  const [ingreso,setIngreso]=useState (true);/*Abrir y cerrar Inicio*/

  const setLocalStorage = value =>{
    
  }
  return(
        <div className="App">

          <Modal isOpen={ingreso}>
              <Inicio setIngreso={setIngreso}/>
          </Modal>

          
          <header>
            <MenuVar/>
          </header>
          <div className="Koana wrapper">
            <Form inputText={inputText} 
             setInputText={setInputText}
             todo={Apunte} 
             setTodos={setApunte}/>
          </div>
          <TodoList todo={Apunte}/>
        </div>
    );
}

export default App;
