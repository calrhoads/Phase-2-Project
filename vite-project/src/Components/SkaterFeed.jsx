import React from "react";

function SkaterFeed({skater}) {
    return (
    <>
        <div>
            <img src={skater.feed} />
        </div>
    </>
    )
}

export default SkaterFeed