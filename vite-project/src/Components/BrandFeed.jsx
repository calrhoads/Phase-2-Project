import React from "react";

function BrandFeed({brand}) {
    console.log(brand)
    return (
    <>
        <div className="yourbrandfeed">
            {brand.feed.map((feedItem,index) => (
                <img className="brandfeedimage" key={index} src={feedItem} alt={`Feed Image ${index}`} />
            ))}
        </div>
    </>
    )
}

export default BrandFeed