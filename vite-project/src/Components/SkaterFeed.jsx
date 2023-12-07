import React from "react";

function SkaterFeed({skater}) {
    return (
    <>
        <div>
            {skater.feed.map((skater,index) => (
                <img key={index} src={skater} alt={`Feed Image ${index}`} />
            ))}
        </div>
    </>
    )
}

export default SkaterFeed