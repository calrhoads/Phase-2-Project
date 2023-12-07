import React from "react"
import { useNavigate } from "react-router-dom"
import SearchBar from "./SearchBar"
import Navbar from './Navbar'

function Header({setSearch}){
    const navigate = useNavigate()

    return  <header>
                <h1 onClick={()=>{navigate('/')}} className='title' >
                    RADALOGUE
                </h1>
                <h2 className='subtitle'>
                    Your Personalized Collection of the Raddest of the Rad 😎
                </h2>
                <h3 className="subtitle2">Set Up Your Feed By Following Your Favorite Skaters and Brands</h3>
                <hr/>
                <SearchBar setSearch={setSearch}/>
                <Navbar/>
            </header>
}

export default Header