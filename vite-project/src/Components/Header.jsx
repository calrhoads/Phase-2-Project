import React from "react"
import { useNavigate } from "react-router-dom"
import SearchBar from "./SearchBar"
import Navbar from './Navbar'

function Header({setSearch}){
    const navigate = useNavigate()

    return  <header>
                <h1 onClick={()=>{navigate('/')}} >
                    RADALOGUE
                </h1>
                <h2>
                    Your Personalized Collection of the Raddest of the Rad 😎
                </h2>
                <h3>Set Up Your Feed By Following Your Favorite Skaters and Brands</h3>
                <hr/>
                <SearchBar setSearch={setSearch}/>
                <Navbar/>
            </header>
}

export default Header