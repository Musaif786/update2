import React from 'react'
import Comments from '../firebase/Comments';
import Contacts from '../firebase/Contacts';
import Footer from "./Footer";

const AllContacts = () => {
    return (
        <>
         <Contacts/>
         <Comments/>
         <Footer/>

        </>
    )
}

export default AllContacts;