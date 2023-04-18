import React, {useEffect, useState} from "react"
import Layout from "./Layout"

const employees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  }
]



const Home = () => {
// const [employees,setEmployees] = useState('')
const [sector,setSector] =useState(false)
const [showUser,setShowUser] = useState(false)
const [showAdmin,setShowAdmin] = useState(false)




const showEmployee = (item) => {
  return(
    <tr>

      <td>{item.name}</td>
      <td>{item.lastname}</td>
      <td>{item.position}</td>
    </tr>
  )
}
employees.map(showEmployee)

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
      {employees.map(showEmployee)}
    </tbody>
  </table>
</div>
<div id="table2" style={{display: 'none'}}>
<h3>Create User Here</h3>
<input type="text" placeholder="Name"/>
<input type="text" placeholder="Last Name"/>
<input type="text"placeholder="Position"/>
<button>Save</button>
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
