import React from "react";

function SkaterFeed({skater}) {
    return (
    <>
        <div className="yourskaterfeed">
            {skater.feed.map((skater,index) => (
                <img className='skaterfeedimage' key={index} src={skater} alt={`Feed Image ${index}`} /> 
                
            ))}
        </div>
    </>
    )
}

export default SkaterFeed