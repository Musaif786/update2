import React, { useEffect } from "react";
import "../css/PhotosBox.css";
import Aos from "aos";
import "aos/dist/aos.css";


 const PhotosBox = ()=>{ 

     useEffect(()=>{
          Aos.init({ duration:200});
     },[]);
     
const btns = ()=>{
   
//    var p = document.querySelector('#btn-box');
//    if(p.style.display="flex"){

//        p.style.display = 'none';
//    }else if(p.style.display="none"){
//     p.style.display = 'flex';
//    }
 document.getElementById("btn-box").classList.toggle('add');

}
  const imglistclick = ()=>{
//  let imgs =document.getElementById("g-imgs-list");
// imgs.classList.toggle("img-zoom");

  }
  //img zoom function
  useEffect(()=>{
       const a = document.querySelectorAll("img");
   const num = 0;
       a.forEach(conts =>{
            function updates(){
               
          conts.addEventListener("click",()=>{
               conts.classList.toggle("img-zoom");
                    })
                 
                 // alert(c);
               //   setTimeout(updates,10);
               }
                updates();
       })
  },[]);
  
// new btn1
// const btns1 = ()=>{
   
//      document.getElementById("btn-box1").classList.toggle('add');
    
//     }
var w = window.innerWidth;
var num=0;
var box =document.getElementsByClassName("PhotosBox");
var PBNext =()=>{
   
     num++;
     for(let i=0; i<box.length;i++){
          box[i].style.display="none";
     }
     if(num>=box.length){
          num=0;
      }
     
      box[num].style.display = "block";
  

}


function PBBack(){
     num--;
     for(let i=box.length-1; i>=0; i--){
box[i].style.display ="none";
     }
     if(num <0){
        num=box.length-1;
     }

     box[num].style.display = "block";
 }


     return(<><div className="wrapper">

     <div id="p-b-first" className="PhotosBox">
     <div className="center-box">

        
         {/* c1 */}

         <div data-aos="fade-right" className="photos-container">
             <h2>cupboard</h2>
             <img id="g-imgs-list" onClick={imglistclick} src="./images/cupboard1.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">We design furniture and related products for industrial, commercial and domestic clients balancing innovation, aesthetic appeal and functionality.we create designs for mass-produced as well as handcrafted furniture products. They must consider the function of an item of furniture, the way it looks and the limitations of the material that it is made from...
             <a className="text-primary text-decoration-none" href="https://m.facebook.com/mohd.zayed.121?fref=nf"> <button className="btn btn-outline-primary p-0 px-3 text-primary">More</button> </a><br />
              
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>
            
         </div>
 {/* 2 */}

 <div data-aos="fade-left" className="photos-container">
             <h2>cupboard</h2>
             <img id="g-imgs-list" onClick={imglistclick}  src="./images/cupboard2.jpeg" alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat maiores, labore unde reiciendis, ducimus aliquam illum asperiores, eligendi  amet veritatis enim unde? Ut nesciunt, libero alias doloremque sunt quo dolor ducimus quibusdam odit a vero, sit repellendus fugiat recusandae deserunt? Consequuntur placeat repellat molestiae! Veritatis odit commodi temporibus quaerat quas architecto aperiam eius autem? Quibusdam, esse!t.</p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>
            
         </div>

          {/* 3 */}

          <div data-aos="fade-right" className="photos-container">
             <h2>cupboard</h2>
             <img src="./images/cupboard3.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat maiores, labore unde reiciendis, ducimus aliquam illum asperiores, eligendi  amet veritatis enim unde? Ut nesciunt, libero alias doloremque sunt quo dolor ducimus quibusdam odit a vero, sit repellendus fugiat recusandae deserunt? Consequuntur placeat repellat molestiae! Veritatis odit commodi temporibus quaerat quas architecto aperiam eius autem? Quibusdam, esse!t.</p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>
            </div>

             {/* 4 */}

         <div data-aos="fade-left" className="photos-container">
             <h2>cupboard</h2>
             <img src="./images/cupboard4.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat maiores, labore unde reiciendis, ducimus aliquam illum asperiores, eligendi  amet veritatis enim unde? Ut nesciunt, libero alias doloremque sunt quo dolor ducimus quibusdam odit a vero, sit repellendus fugiat recusandae deserunt? Consequuntur placeat repellat molestiae! Veritatis odit commodi temporibus quaerat quas architecto aperiam eius autem? Quibusdam, esse!t.</p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>
            
         </div>
          {/* 5 */}

          <div data-aos="fade-right" className="photos-container">
             <h2>cupboard</h2>
             <img src="./images/cupboard5.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat maiores, labore unde reiciendis, ducimus aliquam illum asperiores, eligendi  amet veritatis enim unde? Ut nesciunt, libero alias doloremque sunt quo dolor ducimus quibusdam odit a vero, sit repellendus fugiat recusandae deserunt? Consequuntur placeat repellat molestiae! Veritatis odit commodi temporibus quaerat quas architecto aperiam eius autem? Quibusdam, esse!t.</p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>
            
         </div>

          {/* 6 */}

          <div data-aos="fade-left" className="photos-container">
             <h2>cupboard</h2>
             <img src="./images/cupboard6.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat maiores, labore unde reiciendis, ducimus aliquam illum asperiores, eligendi  amet veritatis enim unde? Ut nesciunt, libero alias doloremque sunt quo dolor ducimus quibusdam odit a vero, sit repellendus fugiat recusandae deserunt? Consequuntur placeat repellat molestiae! Veritatis odit commodi temporibus quaerat quas architecto aperiam eius autem? Quibusdam, esse!t.</p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>
          {/* 7 same change to 8 */}

          <div data-aos="fade-right" className="photos-container">
             <h2>cupboard</h2>
             <img src="./images/cupboard8.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat maiores, labore unde reiciendis, ducimus aliquam illum asperiores, eligendi  amet veritatis enim unde? Ut nesciunt, libero alias doloremque sunt quo dolor ducimus quibusdam odit a vero, sit repellendus fugiat recusandae deserunt? Consequuntur placeat repellat molestiae! Veritatis odit commodi temporibus quaerat quas architecto aperiam eius autem? Quibusdam, esse!t.</p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>
          {/* 9 */}

          <div data-aos="fade-left" className="photos-container">
             <h2>cupboard</h2>
             <img src="./images/cupboard9.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat maiores, labore unde reiciendis, ducimus aliquam illum asperiores, eligendi  amet veritatis enim unde? Ut nesciunt, libero alias doloremque sunt quo dolor ducimus quibusdam odit a vero, sit repellendus fugiat recusandae deserunt? Consequuntur placeat repellat molestiae! Veritatis odit commodi temporibus quaerat quas architecto aperiam eius autem? Quibusdam, esse!t.</p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>

          {/* 10 */}

          <div data-aos="fade-right" className="photos-container">
             <h2>cupboard</h2>
             <img src="./images/cupboard10.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat maiores, labore unde reiciendis, ducimus aliquam illum asperiores, eligendi  amet veritatis enim unde? Ut nesciunt, libero alias doloremque sunt quo dolor ducimus quibusdam odit a vero, sit repellendus fugiat recusandae deserunt? Consequuntur placeat repellat molestiae! Veritatis odit commodi temporibus quaerat quas architecto aperiam eius autem? Quibusdam, esse!t.</p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>

          {/* 11 */}

          <div data-aos="fade-left" className="photos-container">
             <h2>cupboard</h2>
             <img src="./images/cupboard11.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat maiores, labore unde reiciendis, ducimus aliquam illum asperiores, eligendi  amet veritatis enim unde? Ut nesciunt, libero alias doloremque sunt quo dolor ducimus quibusdam odit a vero, sit repellendus fugiat recusandae deserunt? Consequuntur placeat repellat molestiae! Veritatis odit commodi temporibus quaerat quas architecto aperiam eius autem? Quibusdam, esse!t.</p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>

        {/* beds 1 */}

          {/* 2 */}

          <div data-aos="fade-right" className="photos-container">
             <h2>Bed</h2>
             <img src="./images/bed2.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>

          {/* 3 */}

          <div data-aos="fade-left" className="photos-container">
             <h2>Bed</h2>
             <img src="./images/bed3.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>
          {/* 4 */}

          <div data-aos="fade-right" className="photos-container">
             <h2>Bed</h2>
             <img src="./images/bed4.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>
         {/* 5 */}

         <div data-aos="fade-up" className="photos-container">
             <h2>Bed</h2>
             <img src="./images/bed5.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div> 


              {/* 6 */}

          <div data-aos="fade-left" className="photos-container">
             <h2>Bed</h2>
             <img src="./images/bed6.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>
         {/* 7 */}

         <div data-aos="fade-right" className="photos-container">
             <h2>Bed</h2>
             <img src="./images/bed7.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>

  {/* 8 */}

  <div data-aos="fade-left" className="photos-container">
             <h2>Bed</h2>
             <img src="./images/bed8.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>

        {/* tvset1 */}



  {/* 1 */}

  <div data-aos="fade-up" className="photos-container">
             <h2>tvset</h2>
             <img src="./images/tvset1.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>
        
  {/* 2 */}

  <div data-aos="fade-right" className="photos-container">
             <h2>tvset</h2>
             <img src="./images/tvset2.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>
        
  {/* 3 */}

  <div data-aos="fade-left" className="photos-container">
             <h2>tvset</h2>
             <img src="./images/tvset3.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>
        
  {/* 4 */}
{/* 
  <div className="photos-container">
             <h2>tvset</h2>
             <img src="./images/tvset4.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div> */}
        
  {/* 5 */}

  <div data-aos="fade-up" className="photos-container">
             <h2>tvset</h2>
             <img src="./images/tvset5.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>
        
  {/* 6 */}

  <div data-aos="fade-right" className="photos-container">
             <h2>tvset</h2>
             <img src="./images/tvset6.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>
        
  {/* 7 */}

  <div data-aos="fade-left" className="photos-container">
             <h2>tvset</h2>
             <img src="./images/tvset7.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>
        
  {/* 8 */}

  <div data-aos="fade-right" className="photos-container">
             <h2>tvset</h2>
             <img src="./images/tvset8.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>
        
  {/* 9 */}

  <div data-aos="fade-left" className="photos-container">
             <h2>tvset</h2>
             <img src="./images/tvset9.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>
        
  {/* 10 */}

  <div data-aos="fade-up" className="photos-container">
             <h2>tvset</h2>
             <img src="./images/tvset10.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>

  {/* kitchen */}      
  {/* 1 */}

  <div data-aos="fade-right" className="photos-container">
             <h2>kitchen</h2>
             <img src="./images/kitchen1.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>
        {/* 2 */}

  <div data-aos="fade-left" className="photos-container">
             <h2>kitchen</h2>
             <img src="./images/kitchen2.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>
        {/* 3 */}

  <div data-aos="fade-right" className="photos-container">
             <h2>kitchen</h2>
             <img src="./images/kitchen3.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>
        {/* 4 */}

  <div data-aos="fade-up" className="photos-container">
             <h2>kitchen</h2>
             <img src="./images/kitchen4.jpg " alt="k4/img" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>

{/* 5 */}

<div data-aos="fade-left" className="photos-container">
             <h2>kitchen</h2>
             <img src="./images/kitchen5.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet.
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>    
        </div>




     </div>

     
        
     </div>

     {/* end */}
     
     {/* two box */}
     <div className="PhotosBox">
      {/* inside data */}
      <div className="center-box">

        
         {/* c1 */}

         <div data-aos="fade-right" className="photos-container">
             <h2>cupboard</h2>
             <img id="g-imgs-list" onClick={imglistclick} src="./images/cupboard1.jpeg " alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">We design furniture and related products for industrial, commercial and domestic clients balancing innovation, aesthetic appeal and functionality.we create designs for mass-produced as well as handcrafted furniture products. They must consider the function of an item of furniture, the way it looks and the limitations of the material that it is made from...
             <a className="text-primary text-decoration-none" href="https://m.facebook.com/mohd.zayed.121?fref=nf"> <button className="btn btn-outline-primary p-0 px-3 text-primary">More</button> </a><br />
              
             </p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>
            
         </div>
 {/* 2 */}

 <div data-aos="fade-left"  className="photos-container">
             <h2>cupboard</h2>
             <img id="g-imgs-list" onClick={imglistclick}  src="./images/cupboard2.jpeg" alt="" />
             <h1>date: 29/wed/2021</h1>
             <button onClick={btns} id="btn1" className="btn btn-dark px-4 my-2">More</button>
             <div id="btn-box">
             <p id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat maiores, labore unde reiciendis, ducimus aliquam illum asperiores, eligendi  amet veritatis enim unde? Ut nesciunt, libero alias doloremque sunt quo dolor ducimus quibusdam odit a vero, sit repellendus fugiat recusandae deserunt? Consequuntur placeat repellat molestiae! Veritatis odit commodi temporibus quaerat quas architecto aperiam eius autem? Quibusdam, esse!t.</p>
             <button id="btn1" onClick={btns} className="cancel-btn">
             <i class="fa fa-times" aria-hidden="true"></i>

             </button>
             </div>
            
         </div>
         </div>
     
      </div>

      {/* three box  more photos u can add here */}
     {/* <div className="PhotosBox"> </div> */}


   <div className="p-btn-box">
   <div className="p-btn-box-center">

    <button onClick={PBBack} className="p-btn-box-next"> <i class="fa fa-arrow-left" aria-hidden="true"></i>
</button>
    <button onClick={PBNext} className="p-btn-box-back"> <i class="fa fa-arrow-right" aria-hidden="true"></i>
</button>
    </div>
   </div>

    </div>
     </>);
 }
 export default PhotosBox;