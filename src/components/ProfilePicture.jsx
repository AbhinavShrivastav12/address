import React from 'react'
import '../index.css'
import { IoCloudUpload } from 'react-icons/io5'

const ProfilePicture = () => {
  return (
    <div className='profile-pic'>
      <p  style={{textAlign:"center", paddingBottom:"10px" }}>Profile Picture</p>
      <hr className="h-line"/>
      <picture>
        <img src="/uk.png" alt="Logo" />
      </picture>
      <div className='logo-seen'>
        <button><span>Edit Original</span><IoCloudUpload className='icons'/></button>
        <button><span>Upload New</span><IoCloudUpload className='icons'/></button>
      </div>
    </div>
  )
}

export default ProfilePicture
