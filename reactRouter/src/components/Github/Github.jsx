import React, { use, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    // fetch('https://api.github.com/users/ravidewanga')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //     setData(data)
    //   })  
    // }, [])

  return (
    <div className='text-center text-3xl font-bold text-gray-800 mt-20'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Avatar" className="rounded-full h-64 w-64 mx-auto" />
    </div>
  )
}

export default Github

export const githubDataInfo = async () => {
    const res = await fetch('https://api.github.com/users/ravidewanga')
    const data = await res.json()
    console.log(data)
    return data 
}
