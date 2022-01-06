import React, { useEffect } from "react";
import "../css/AnimationHome.css";

const AnimationHome = () =>{

 useEffect(()=>{
    
    let a =document.querySelector(".A-container"); 
    function abc(){
    a.style.display = 'none';
     }
      setTimeout(abc, 16000);

     
      a.addEventListener('click', function(){
        let audio = document.querySelector("audio");
        audio.play();
        
      })

 })

 const texts = ` Welcome to ZFWORK-INTERIOR-DESIGN We are thrilled to have someone with such impeccable taste amongst us`;
 let a=0;
 useEffect(()=>{
     let type = document.querySelector('#typ');
     function typing(){
     if(a<texts.length){
         type.innerHTML += texts.charAt(a);
     };
     a++;
     setTimeout(typing,100)

     }
     typing();
  
      

 })

    return(<>
      <div className="A-container">
      <div className="audio-box"><audio src="./mp3/one.mp3">audio</audio> </div>
      <div className=" a-zero col-lg-8 m-auto"><h3 id="typ"></h3></div>
      <div className="a-img col-sm-12 d-sm-none"> <img src="./images/a.jpg" alt="" /> </div>
      {/* first animation */}
          {/* <div className="A-box row ">
          <div className="col-5 align-self-auto m-auto ">
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, harum doloremque fugit quisquam ipsum totam rem soluta  commodi!</p>
          </div>

          <div className="col-5 align-self-auto m-auto ">
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, harum doloremque fugit quisquam ipsum totam rem soluta cum placeat sapiente autem minus officiis sunt delectus provident quasi excepturi commodi!</p>
          </div>
           </div> */}

           {/* 2nd animation */}

           <div className="A-two row">
         <div className="a-plane"><h1 className="text-white"><i class="fa fa-fighter-jet" aria-hidden="true"></i>
</h1> </div>
           </div>
      </div>
    </>);
}
export default AnimationHome;