import React, { useState } from "react";



//Very very important database
const Form= ()=>{
    const [user,setUser] = useState({
        fname:"",
        comnt: "",
        feedback:"",
    })
    let name,value;
    const onchange=(e)=>{
         name= e.target.name;
         value = e.target.value;
   setUser({...user, [name]:value});
    };
    const submitdata = async(e)=>{
        e.preventDefault();

         const { fname,feedback, comnt }= user;
         if(fname && feedback && comnt){

         
        const res = await fetch("https://reactfirebasewebsite-46222-default-rtdb.firebaseio.com/user.json",{
        method: "POST",
        headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            fname,
            comnt,
            feedback,
          }),
        
        }
        ).then((response) => response.json())
        .catch((e)=>{
            alert("technical error"+e)
        });
    
        if(res){
            alert("Your data has been stored thanks for giving your valuable of time");
        }else{
            alert("try again");
        }

         }else{
            alert("PLease fill the data");
        }
    }
 return(<>
 <div id="form" className="container">

 
 <form method="POST"  onSubmit={submitdata}> 
   <label htmlFor="name"> Username: </label>
     <input type="text" placeholder="fullname" name="fname" id="name" onChange={onchange} value={user.fname} required />
    
    <label htmlFor="email">Contact </label>
     <input type="text" name="comnt" id="email" placeholder="email or phone number" onChange={onchange} value={user.comnt} required />

   <label htmlFor="feedback">Feedback</label>
     <textarea name="feedback" id="" cols="30" value={user.feedback} onChange={onchange} placeholder="your text here" rows="4"></textarea>
     <button className="btn btn-primary mt-2 px-3">submit</button>
 </form>
 </div>
 </>)
}
export default Form;