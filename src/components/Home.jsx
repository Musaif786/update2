import React ,{useEffect, useState} from "react";
import "../css/home.css";
import Footer from './Footer';
import Topbtn from "./Topbtn";
import { Link } from "react-router-dom";
import AnimationHome from "./AnimationHome";


const Home = () => {


//    let imgs = Math.floor(Math.random() * 3 );
   let a;
   
   
//    //backbtn
//    let btn = () => {
//        a= document.querySelector("img");
//        a.setAttribute("src","./images/cupboard1.jpeg ");
//        a.classList.add("add");
       
//     // a.setAttribute = setImg(img_list[imgs]);
// };
// // setInterval(btn,1000);
// //front btn
// let btn1 = () => {
//      document.querySelector("img").setAttribute("src","./images/kitchen5.jpeg ").classList.toggle("add");
    
//  // a.setAttribute = setImg(img_list[imgs]);
// };

// slider top images

let images = [
        
  // "./images/kitchen1.jpeg ", 
  // "./images/kitchen2.jpeg ", 
  "./images/kitchen3.jpeg ", 

  "./images/kitchen5.jpeg ", 
  
  "./images/cupboard2.jpeg ",
  "./images/cupboard3.jpeg ",
  "./images/cupboard4.jpeg ",
  "./images/cupboard7.jpeg ",
  "./images/cupboard1.jpeg ",

"./images/tvset1.jpeg ",
"./images/tvset2.jpeg ",
"./images/tvset3.jpeg ",
"./images/tvset4.jpeg ",
"./images/tvset5.jpeg ",
"./images/tvset6.jpeg ",

"./images/bed1.jpeg ",
"./images/bed2.jpeg ",
"./images/bed3.jpeg ",



// kitchen1
];

var num = 0;
const  next= ()=>{
  var slider = document.querySelector('#h-img-slider');
  
  //var body = document.querySelector('#d-flex');
  num++;
  if(num >=images.length){
      num=0;
  }
  slider.src = images[num];
  //body.setAttribute("backgroundImage",`url"${images[num]}"`);
  // alert(images[num])
  
}
// pre
const  pre= ()=>{
  var slider = document.querySelector('#h-img-slider');
  num--;
  if(num < 0){
      num=images.length-1;
  }
  slider.src = images[num];
  // alert(images[num])
  
}

const imgs = "./images/card.jpeg ";

const img1 = "./images/zayed.jpg" ;

 //counting in 4th part
 useEffect(()=>{

 
  const counting =document.querySelectorAll('#counting');
const speed = 100;
counting.forEach(function(e){
    function update(){
       const target = +e.getAttribute("data-val");
      const count = +e.innerHTML;
      const incress = target / speed;
       
      if(count < target){
        e.innerHTML = Math.ceil( count+incress);
        setTimeout(update,100);
      }else{
        e.innerHTML = target;
      }
      
       //  alert(target);
    }
    update();
});   

});

// typing
let msg = "Preparing or directing preparation of blueprints containing manufacturing specifications, such as dimensions, wood type, and upholstery fabrics to be used in manufacturing article..";

useEffect(function(){


 let a = 0;
 let typ = document.getElementById("typing");
  // let c= typ.innerText = "";
  function typing(){
    if(a<msg.length){
      typ.innerHTML += msg.charAt(a);
      a++;
      setTimeout(typing,100); 
    }
   }
   typing();
  },[])

  
  return (
    <>
      <main>
      <Topbtn/>
      <AnimationHome/>
      
        <div className="container-fluid">
          <div className="left">
              <div className="row">
              <div id="main-div" className="col-10 text-center d-flex mt-3">
              {/* <p>{fruits_list[imgs]}</p> */}
              <div className="h-img-box1">
              <img id="h-img-slider" src={imgs} alt="img/auto" />

              </div>
              <p id="typing" className="my-2"> 
              {/* {msg} */}
              </p>
              <ul>
                  <li id="a"><button className="btn1 "><a id="a" href="https://m.facebook.com/mohd.zayed.121?fref=nf">More</a> <i className="fa fa-external-link " aria-hidden="true"></i></button> </li>
 
 
              </ul>
              <button  onClick={pre} className="arrowl"> <i className="fa fa-arrow-left" aria-hidden="true"></i></button>
              <button onClick={next} className="arrowr"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
               </div>

              </div>
          </div>
      <hr />

      {/* box below the 1st zayed box */}
          <div id="center-box" className="container-fluid d-md-flex d-d-sm-block my-2">
             <div className="h-center d-sm-block text-md-center mt-lg-5 mt-4">
             <h3 className="">Mohammed Zayed</h3>
             <p>Address: Banjara Hill's Road No:-12 Hyderabad <br />
             Phone <i className="fa fa-phone" aria-hidden="true"></i> 
                : 9550278896 <br />
             Email <i className="fa fa-envelope-o" aria-hidden="true"></i>
 :  <a href = "mailto:mohdzayed9@gmail.com?subject = Feedback&body = Message">
Send Mail
</a> <br />
   WhatsApp <a className="text-decoration-none " href="https://wa.me/+919550278896"> <i className="fa fa-whatsapp" aria-hidden="true"></i>
 </a>
             </p>
             </div>

             <div className="h-img-box d-flex">
             <div className="h-img-box-left">
               <p>Master of Contractor</p>
               <h1>We design custom pieces or styles according to specific requirnment</h1>
             </div>
             <div className="h-box-img"> <img src={img1} alt="auto/img" /></div>

             </div>
          </div>
              
        {/* 2nd box amer box */}
         
        <div id="center-box" className="container-fluid d-md-flex d-d-sm-block my-2">
             <div className="h-center d-sm-block text-md-center mt-lg-5 ">
             <h3>Amar Gupta</h3>
             <p> Address: Banjara Hill's Road No:-12 Hyderabad </p>
             </div>

             <div className="h-img-box d-flex">
             <div className="h-img-box-left">
               <p> Master of Assistant</p>
               <h1>We work Together and aim to give 100% customer satisfaction.</h1>
             </div>
             <div className="h-box-img"> <img src="./images/amar.jpeg
" alt="auto/img" /></div>

             </div>
          </div>

        </div>
    {/* home 3rd part cards */}
        <div id="h-3" className="container" >
        <div className="row mt-4 ">
        <h1 className="text-center mt-3" >Team</h1>
        <p className="text-center my-3">Team leaders play an important role in setting the stage for team success. Each member of the team should be acknowledged and encouraged to share ideas. UC Berkely suggests that cultivating shared values of trust, respect and cooperation build cohesion. When team members feel needed, they are more likely to feel personally invested in achieving the goals of the group.</p>
        {/* card rows */}
       
         {/* card rows */}
         <div className="row">
          <div className="col-10 col-xl-4 m-auto">
        <div className="card text-black" > 
        <img id="card-img" src="./images/zayed.jpg" class="card-img-top" alt="img"/>
          <div class="card-body">
    <h5 class="card-title">Mohammed Zayed</h5>
    <p  className="p-0 m-0 text-decoration-underline"> <em><italic>Contractor</italic></em></p>
    <p class="card-text">Improving the end-to-end customber experience</p>
    <Link to="/about" class="btn btn-primary">More</Link>
  </div>
  </div>

          </div>

 {/* card 2 */}
          <div className="col-10 col-xl-4 m-auto my-3">
        <div className="card text-black" > 
        <img id="card-img" src="./images/amar.jpeg" class="card-img-top" alt="img"/>
          <div class="card-body">
    <h5 class="card-title">Amar Gupta</h5>
    <p  className="p-0 m-0 text-decoration-underline"> <em><italic>Quality check</italic></em></p>
    <p class="card-text">Improving the end-to-end customber experience</p>
    <Link to="/photos" class="btn btn-primary">More</Link>
  </div>
  </div>

          </div>

          {/* card 3 */}
          <div className="col-10 col-xl-4 m-auto">
        <div className="card text-black" > 
        <img id="card-img" src="./images/rakesh.jpeg" class="card-img-top" alt="img"/>
          <div class="card-body">
    <h5 class="card-title">Rakesh</h5>
    <p  className="p-0 m-0 text-decoration-underline"> <em><italic>Customer Service</italic></em></p>
    <p class="card-text">Improving the end-to-end customber experience</p>
    <Link to="/photos" class="btn btn-primary">More</Link>
  </div>
  </div>

          </div>
        </div>
        



       

        </div>
        </div>

        {/* home 4th part projects  and video*/}
 <hr />
        <div className="container mt-3"> 
         <div className="row text-center ">
         <h1 className="text-center mb-5">Projects</h1>
         <div className="col-6">
             <div id="h-4-bar"><div></div></div>
             <div className="mt-2" id="counting" data-val="10">0</div>
          <p className="mt-3">Running Project's.</p>
          </div>
          
          {/* <div className="col-4">
             <div id="h-4-bar2"><div> </div>350+</div>
          <p className="mt-3">Total Project's</p>
         
          </div>  */}
          
          <div className="col-6">
             <div id="h-4-bar3"><div></div></div>
             <div className="mt-2" id="counting" data-val="385">0</div>
          <p className="mt-3">Successful Project's.</p>
          </div>
         <p className=" mt-3"> <h5 className=" mb-3"><strong> About Projects</strong></h5>
Chairs, tables, beds, kitchen words, cupboards,tvsets  and cabinets. fence furniture is used daily in homes, workplaces and public buildings. We present an enclosure furniture set consisting of four chairs and a furniture made of wood and various other materials all  types of playwoods and lamination as per the customer requirnment. Click below link to know more..
         
         <button><Link className="px-4 bg-opacity-10 text-decoration-none m-1 btn  py-0 px-4 bg-transparent" to="/photos">Enroll</Link></button>
         </p>

         </div>

         <div className="row ">
          <div className="col-10 my-5 mx-auto">
          <video width="100%" height="400px" loop controls  muted >
  <source src="./videos/one.mp4" type="video/mp4"/>
  
  Your browser does not support the video tag .
         </video>
          

           
          </div>
         </div>
        </div>
       
      </main>
      <Footer/>
    </>
  );
};
export default Home;
