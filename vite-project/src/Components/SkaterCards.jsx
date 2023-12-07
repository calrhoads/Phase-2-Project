import React from 'react'
import { useState} from 'react'

function SkaterCards({skater,patchSkatersFollowingStatus,deleteSkater}) {
    console.log(deleteSkater)
    const [follow,setFollow] = useState(skater.following)
    const {id,name,image,feed,following} = skater
    
    return (
        <div className="skater">
            <h3 className='skatername'>{skater.name}</h3>
            <img className='skaterCards' src={skater.image} />
            {follow === false ? (
           
            <button className="skaterfollowbutton" onClick={()=>{
                patchSkatersFollowingStatus(id,true)
                setFollow(true)}} >Follow</button>
            ) : (
            <button className="skaterfollowbutton" onClick={()=>{
                patchSkatersFollowingStatus(id,false)
                setFollow(false)}} >Unfollow</button>
            )}
            <button onClick={()=>deleteSkater(id)}>Gnarly Wipeout 🤕</button>
        </div>
    )
}

export default SkaterCards