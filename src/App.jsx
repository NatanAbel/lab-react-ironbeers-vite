import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import AllBeers from './components/AllBeers'
import NewBeer from './components/NewBeer'
import RandomBeer from './components/RandomBeer'
import BeerDetails from './components/BeerDetails'

function App() {
  const [count, setCount] = useState()

  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allBeers/:beerId' element={<BeerDetails/>}/>
        <Route path='/allBeers' element={<AllBeers/>}/>
        <Route path='/newBeer' element={<NewBeer/>}/>
        <Route path='/randomBeer' element={<RandomBeer/>}/>
      </Routes>
    </div>
  )
}

export default App
