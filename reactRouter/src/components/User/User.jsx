import React from 'react'
import { useParams } from 'react-router-dom' // useParams is a hook that returns an object of key/value pairs of URL parameters

function User() {
    const {userid} = useParams() // Destructuring the userid from the URL   
  return (
    <div className='text-2xl font-bold text-center mt-10'>  
      user:{userid}
    </div>
  )
}

export default User
