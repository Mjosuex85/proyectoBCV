import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


const PorcinosFc = () => {
   
    const [players, setPlayers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3008/test")
        .then((res) => {
            setPlayers(
                res.data
            )
        })
        
    },[])

    

    console.log(players)

  return (
    <div>PorcinosFc</div>
  )
}

export default PorcinosFc