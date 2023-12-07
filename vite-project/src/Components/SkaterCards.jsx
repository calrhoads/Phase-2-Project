import React from 'react'
import { useState} from 'react'

function SkaterCards({skater,patchSkatersFollowingStatus}) {
    const [follow,setFollow] = useState(skater.following)
    const {id,name,image,feed,following} = skater
    
    return (
        <div className="skater">
            <h3>{skater.name}</h3>
            <img src={skater.image} />
            {follow === false ? (
            <button onClick={()=>{
                patchSkatersFollowingStatus(id,true)
                setFollow(true)}} className="primary">Follow</button>
            ) : (
            <button onClick={()=>{
                patchSkatersFollowingStatus(id,false)
                setFollow(false)}} className='primary'>Unfollow</button>
            )}
        </div>
    )
}

export default SkaterCards