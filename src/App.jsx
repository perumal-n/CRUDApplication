import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableComponent from './table'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modelfile from './model'

function App() {

  const [tempData, setTempData] = useState({});

  const [value, setValue] = useState(false);
 
  const [show, setShow] = useState(false);
   const handleShow = (rowData) =>{ 
   if(rowData){
    setTempData(rowData)
   }else{
    setTempData({
      Name:null,
      EmailId:null,
      Location:null,
      PhoneNo:null,
      Qualification:null
    })
   }
    setShow(true);
  }
    const handleClose = () => setShow(false);

  return (
    <Container fluid className='p-4'>
      <Modelfile boxshow = {show} boxclose = {handleClose} fieldData = {tempData} setFieldData = {setTempData} setrefresh = {value} getrefersh = {setValue}/>
      <TableComponent boxshow = {handleShow} setrefresh = {value} getrefersh = {setValue} />
    </Container>
  )
}

export default App
