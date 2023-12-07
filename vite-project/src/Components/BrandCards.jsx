import React from "react"
import { useState } from 'react'


function BrandCards({brand , patchBrandsFollowingStatus}) {
    const [follow,setFollow] = useState(brand.following)
    const {id,name,image,feed,following} = brand
    
    return (
        <div className="brand">
            <h3>{brand.name}</h3>
            <img src={brand.image} />
            {follow === false ? (
           
           <button onClick={()=>{
               patchBrandsFollowingStatus(id,true)
               setFollow(true)}} className="primary">Follow</button>
           ) : (
           <button onClick={()=>{
               patchBrandsFollowingStatus(id,false)
               setFollow(false)}} className='primary'>Unfollow</button>
           )}
        </div>
    )
}

export default BrandCards