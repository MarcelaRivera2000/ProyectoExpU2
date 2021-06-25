import React,{useState,useEffect} from 'react';
import './assets/css/App.css';
import MenuVar from './Componetes/MenuVarIn.js';
import Form from './Componetes/AgregarApunte.js';
import TodoList from './Componetes/ApunteLista';
var ApuntesList=[];

function App(){
  const [inputText,setInputText] = useState ("");
  const [Apunte,setApunte]=useState ([]);
  var storedList=localStorage.getItem('listaApuntes');
  console.log("dsa")
  useEffect(()=>{
    if(storedList == null){
      ApuntesList=[];
    }else{
      ApuntesList=JSON.parse(storedList);
      console.log(ApuntesList.length)
      for (let i = 0; i < ApuntesList.length; i++) { 
        var aux=ApuntesList[i];
        setApunte([
          ...ApuntesList,
          {titulo: aux.titulo,
          descripcion: aux.descripcion,
          etiquetas:aux.etiquetas,
          like:aux.like,
          dislike:aux.dislike,
          share:aux.share}]);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  console.log(ApuntesList)

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

/**for (let i = 0; i < ApuntesList.length; i++) { 
        var aux=ApuntesList[i];
        setApunte([
          ...Apunte,
          {titulo: aux.titulo,
          descripcion: aux.descripcion,
          etiquetas:aux.etiquetas,
          like:aux.like,
          dislike:aux.dislike,
          share:aux.share}]);
      } */