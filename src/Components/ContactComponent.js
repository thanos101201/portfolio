import React, { useState } from 'react'
import NavComponent from './NavComponent'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

function Contact() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ body, setBody ] = useState("");

  return (
    <div style={{backgroundColor:'black', margin:'0', padding:'0', backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
      <NavComponent />
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-8 d-flex align-items-center'>
            <Form className='rounded p-5' style={{boxShadow:'0 0 10px rgba(255, 255, 255, 1)'}}>
              <FormGroup className='p-3'>
                <div className='row d-flex justify-content-center'>
                  <div className='col-12 col-md-3 d-flex align-items-center'>
                    <Label>
                      <h5 style={{color:'white'}}>Name</h5>
                    </Label>
                  </div>
                  <div className='col-12 col-md-8 d-flex align-items-center'>
                    <Input placeholder='Enter your name' onChange={(e) => setName(e.target.value)}  />
                  </div>
                </div>
              </FormGroup>
              <FormGroup className='p-3'>
                <div className='row d-flex justify-content-center'>
                  <div className='col-12 col-md-3 d-flex align-items-center'>
                    <Label>
                      <h5 style={{color:'white'}}>Email </h5>
                    </Label>
                  </div>
                  <div className='col-12 col-md-8 d-flex align-items-center'>
                    <Input placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}  />
                  </div>
                </div>
              </FormGroup>
              <FormGroup className='p-3'>
                <div className='row d-flex justify-content-center'>
                  <div className='col-12 col-md-3 d-flex align-items-center'>
                    <Label>
                      <h5 style={{color:'white'}}>Body</h5>
                    </Label>
                  </div>
                  <div className='col-12 col-md-8 d-flex align-items-center pl-3'>
                    <Input placeholder='Enter your message' type='textarea' onChange={(e) => setBody(e.target.value)}  />
                  </div>
                </div>
              </FormGroup>
              <FormGroup className='p-3'>
                <div className='row d-flex justify-content-center'>
                  <div className='col-12 col-md-3 d-flex align-items-center'>
                    <Button className='btn btn-success'>
                      <h5>Send</h5>
                    </Button>
                  </div>
                </div>
              </FormGroup>
            </Form>
        </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className='row d-flex justify-content-center pb-5'>
            <div className='col-3 d-flex align-items-center'>
              <Button style={{backgroundColor:'black'}} href="https://www.linkedin.com/in/pratik-singh-thakur-59b582192/">
                <h4>
                  <FaLinkedin />
                </h4>
              </Button>
            </div>
            <div className='col-3 d-flex align-items-center'>
              <Button style={{backgroundColor:'black'}} href="https://github.com/pratik-2020">
                <h4>
                  <FaGithub />
                </h4>
              </Button>
            </div>
            <div className='col-3 d-flex align-items-center'>
              <Button href="mailto:pratikthakur2019@gmail.com" style={{backgroundColor:'black'}}>
                <h4>
                  <CgMail />
                </h4>
              </Button>
            </div>
          </div>
          <br></br>
      </div>
    </div>
  )
}

export default Contact