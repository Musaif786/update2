import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import "../firebase/firebass-css/Contacts.css";
import fireDb from "../firebase";
import {toast} from "react-toastify";

const initialstate = {
    name:"",
    email:"",
    contact:"",
    comment:"",
    date:"",
}


const Contacts = () => {
    const [state,  setState]= useState(initialstate);
    const [data, setData] = useState({});

    const {name,email,contact,comment,date}= state;

    const history = useNavigate();
    const handleinput = (e)=>{
  const {name,value}=e.target;
  setState({...state,[name]:value})

    }
    const handlesubmit = (e)=>{
   e.preventDefault();
   if(!name|| !contact || !comment ||! date){
       toast.error("plzz provide value in each input field")
   }else{
       fireDb.child("zfwork").push(state, (err)=>{
           if(err){
               toast.error(err);
           }else{
               toast.success("Comment has been added successfully");
           }
       });
       setTimeout(()=> history("/contact"),900);
   }
    }
    return (
        <div style={{marginTop: "8px"}}>
         <h1 className='comment-h1 mb-2'>Contact form</h1>
            <form id='forms' onSubmit={handlesubmit} style={{margin: "auto",padding:"15px",alignContent:"center",maxWidth:"700px"}}>
  <label htmlFor="name">Name</label>
  <input type="text" name="name" id="name" placeholder='name' value={name} onChange={handleinput} />
      
  {/* <label htmlFor="email">Email</label>
  <input type="email" name="email" id="email" placeholder='email' value={email} onChange={handleinput} /> */}
      
  <label htmlFor="contact">contact</label>
  <input type="number" name="contact" id="contact" placeholder='contact no' value={contact} onChange={handleinput} />

  <label htmlFor="comment">Date</label>
   <input type="date" name="date"  placeholder='date' value={date} onChange={handleinput}  />
  <label htmlFor="comment">Comment</label>
  <textarea cols="40" rows="5" type="text" name="comment" id="comment" placeholder='comment here...' value={comment} onChange={handleinput} />
      <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Contacts;
