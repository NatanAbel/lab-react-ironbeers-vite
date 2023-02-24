import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState(null)

    useEffect(()=>{

        const fetchRandomBeer = async () => {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            console.log("response randomBeer...",response.data)
            setRandomBeer(response.data)
        }
        fetchRandomBeer()
    },[])

  return (
    <div>
        <img src='src/assets/random-beer.png' alt='beers'/>
        <Header/>
        <h1>Random Beer</h1>
        {
            randomBeer?(
                <div>
                    <img src={randomBeer.image_url} alt={randomBeer.name} style={{height:"300px"}}/>
                    <h1>{randomBeer.name}</h1>
                    <p>{randomBeer.tagline}</p>
                    <p>{randomBeer.first_brewed}</p>
                    <p>{randomBeer.attenuation_level}</p>
                    <p>{randomBeer.description}</p>
                    <p>{randomBeer.contributed_by}</p>

                </div>
            ):<p>Loading...</p>
        }
    </div>
  )
}

export default RandomBeer