import React from 'react'
import Comments from '../firebase/Comments';
import Contacts from '../firebase/Contacts'

const AllContacts = () => {
    return (
        <>
         <Contacts/>
         <Comments/>

        </>
    )
}

export default AllContacts;