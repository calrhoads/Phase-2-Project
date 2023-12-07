import React from "react"
import { useState } from 'react'


function BrandCards({brand}) {
    return (
        <div className="brand">
            <h3>{brand.name}</h3>
            <img src={brand.image} />
            <button>FOLLOW</button>
        </div>
    )
}

export default BrandCards