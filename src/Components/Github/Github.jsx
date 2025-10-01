import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
    fetch('https://api.github.com/users/Mdshoaib77')
    .then(Response => Response.json())
    .then(data =>{
        console.log(data);
        setData(data)
    })
    }, []);


  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      GIthub Followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" />
    </div>
  )
}

export default Github