import React from "react";
import Animation from "./Animation";
import Footer from "./Footer";
import PhotosBox from "./PhotosBox";
import Slider from "./Slider";
const About= ()=>{
  const img1 = "./images/zayed.jpg" ;
    return(<>
        {/* <h2>im About page</h2> */}
        {/* <Animation/> */}
        {/* <PhotosBox/> */}
        <Slider name='About-us' />

        {/* text */}
        <div className="container">
        <h1 className="text-center">About Us.</h1>
          <p className="my-2 text-center">Furniture is a big deal in the design industry. A well-executed concept can result in a timeless piece of furniture that never goes out of style.

With this in mind, we've found these inspirational examples of furniture design. Some are classics that have been around for years, others are recent and more modern. <br /><br /> voluptatum, nihil voluptatibus incidunt reprehenderit! Tempore ratione doloremque repudiandae hic quidem, obcaecati esse, veritatis cumque sequi exercitationem quisquam repellendus distinctio sunt, tempora incidunt neque dolores voluptatibus consectetur? Voluptatem eius nisi cupiditate incidunt eaque sapiente totam a nemo maxime odit voluptate consectetur dolores assumenda, labore atque?  Labore natus perspiciatis pariatur at quaerat qui exercitationem, accusamus amet reiciendis praesentium eaque molestiae similique error esse nostrum expedita rem laudantium nisi aliquid? Ducimus deserunt distinctio corporis autem laborum facilis perferendis nostrum beatae, blanditiis ut dolorem quos 
          <br /><br /> <h4>

          Manufacturing Process 
          </h4>
Furniture manufacturing requires careful selection of good quality wood and proper use of the wood pieces by the craftsman. The carving and inlaying are called marquetry and is done by hand. The body of the piece must be made to check the construction and cutting. A cutting list is made, prices are calculated for various items such as consumables, fittings and ends, and processing time and appointments are estimated.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem non unde, asperiores rem ratione amet nesciunt sunt sapiente hic? Vero itaque molestiae quaerat exercitationem quibusdam laborum eos, laudantium quas commodi harum? Aliquid fuga amet in aut cumque ipsam quisquam voluptates asperiores, numquam atque culpa consectetur illum nihil quibusdam delectus sit necessitatibus! Sapiente consequatur illo voluptatibus nam rem cum quod beatae eius eligendi, nisi voluptatum consequuntur odit debitis perferendis facilis dicta veritatis atque harum quia natus labore dolorum quae? Incidunt ipsam voluptatibus dolorem unde veritatis, quasi aperiam quas expedita, minus, error ullam cumque assumenda iusto pariatur quia adipisci nisi consectetur molestiae.<br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perspiciatis illo a consequatur ut reiciendis neque est rerum cumque nostrum, incidunt distinctio vitae provident dolorum similique velit cupiditate quo esse quae ullam iusto repellendus ipsa in! Quisquam consequuntur laudantium laborum neque unde in eos, dolorum, soluta libero, nihil sequi minima?
          </p>
        </div>

        {/* about z */}
        
          
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
          
          <Footer/>
    </>)
}
export default About;