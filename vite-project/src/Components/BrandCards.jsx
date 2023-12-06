import React from "react"


function BrandCards({brand}) {
    return (
        <div className="brand">
            <img src={brand.image} />
            <div className="brand_info">
                <h3>{brand.name}</h3>
            </div>

        </div>
    )
}

export default BrandCards