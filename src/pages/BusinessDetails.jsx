import React from 'react'
import NavBar from '../components/NavBar'
import OurLogo from '../components/OurLogo'
import ProfilePicture from '../components/ProfilePicture'
import AddressForm from '../components/AddressForm'
import '../index.css'

const BusinessDetails = () => {
return (
  <div>
    <NavBar/>
     <div className='main-page'>
    <AddressForm />
    <div className="line"></div>
   <div className='right-main'>
     <OurLogo />
    <ProfilePicture />
   </div>
  </div>
  </div>
)
}

export default BusinessDetails;
