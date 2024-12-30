import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  let loading = {title: "Loading"};
  let URL = "https://jsonplaceholder.typicode.com/todos/1" ;
  const [todo, setTodo] = useState(loading);
  const [isData, setData] = useState();
  const [isFetching, setFetching] = useState(false);
  

  const getData = async () => {

    try {
    setFetching(true);
    const response = await fetch(URL);
    console.log("response : ", response);
    let data = await response.json();
    setTodo(data) ;
    setFetching(false);
    console.log("respon : ", todo);
    } 
    catch (error) {
      console.error("Fetch Error : ", error) ;
    }
  }

  useEffect(()=> (getData), [isData] ); // Whenever there is a change in isData, useEffect will rerender.
  // learn "Suspense" component for fethcing and display data yourself.

  if (isFetching) 
    { return <div> Data Loading ....  </div>
    }
  
  return (
    <div >
      Hello Fetch. <br/>
      <span> Title : {todo.title} </span> <br/>
      <button onClick={()=> setData(!isData)} style={{backgroundColor: "red"}}> Render useEffect</button>
    </div>
  );
}

export default App;
