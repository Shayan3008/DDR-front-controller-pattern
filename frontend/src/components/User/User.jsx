import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import Button from '@mui/material/Button';
import Table from "../Table/Table.jsx";
import UserTables from './UserTables.jsx';
import './User.css'
import  { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes  from 'prop-types'
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
import { useEffect } from 'react';


export default function User(props) {
  const[modal,setmodal]=useState(false)
  const[toggle,settoggle]=useState(false)
  const [data, setData] = useState([{
    "user_id":1,
    "name":"fahad",
    "password":"fahad123",
    "email":"fahad@gmail.com",
    "phone":"+92031234567",

    
},{
  "user_id":2,
    "name":"faruhk",
    "password":"faruhk123",
    "email":"faruhk@gmail.com",
    "phone":"+92031234567",
}])
  
  const handleSubmit = (e) => {
    const formData = new FormData(e.currentTarget)
    e.preventDefault();
  const temp =data[data.length-1].no
 let results = {'no':temp+1}



    for( let [key, value] of formData.entries()){

  //  results.push({
  //       key: key,
  //       value:value
  //     })
  results[key]=value
    }
  
  //  results.no=data[-1].no+1   
  let temp2= data
  temp2.push(results)

  setData(temp2);
  console.log(temp2)
  console.log(data)
  settoggle(true)
  setmodal(!modal)
  }
  return (
    <div>
      <Header/>
       {/* <Navmenu/> */}
      <div className="UserText">
        <h3>{props.title}</h3>
        
        <div>

          <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal) }>
            <ModalHeader toggle={()=>setmodal(!modal)}>
              Add New User
            </ModalHeader>
            <ModalBody> 
                <form  onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12}>
                      <div>
                        <label htmlFor="">
                          User Id
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Id'
                        name='Ads_shop'>
                      </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Name
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Name'
                        name='Ads_cat'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Password
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Password'
                        name='Instructions_shop'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Email
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Email'
                        name='views'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Phone Number
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Number'
                        name='views'>
                        </input>
                      </div>
                    </Col>
                  </Row>
                  <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}} type="submit">Save</button>
                <button className='btn mt-3' style={{backgroundColor:"#FFFFFF",color:"#0F6AAB"}}>Cancel</button>
                </form> 
          
                
            </ModalBody>
            
          </Modal>
          
          {/* <input className='search' type="search" placeholder='search'/> */}
          <button className='btn mt-0' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add User</button>
          <div className="space"></div>
        </div>
        <UserTables data={data}/>
      </div>
      {/* <div className='Tablebackground'></div> */}
      {/* <div  className='ui'>
            <Table theadData={theadData} tbodyData={tbodyData} />
      </div> */}

    </div>
    
  )
}
