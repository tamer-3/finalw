import React from 'react'
import { Routes,Route } from 'react-router-dom'
import About from './About'
import Contatct from './Contatct'
import Home from './Home'

const Direction = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='contact' element={<Contatct/>}/>
            </Routes>
        </div>
    )
}

export default Direction
