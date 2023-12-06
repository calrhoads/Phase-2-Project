import React from "react"
import SkaterCards from "./SkaterCards"
function SkaterCatalogue({skaterList}){
    const mappedSkaters = skaterList.map(skater => {
        return <SkaterCards key={skater.id} skater={skater}/>
    })
    return(
        <>
        <h2>Pro Skaters</h2>
        <div className="skater-catalogue">
            {mappedSkaters}
        </div>
        </>
    )
}

export default SkaterCatalogue