import React , {useState , useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import axios from 'axios';

const EmployeesInfo = ({getData}) => {

  function handleClick(index){
    getData(index)
  }

  function deleteClick(Id){
   const newEmp = employees.filter((data)=> {
    if(data.id !== Id){
      return data;
    }
   })
   setEmployee(newEmp)
  }

    const [employees , setEmployee] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const url = "https://reqres.in/api/users";
            const res = await axios.get(url)
            const data = res.data;
            const daat = data.data;
            setEmployee(daat);
        }

        fetchData();
    }, [])



  return (
    <>
    <div style={{ margin : "30px"}}>
        <TableContainer
  component={Paper} 
  variant="outlined"
>
  <Table aria-label="demo table">
    <TableHead>
      <TableRow>
        <TableCell >Id</TableCell>
        <TableCell>First Name</TableCell>
        <TableCell>Last Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>View Details</TableCell>
        <TableCell>Delete Details</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {employees.map((employee , index)=>{
        return (
        <TableRow key={index}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{employee.first_name}</TableCell>
        <TableCell>{employee.last_name}</TableCell>
        <TableCell>{employee.email}</TableCell>
        <TableCell><Link to={`/employee/${employee.id}`}><Button variant='contained' color='info' onClick={()=>{handleClick(employee.id)}}>View</Button></Link></TableCell>
        <TableCell><Button variant='contained' color='error' onClick={()=>{deleteClick(employee.id)}}>Delete</Button></TableCell>
      </TableRow>
      )
      })}
    </TableBody>
  </Table>
</TableContainer>
    </div>
    </>
  )
}

export default EmployeesInfo