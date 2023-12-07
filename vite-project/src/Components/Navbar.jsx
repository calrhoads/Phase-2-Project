import React from "react"
import {Link, useNavigate} from 'react-router-dom'

function Navbar(){
    const navigate = useNavigate()
    return(
        <nav className='navbar'>
            <button onClick={() => {navigate('/BrandCatalogue')}} className="button">BRANDS 🛹</button>
            <button onClick={() => {navigate('/SkaterCatalogue')}} className="button">SKATERS 🏂</button>
            <button onClick={() => {navigate('/Feed')}} className="button">MY FEED 💥</button>
        </nav>
    )
}

export default Navbar