import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Modelfile from "./model"


export default function TableComponent(showdata){

  const [tableData , setTableData] = useState(null);
  
  useEffect(()=>{
    fetch('https://67d7ed159d5e3a10152c9af5.mockapi.io/userdata/detail', {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(tasks => {
      // Do something with the list of tasks
      setTableData(tasks)
    }).catch(error => {
      // handle error
      console.log(error)
    })
  },[showdata.setrefresh])



  const deleteUser = (id) =>{
    
fetch(`https://67d7ed159d5e3a10152c9af5.mockapi.io/userdata/detail/${id}`, {
  method: 'DELETE',
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with deleted task
  alert("Deleted Successfully...!")
  showdata.getrefersh(!showdata.setrefresh)
}).catch(error => {
  // handle error
  console.log(error)
})
  }


  console.log(tableData)
  return(
    <>
    <Button variant={"success m-2"} onClick={()=>showdata.boxshow()}>&#43; ADD</Button>
    <Table striped bordered hover>
      <thead className='text-center'>
        <tr className='fs-4'>
          <th className='p-4 text-center bg-dark text-light'>S.No</th>
          <th className='p-4 text-center bg-dark text-light'>Name</th>
          <th className='p-4 text-center bg-dark text-light'>EmailID</th>
          <th className='p-4 text-center bg-dark text-light'>Phone No</th>
          <th className='p-4 text-center bg-dark text-light'>Qualification</th>
          <th className='p-4 text-center bg-dark text-light'>Location</th>
          <th className='p-4 text-center bg-dark text-light'>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData&&tableData.map((item,id)=>{
          return (
            <tr>
          <td className='p-3 text-center'>{id+1}</td>
          <td className='p-3 text-center'>{item.Name}</td>
          <td className='p-3 text-center'>{item.EmailId}</td>
          <td className='p-3 text-center'>{item.PhoneNo}</td>
          <td className='p-3 text-center'>{item.Qualification}</td>
          <td className='p-3 text-center'>{item.Location}</td>
          <td className='p-3 text-center'> <Button variant='info me-2' onClick={()=>showdata.boxshow(item)}>Edit</Button><Button variant='danger' onClick={() => deleteUser(item.ID)}>Delete</Button></td>
        </tr>
        
          )
        })}
        
        
      </tbody>
    </Table>
    </>
  )
}