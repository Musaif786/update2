import React from "react";
import "../css/Slider.css";


const Slider= (props)=>{
    
    
    let images = [
        
        "./images/kitchen1.jpeg ", 
        "./images/kitchen2.jpeg ", 
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
    "./images/bed4.jpeg ",
    "./images/bed5.jpeg ",

    // kitchen1
];

    var num = 0;
    const  next= ()=>{
        var slider = document.querySelector('#slider');
        
        var body = document.querySelector('#d-flex');
        num++;
        if(num >=images.length){
            num=0;
        }
        slider.src = images[num];
        body.setAttribute("backgroundImage",`url"${images[num]}"`);
        // alert(images[num])
        
    }
    // pre
    const  pre= ()=>{
        var slider = document.querySelector('#slider');
        num--;
        if(num < 0){
            num=images.length-1;
        }
        slider.src = images[num];
        // alert(images[num])
        
    }

    return(<>
        <div  id="d-flex" className="container-fluid d-flex carousel slide carousel-fade "   data-bs-ride="carousel">
        <h1 className="mb-2">{props.collections} {props.name}</h1>
           <div >
               <img id="slider" src="./images/kitchen5.jpeg " alt="" />
           </div>
           <div className="btns mt-0">
           <button onClick={pre}>Preview</button>
           <button onClick={next}>Next</button>
           </div>
        </div>
    </>);
}
export default Slider;