import React, {useEffect, useState, Component} from "react"
import Layout from "./Layout"
import { v4 as uuidv4 } from 'uuid';





const Home = () => {
// const [employees,setEmployees] = useState('')
const [sector,setSector] =useState(false)
const [showUser,setShowUser] = useState(false)
const [showAdmin,setShowAdmin] = useState(false)
const [employees,setEmployees] =useState([])
// console.log(list)

const [item,setItem] =useState([employees])
console.log(item)

const showEmployee = (item,i) => {
// const newItem = [item];
  console.log(item);
  // console.log(newItem)
  return(
    <tr>

      <td>{item.name}</td>
      <td>{item.lastname}</td>
      <td>{item.position}</td>
  
    <td><button onClick={()=>deleteItem(item.id)}>Delete</button></td>
    </tr>
  )
}
employees.map(showEmployee)


function deleteItem(id){
 
//   const newItem = item.filter(t =>t.id !== id)
//   console.log(newItem)
//   setItem(newItem)
// setEmployees(newItem)
setEmployees(item.filter(it => it.id !== id))
}



const showEmployee2 = (item) => {
  return(
    <tr>
      <td>{item.name}</td>
      <td>{item.lastname}</td>
      <td>{item.position}</td>
     
    </tr>
  )
}
employees.map(showEmployee2)


// let arr;
// employees.map(arr);
// const [a,setA] =useState('');
// useEffect(()=>{if(showUser === true){
//   setA('user')
//   }
//   else{
//     setA('')
//   } 
// },[showUser])
//   useEffect(()=>{if(showAdmin === true){
//       setA('Admin')
//       }
//       else{
//         setA('')
//       }
//     },[ showAdmin])
const [name,setName] = useState('');
const [lastname, setLastName] =useState ('')
const [position, setPosition] = useState ('')

const inputName = (event) =>{
setName(event.target.value)
}
const inputLastName = (event) =>{
setLastName(event.target.value)
}
const inputPosition = (event) =>{
setPosition(event.target.value)
}
const saveItem = (event) =>{
  event.preventDefault()
  const inputData = {
    id: uuidv4(),
    name:name,
    lastname:lastname,
    position:position
  }
  employees.push({...inputData})
  console.log(employees);
//console.log(inputData);
setName('')
setLastName('')
setPosition('')
}

function MyFunc(){
  var tb = document.getElementById('table');
 
  if(tb.style.display === 'none'){
    tb.style.display = 'inline'
  
  }
  else{
    tb.style.display = 'none'
  }

}

function MyFunc2(){
  var tb = document.getElementById('table2');
  if(tb.style.display === 'none'){
    tb.style.display = 'inline'
  }
  else{
    tb.style.display = 'none'
  }
}
  return (
    <>
    <Layout/>
    <div>
      <h1>Generation Thailand</h1>
      <h1>React - Assessment</h1>
    </div>
<div>
{/* <button onClick={()=>setShowUser(true)}>User Home Sector</button>
<button onClick={()=>setShowAdmin(true)}>Admin Home Sector</button> */}

<button onClick={MyFunc} >User Home Sector</button>
<button onClick={MyFunc2} >Admin Home Sector</button>
</div>
{/* {a} */}
<div id="table" style={{display: 'none'}}>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>Position</th>
      </tr>
    </thead>
    <tbody>
      {employees.map(showEmployee2)}
      
    </tbody>
  </table>
</div>
<div id="table2" style={{display: 'none'}}>
<h3>Create User Here</h3>
<input type="text" placeholder="Name" onChange={inputName} value={name}/>
<input type="text" placeholder="Last Name" onChange={inputLastName} value={lastname}/>
<input type="text" placeholder="Position" onChange={inputPosition} value={position}/>
<button onClick={saveItem}>Save</button>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>Position</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {employees.map(showEmployee)}


    </tbody>
  </table>
</div>
</>

   
  )
}



export default Home
