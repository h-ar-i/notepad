import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
// import { db } from '../firebase-config';
import { db } from '../components/firebase-config'
import { Link, useLocation } from 'react-router-dom'
import { updateDoc,doc } from 'firebase/firestore';
import { Button } from '@mui/material';





function NoteCard() {
  
    const location = useLocation()
    const data = location.state
    const [displayValue,setDisplayValue] = useState(data.description)
  
    const handleChange =(e)=>{
      setDisplayValue(e)
    }
  
    // console.log(displayValue);
    
    const editDescription = async()=>{
      const oneDoc = doc(db,'notes',data.id)
      console.log(oneDoc);
      updateDoc(oneDoc,{description:displayValue})
    }
  
    useEffect(()=>{
      editDescription()
    },[displayValue])
    
    return (
     <>
      <div>
          <h2 className='mt-2 ms-3'>{data.title}  <div>
       <Link to={'/'}> <i className="fa-solid fa-arrow-left ms-1 "></i> </Link>
       </div></h2>
          <ReactQuill className='mt-3' style={{height:'100px'}} placeholder='Enter details here....' theme="snow" value={displayValue} onChange={(e)=>handleChange(e)} />
       </div>
      

     </>
     

    )
  }
  
  export default NoteCard