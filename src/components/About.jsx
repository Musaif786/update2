import React,{useEffect} from "react";
import Animation from "./Animation";
import Footer from "./Footer";
import PhotosBox from "./PhotosBox";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import "../css/About.css";
import Marquee from "./Marquee";
import Topbtn from "./Topbtn";
import AnimaNames from "./AnimaNames";
const About= ()=>{

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


  const img1 = "./images/zayed.jpg" ;
    return(<>
        {/* <h2>im About page</h2> */}
        {/* <Animation/> */}
        {/* <PhotosBox/> */}
        <Slider name='About-us' />
        <AnimaNames/>
        <Marquee/>
        <Topbtn/>

        {/* text */}
        <hr />
        <div id="about" className="container mb-3">
        <progress></progress>
        <h1 className="text-center">About Us.</h1>
          <p className="my-2 text-center">  
          Myself <span> Mohammed Zayed </span>and i'm a professional  furniture interior designer. we do all type's of wood works, and i have span of 20 plus year's of experience
          in this particular filed. and i have 40 plus expert worker's team we all are like a family.
          journey started in 2001 and i have done many project's like 
          hotel's interior work, shopping malls, medical hall, colth showroom interior and outside look, frames , store's and complete interior home etc... <br />
          <div className="container  text-center">

          <div className="col-10  col-sm-6 mx-auto ">

          <ul className="text-start">
            <li>  Cupboards</li>
            <li>  Kitchen</li>
            <li>  Beds</li>
            <li>  Tv Frames</li>
            <li>  Wood wall decoration</li>
            
          </ul> 
          <button className="btn btn-dark py-0 px-2"><Link className=" bg-opacity-10 text-decoration-none m-1 btn  py-0 px-2  text-white" to="/photos">More</Link></button>
         
          </div>
          </div>
            <span className=" p-0 fs-3 text-sm-start">We have other field expert worker's too</span>
          <div className="container  text-center">

          <div className="col-10  col-sm-6 mx-auto ">

          <ul className="text-start">
            <li> Electrician</li>
            <li>  Painter's</li>
            <li>  Tiles</li>
            <li>  Plumber</li>
            
            
          </ul> 
          <button className="btn btn-dark py-0 px-2"><a className=" bg-opacity-10 text-decoration-none m-1 btn  py-0 px-2  text-white" href="https://wa.me/+919550278896">More</a></button>
         
          </div>
          </div>


          {/* progre */}
          <hr />
          <div className="row text-center mt-3 ">
         <h1 className="text-center mb-5 mt-4">Projects</h1>
         <div className="col-4">
             <div id="h-4-bar"><div></div></div>
             <div className="mt-2" id="counting" data-val="10">0</div>
          <p className="mt-3">Running Project's.</p>
          </div>
          
          <div className="col-4">
             <div id="h-4-bar2"><div></div></div>
             <div className="mt-2" id="counting" data-val="40">0</div>
          <p className="mt-3">Fourty plus Expert Worker's.</p>
          </div>
          
          <div className="col-4">
             <div id="h-4-bar3"><div></div></div>
             <div className="mt-2" id="counting" data-val="385">0</div>
          <p className="mt-3">Successful Project's.</p>
          </div>
          
          <p className=" mt-3"> <h5 className=" mb-3"><strong> About Projects</strong></h5>
Computer table, chairs,tables, beds, kitchen words, cupboards,tvsets  and cabinets. fence furniture is used daily in homes, workplaces and public buildings. We present an enclosure furniture set consisting of four chairs and a furniture made of wood and various other materials all  types of playwoods and lamination as per the customer requirnment. Click below link to know more..
         
         <button className="btn btn-dark text-white p-0"><Link className="px-4 bg-opacity-10 text-decoration-none m-1 btn text-white py-0 px-4 bg-transparent" to="/photos">Enroll</Link></button>
         </p>

         </div>
 

          <br />
          Furniture is a big deal in the design industry. A well-executed concept can result in a timeless piece of furniture that never goes out of style.

With this in mind, we've found these inspirational examples of furniture design. Some are classics that have been around for years, others are recent and more modern. <br /><br />  <h4>

          Manufacturing Process 
          </h4>
Furniture manufacturing requires careful selection of good quality wood and proper use of the wood pieces by the craftsman. The carving and inlaying are called marquetry and is done by hand. The body of the piece must be made to check the construction and cutting. A cutting list is made, prices are calculated for various items such as consumables, fittings and ends, and processing time and appointments are estimated.
          
          </p>
        </div>

        {/* about z */}
        
          
         <div className="container text-center" ><h3 className="text-decoration-underline" >More Information you  can contact me</h3></div>
          
        <div id="center-box" className="container-fluid d-md-flex d-sm-block my-2 border-2">
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
       
          
          <Footer/>
    </>)
}
export default About;