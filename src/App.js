import React,{useState} from 'react';
import './assets/css/App.css';
import MenuVar from './Componetes/MenuVarIn.js';
import Form from './Componetes/AgregarApunte.js';
import TodoList from './Componetes/ApunteLista';

function App () {
  const [inputText,setInputText] = useState ("");
  const [Apunte,setApunte]=useState ([]);


  return(
        <div className="App">
          <header>
            <MenuVar />
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
