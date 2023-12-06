import React from 'react'

function SkaterCards({skater}) {
    return (
        <div className="skater">
            <img src={skater.image} />
            <div className="skater_info">
                <h3>{skater.name}</h3>
            </div>

        </div>
    )
}

export default SkaterCards