import React from "react"
import BrandCards from "./BrandCards"
function BrandCatalogue({brandList,patchBrandsFollowingStatus,search}){
    const filteredBrands = brandList.filter((brand)=>{
        return brand.name.toLowerCase().includes(search.toLowerCase())
      })
    
    const mappedBrands = filteredBrands.map((brand) =>{
        return <BrandCards key={brand.id} brand={brand} patchBrandsFollowingStatus={patchBrandsFollowingStatus}/>
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