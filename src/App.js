import React,{useEffect,useState} from 'react';

import './App.css';

function App() {
  const [users,setUsers]=useState([])
useEffect(()=>{
const users=()=>(
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((res)=>res.json())
  .then((res)=>setUsers(res))



)
users();
},[]);




  return (
    <div className="App">
     {
        users.map((e)=>(

          <div style={{border:"1px solid black"}}>
<h1>{e.name}</h1>
<h3>{e.address.city}</h3>
          </div>




        )
        
        
        
        )


     }
    </div>
  );
}

export default App;
