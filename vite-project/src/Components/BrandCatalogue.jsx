import React from "react"
import BrandCards from "./BrandCards"
function BrandCatalogue({brandList}){
    console.log(brandList)
    const mappedBrands = brandList.map((brand) =>{
        return <BrandCards key={brand.id} brand={brand} />
    })
    return(
        <>
        <h2>Skate Brands</h2>
        <div className="brand-catalogue">
            {mappedBrands}
        </div>
        </>
    )
}

export default BrandCatalogue