import React from "react";

const Footer = ()=>{

    let year = 2021;
    return(
        <> <footer> 
        <h2 className="footer-h2"><i class="fa fa-copyright" aria-hidden="true"></i> {year} <a className="text-dark text-decoration-none" href="https://wa.me/+917995587687"> Musaif </a></h2>

        <div className="container-fluid bg-info">
            <div className="col-6 col-xl-3 mx-auto  p-0 ">
           <ul className="d-flex list-unstyled align-items-center justify-content-between fs-6 py-2">
           <li> <a className="text-dark text-decoration-none" href="https://wa.me/+919550278896">  Whatsapp <i class="fa fa-whatsapp" aria-hidden="true"></i>
</a></li>
               <li className="mx-2"> <a className="text-dark text-decoration-none " href="https://www.facebook.com/mohd.zayed.121">  Facebook <i class="fa fa-facebook" aria-hidden="true"></i>
</a></li>
               <li> <a className="text-dark text-decoration-none" href="https://www.instagram.com/musaif_programmer/">  Instagram <i class="fa fa-instagram" aria-hidden="true"></i>
</a></li>
           </ul>
            </div>
        </div>
        </footer></>
    )
}

export default Footer;