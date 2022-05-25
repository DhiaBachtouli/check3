import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from "bootstrap";


export default function fullname() {
    return (
       <>
       <Form.Control type="text" placeholder="Put your first name" />
       <Form.Control type="text" placeholder="Put your last name" />
       </>
    )
}