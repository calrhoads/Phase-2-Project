import React from "react"
import SearchBar from "./SearchBar"
import Navbar from './Navbar'

function Header(){
    return  <header>
                <h1>
                    RADALOGUE
                </h1>
                <h2>
                    Your Personalized Collection of the Raddest of the Rad 😎
                </h2>
                <h3>Set Up Your Feed By Following Your Favorite Skaters and Brands</h3>
                <hr/>
                <SearchBar/>
                <Navbar/>
            </header>
}

export default Header