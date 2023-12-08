import React from "react"
import { useState } from 'react'


function BrandCards({brand , patchBrandsFollowingStatus}) {
    const [follow,setFollow] = useState(brand.following)
    const {id,name,image,feed,following} = brand
    
    return (
    <>
       <div className="brand">
            <h3 className="brandname">{brand.name}</h3>
            <img className='brandCards' src={brand.image} />
            
        </div>
        <div className="followbranddiv">
            {follow === false ? (
           
           <button onClick={()=>{
               patchBrandsFollowingStatus(id,true)
               setFollow(true)}} className="followbrandbutton">Follow</button>
           ) : (
           <button onClick={()=>{
               patchBrandsFollowingStatus(id,false)
               setFollow(false)}} className='followbrandbutton'>Unfollow</button>
           )}
        </div>
    </>
    )
}

export default BrandCards