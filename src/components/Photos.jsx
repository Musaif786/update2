import React from "react";
import AnimaNames from "./AnimaNames";
import Animation from "./Animation";
import Footer from "./Footer";
import PhotosBox from "./PhotosBox";
import Slider from "./Slider";
import Topbtn from "./Topbtn";
const Photos= ()=>{
    return(<>
      
     
     <Slider collections="Successfull Project's Gallery"/>
     <AnimaNames/>

     <PhotosBox/>
     <Topbtn/>
        {/* <Animation/> */}
     <Footer/>
    </>)
}
export default Photos;