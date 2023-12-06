import React from 'react'

function SkaterCards({skater}) {
    return (
        <div className="skater">
            <h3>{skater.name}</h3>
            <img src={skater.image} />
            <button>FOLLOW</button>
        </div>
    )
}

export default SkaterCards