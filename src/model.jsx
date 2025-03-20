import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal"
import { Button } from 'react-bootstrap';

export default function Modelfile(abc){
  
    console.log(abc.fieldData,"%%%")
    const updateData = () =>{
      
fetch(`https://67d7ed159d5e3a10152c9af5.mockapi.io/userdata/detail/${abc.fieldData.ID}`, {
  method: 'PUT', // or PATCH
  headers: {'content-type':'application/json'},
  body: JSON.stringify(abc.fieldData)
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  abc.getrefersh(!abc.setrefresh)
  alert("Success...!")
}).catch(error => {
  console.log(error)
})
abc.boxclose();
    }


    const createUser = () =>{
      fetch('https://67d7ed159d5e3a10152c9af5.mockapi.io/userdata/detail', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(abc.fieldData)
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(task => {
        // do something with the new task
        alert("Added Successfully...!")
        abc.getrefersh(!abc.setrefresh)
      }).catch(error => {
        // handle error
        console.log(error)
      })
      abc.boxclose();
    }
  return(
    <>
     <Modal show={abc.boxshow} onHide={abc.boxclose}>
        <Modal.Header closeButton>
          {abc.fieldData.ID ?  <Modal.Title>Modal heading</Modal.Title> :  <Modal.Title>Create Table</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                autoFocus
                defaultValue={abc.fieldData.Name}
                onChange={(e)=>abc.setFieldData({...abc.fieldData, Name:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                defaultValue={abc.fieldData.EmailId}
                onChange={(e)=>abc.setFieldData({...abc.fieldData, EmailId:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="tel"
                placeholder="000-111-222"
                autoFocus
                defaultValue={abc.fieldData.PhoneNo}
                onChange={(e)=>abc.setFieldData({...abc.fieldData, PhoneNo:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="MCA - Master of Computer Application"
                autoFocus
                defaultValue={abc.fieldData.Qualification}
                onChange={(e)=>abc.setFieldData({...abc.fieldData, Qualification:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Chennai"
                autoFocus
                defaultValue={abc.fieldData.Location}
                onChange={(e)=>abc.setFieldData({...abc.fieldData, Location:e.target.value})}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={abc.boxclose}>
            Close
          </Button>

          {abc.fieldData.ID ? <Button variant="primary" onClick={updateData}>
            Save Changes
          </Button> :  <Button variant="info" onClick={createUser}>Save</Button>}
          
         
        </Modal.Footer>
      </Modal>
    </>
  )
}