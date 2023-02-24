import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'

function BeerDetails() {
    const [beer, setBeer] = useState(null)
    const {beerId} = useParams()

    useEffect(()=>{

        const fetchBeer = async () => {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            console.log("response Details...",response.data)
            setBeer(response.data)
        }
        fetchBeer()
    },[])

  return (
    <div>
        <Header/>
        <h1>BeerDetails</h1>
        {
            beer?(
                <div>
                    <img src={beer.image_url} alt={beer.name} style={{height:"300px"}}/>
                    <h1>{beer.name}</h1>
                    <p>{beer.tagline}</p>
                    <p>{beer.first_brewed}</p>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>

                </div>
            ):<p>Loading...</p>
        }
    </div>
  )
}

export default BeerDetails