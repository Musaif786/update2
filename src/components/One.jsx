import React, { useState } from "react";
import "../css/One.css";

const One = () => {
  const [movies, setMovies] = useState([
    // {
    //   // names: "musaif",
    //   // comment: "hello how are u",
    // },
    // {
    //   name: "khan",
    //   comment: "fine",
    // },
    // {
    //   name: "juveriya",
    //   comment: "bro are u",
    // },
    // {
    //     name: "juveriya",
    //     comment: "bro are u",
    //   },
  ]);

  const [names, setNames]= useState("");
  const [comment, setComment]= useState("");

  const updatename=(e)=>{
    setNames(e.target.value);
  }
  const updatecomment=(e)=>{
    setComment(e.target.value);
  }
  const addcmt=(e)=>{
     e.preventDefault();
     setMovies(adding =>[...adding,{names:names, comment:comment}])

    //  const async =  await fetch("https://reactfirebasewebsite-46222-default-rtdb.firebaseio.com/",{
    //   method: 'POST',
    //   body: JSON.stringify({
    //     name: '',
    //     comment: '',
    //     // userId: 1,
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  }
  return (
    <>
    


      {/* form */}
      <form onSubmit={addcmt}>
        <label htmlFor="name">FullName</label>
          <input type="text" id="name" name="names" placeholder="enter yor name" value={names} onChange={updatename} />
          {/* <input type="text" name="comment" value={comment} onChange={updatecomment} /> */}
          <label htmlFor="comment">Feedback</label>
          <textarea value={comment} onChange={updatecomment} name="comment" id="comment" cols="30" rows="3"></textarea>
          <button>submit</button>
      </form>



      {/* <h3>{movies.length}</h3> */}
      <h1>{movies.map((x)=>(
          <h2 id="c-session"> Name: {x.names} <br /> Comment: {x.comment} </h2> 
          
      ))}</h1>
    </>
  );
};
export default One;
