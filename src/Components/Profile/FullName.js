import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';


export default function Fullname() {
    return (
       
       <div className='name'>

       <Form.Control type="text" placeholder="Put your first name" />
       <Form.Control type="text" placeholder="Put your last name" />

       </div>
      
    )
}
