import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import Button from '@mui/material/Button';
import './Category.css'
import CategoryTables from './CategoryTables.jsx';
import Table from "../Table/Table.jsx";
import  { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes  from 'prop-types'
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';


export default function Category(props) {
  const[modal,setmodal]=useState(false);
  const[toggle,settoggle]=useState(false);
  const [data, setData] = useState([{
    "cat_id":1,
    "cat_name":"Men Product",
    
},{
  "cat_id":2,
  "cat_name":"Women Product",
  
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
    <div >
      <Header/>
       <Navmenu/>
      <div className="CategoryText">
        <h3>{props.title}</h3>
        <div>
          <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal)}>
            <ModalHeader toggle={()=>setmodal(!modal)}>
              Add Category
            </ModalHeader>
            <ModalBody> 
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12}>
                      <div>
                        <label htmlFor="">
                          Category Id
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Category Id'
                        name='oldPassword'>
                      </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                        Category Name
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Category Name'
                        name='oldPassword'>
                        </input>
                      </div>
                      
                    </Col>
                  </Row>
                </form> 
                <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}}>Save</button>
                <button className='btn mt-3' style={{backgroundColor:"#FFFFFF",color:"#0F6AAB"}}>Cancel</button>
                
            </ModalBody>
            
          </Modal>
          {/* <input className='search' type="search" placeholder='search'/> */}
          <button className='btn mt-0' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Category</button>
          <div className="space"></div>
        </div>
      <CategoryTables data={data}/>
      </div>
      
     
    </div>
  )
}
