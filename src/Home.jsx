import React, {useState} from "react"
import Layout from "./Layout"

const mockEmployees = [
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
  },
]

const Home = () => {
const [employees,setEmployees] = useState()
const [sector,setSector] =useState()
  return (
    <>
    <Layout/>
    <div>
      <h1>Generation Thailand</h1>
      <h1>React - Assessment</h1>
    </div>
<div>
<button>User Home </button>
<button>Admin Home Sector</button>
</div>
</>

   
  )
}



export default Home
