import { useState,useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BrandCatalogue from './BrandCatalogue'
import SkaterCatalogue from './SkaterCatalogue'

import Feed from './Feed'
import Header from './Header'





function Home(){
    const [brandList,setBrandList] = useState([])
    const [skaterList,setSkaterList] = useState([])
    const [search,setSearch] = useState("")
    
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


function patchSkatersFollowingStatus(id,isFollowing) {
    fetch (`http://localhost:3000/Skaters/${id}`,{
        method:"PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            following : isFollowing,
        })
    })
    .then(r=>r.json())
    .then(data => {
        const skaterFollowingStatus = skaterList.map(skater =>{
            if(skater.id === id){
                return data
            }
                return skater
        })
        setSkaterList(skaterFollowingStatus)
    })
}

function patchBrandsFollowingStatus(id,isFollowing) {
    fetch (`http://localhost:3000/Brands/${id}`,{
        method:"PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            following : isFollowing,
        })
    })
    .then(r=>r.json())
    .then(data => {
        const brandFollowingStatus = brandList.map(brand =>{
            if(brand.id === id){
                return data
            }
                return brand
        })
        setBrandList(brandFollowingStatus)
    })
}



    return(
        <>
        <BrowserRouter>
        <Header setSearch={setSearch}/>
        <Routes>
            <Route path='/' element={<img className='home-image' src='https://wallpapers.com/images/hd/skateboard-in-the-sunset-frrwj7mc1y1qv957.jpg'/>} />
            <Route path='/BrandCatalogue' element={<BrandCatalogue brandList={brandList} patchBrandsFollowingStatus={patchBrandsFollowingStatus} search={search}/>} />
            <Route path='/SkaterCatalogue' element={<SkaterCatalogue skaterList={skaterList} patchSkatersFollowingStatus={patchSkatersFollowingStatus} search={search} setSkaterList={setSkaterList} />} />
            <Route path='/Feed' element={<Feed skaterList={skaterList} brandList={brandList}/>} />
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Home