import React from "react";

function SkaterFeed({skater,skaterGif}) {
    return (
    <>
        <div>
            {skater.feed.map((skaterGif,index) => (
                <img key={index} src={skaterGif} alt={`Feed Image ${index}`} />
            ))}
        </div>
    </>
    )
}

export default SkaterFeed