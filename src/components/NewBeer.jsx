import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'

function NewBeer() {
    const[name, setName] = useState("")
    const[tagline, setTagline] = useState("")
    const[description , setDescription ] = useState("")
    const[first_brewed, setFirst_brewed] = useState("")
    const[brewers_tips , setBrewers_tips ] = useState("")
    const[attenuation_level, setAttenuation_level] = useState(0)
    const[contributed_by, setContributed_by] = useState("")

    const handleInputChange = (event) => {
        event.preventDefault()
        const createNewBeer = async () => {
            const newBeer = {name, tagline, description, first_brewed, brewers_tips, attenuation_level,contributed_by}
            const create = await axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
            console.log(create)

        }
        createNewBeer()

        setName("")
        setTagline("")
        setDescription("")
        setFirst_brewed("")
        setAttenuation_level(0)
        setContributed_by("")    

    }

  return (
    <div>
        <img src='src/assets/new-beer.png' alt='beers'/>
        <Header/>
        <h1>New Beer</h1>
        <form onSubmit={handleInputChange}>
            <label>Name
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>Tagline
                <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} />
            </label>
            <label>Description
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>First_brewed
                <input type="text" value={first_brewed} onChange={(e) => setFirst_brewed(e.target.value)} />
            </label>
            <label>
            Brewers_tips
                <input type="text" value={brewers_tips} onChange={(e) => setBrewers_tips(e.target.value)} />
            </label>
            <label>
            Attenuation_level 
                <input type="number" value={attenuation_level } onChange={(e) => setAttenuation_level(e.target.value)} />
            </label>
            <label>
            Contributed_by
                <input type="text" value={contributed_by} onChange={(e) => setContributed_by(e.target.value)} />
            </label>
            <button type='submit'>Create</button>
        </form>
    </div>
  )
}

export default NewBeer