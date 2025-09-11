import React from 'react'
import '../index.css'
import { IoCloudUpload } from 'react-icons/io5'

const ProfilePicture = () => {
  return (
    <div className='profile-pic'>
      <p  style={{textAlign:"center"}}>Profile Picture</p>
      <hr />
      <picture>
        <img src="/uk.png" alt="Logo" />
      </picture>
      <div className='post-city'>
        <button>Edit Original<IoCloudUpload/></button>
        <button>Upload New<IoCloudUpload/></button>
      </div>
    </div>
  )
}

export default ProfilePicture
