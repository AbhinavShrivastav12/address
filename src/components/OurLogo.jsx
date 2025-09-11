import React from 'react'
import '../index.css'
import { IoCloudUpload } from 'react-icons/io5'
import { FaSearchPlus } from 'react-icons/fa'

const OurLogo = () => {
  return (
    <div className='our-logo'>
      <p style={{textAlign:"center"}}>Our Logo</p>
      <hr />
      <picture>
        <img src="/uk.png" alt="Logo"/>
      </picture>
      <div className='logo-left'>
        <p>Use Logo</p>
        <p>Choose Logo</p>
        <p>Preview Logo</p>
      </div>
      <div className='logo-right'>
        <div className='post-city'>
        <button>Yes</button>
        <button>No</button>
      </div>
      <button>Upload New<IoCloudUpload/></button>
      <button>Preview<FaSearchPlus/></button>
      </div>
    </div>
  )
}

export default OurLogo
