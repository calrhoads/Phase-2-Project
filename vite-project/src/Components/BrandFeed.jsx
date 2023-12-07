import React from "react";

function BrandFeed({brand}) {
    console.log(brand)
    return (
    <>
        <div>
            {brand.feed.map((feedItem,index) => (
                <img key={index} src={feedItem} alt={`Feed Image ${index}`} />
            ))}
        </div>
    </>
    )
}

export default BrandFeed