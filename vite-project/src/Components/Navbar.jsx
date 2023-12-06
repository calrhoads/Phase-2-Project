import React from "react"
import {Link, useNavigate} from 'react-router-dom'

function Navbar(){
    const navigate = useNavigate()
    return(
        <nav>
            <button onClick={() => {navigate('/BrandCatalogue')}} className="button">BRANDS 🛹</button>
            <button onClick={() => {navigate('/SkaterCatalogue')}} className="button">SKATERS 🏂</button>
            <button>MY FEED 💥</button>
        </nav>
    )
}

export default Navbar