import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";



const Header = ()=>{
  //darkmode new mthod harry bhai
  // const[mystyle, setMystyle] = useState({
  //   color:"white",
  //   backgroundColor :"black",
  // });
  const[text1 ,setText1]= useState("Dark");
  const[colors ,setColor]= useState({
    backgroundColor:"white",
    color:"white",
  });

  useEffect(()=>{
   
  
   
   const btnsss = document.getElementById('darkbtn');
   let testing = document.getElementById("testing");
   let abc;
  const darkmode2 =()=>{
    btnsss.addEventListener("click",function(){
      if(colors.color=="white"){

        setText1("White");
        
        
      }else{
       

          setText1("Dark");
        
      }
    })
      
    }
    darkmode2();
  })
  

    // var w = window.innerWidth;
    // // const [ text, setText ]= useState({
    // //   backgroundColor: "red",
    // //   color:"white",
    // // });
   

     //DarkMode button my old method
     const darkmode1 = ()=>{
         var body = document.querySelector('body');
         var testing= document.querySelector('#testing');
         var about =  document.getElementById('about');
         var card = document.querySelector('.card');
         var h1= document.querySelector('h1');
         var dflex= document.getElementById('d-flex');
        var header = document.querySelector('header');
        h1.classList.toggle('darkmode'); 
         body.classList.toggle('darkmode');
       header.classList.toggle('darkmode');
         card.classList.toggle('darkmode');
         about.classList.toggle('darkmode');
          body.style.backgroundColor = "black";
          let a=0;
          testing.innerHTML ="";
          if(a==0){

            testing.innerHTML ="black";
          }else{
            testing.innerHTML ="white";
          }

        
      
     }

//     var htoggle =()=>{
//     var ul = document.querySelector("ul");
    
//     if(ul.style.width <="500px"){
//     // ul.style.backgroundColor="white";
//     ul.style.display="flex";

//     }
//    }     

    return(<>
        {/* <header className="col-12 col-md-10">
        
            <div className="d-flex">
            <div className="logo">
                <Link to="/home">Fz_Furniture {w}</Link>
            </div>
              <ul className=" ul d-flex" >
                  <li><Link to="/home">Home <i className="fa fa-home" aria-hidden="true"></i></Link></li>
                  <li><Link to="/about">About <i className="fa fa-desktop" aria-hidden="true"></i></Link></li>
                  <li><Link to="/photos">Photos <i className="fa fa-photo" aria-hidden="true"></i></Link></li>
                  <li><Link to="/contact">Contact <i className="fa fa-phone" aria-hidden="true"></i></Link></li>
                   <button id="h-btn" onClick={htoggle} >click</button>
              </ul>
            </div>
        </header> */}

        {/* header css in index.css */}
     <header >
 <div style={colors} id="testing"></div>
     
        <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid mx-2">
    <Link className="navbar-brand text-white" to="/home">ZFWORK-INTERIOR-DESIGN</Link>
    <button id="h-toggle-btn" className="navbar-toggler btn bg-white btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="ul navbar-nav  me-1 mb-2 mb-lg-0 float-lg-end d-lg-flex  d-flex justify-content-between m-2 ">
        <li className="nav-item">
          <Link className="nav-link text-white active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/photos">Gallery</Link>
        </li>
        <li  className="nav-item">
          <Link className="nav-link text-white" to="/product">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">Contact_Us</Link>
        </li>
        <div id="h-btn-div">

        <button id="darkbtn"   onClick={darkmode1} className="btn-sm btn-outline-primary text-center m-0"><i class="fa fa-sun-o" aria-hidden="true"> {text1}</i>
</button>
        </div>
        
        
      </ul>
      

      {/* <ul id="h-btn" className="ml-0 bg-success">
       <button   onClick={darkmode1} className="btn-sm btn-outline-primary text-center m-0"><i id="darkbtn" class="fa fa-sun-o" aria-hidden="true">Dark</i>
</button>
      </ul> */}
  </div>
      </div>
  
</nav>

</header>








    </>)
}
export default Header; 