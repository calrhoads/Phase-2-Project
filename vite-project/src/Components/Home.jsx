import { useState,useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BrandCatalogue from './BrandCatalogue'
import SkaterCatalogue from './SkaterCatalogue'

import Feed from './Feed'
import Header from './Header'




function Home(){
    const [brandList,setBrandList] = useState([])
    const [skaterList,setSkaterList] = useState([])

    
    useEffect(()=> {
        fetch ('http://localhost:3000/Brands')
        .then(r=>r.json())
        .then(data => {
            setBrandList(data)
        })
    },[])

    useEffect(()=> {
        fetch ('http://localhost:3000/Skaters')
        .then(r=>r.json())
        .then(data => {
            setSkaterList(data)
        })
    },[])


    return(
        <>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<div></div>} />
            <Route path='/BrandCatalogue' element={<BrandCatalogue brandList={brandList} />} />
            <Route path='/SkaterCatalogue' element={<SkaterCatalogue skaterList={skaterList} />} />
            <Route path='/Feed' element={<Feed skaterList={skaterList}/>} />
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Home