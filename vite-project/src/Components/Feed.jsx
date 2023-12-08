
import React from 'react';
import SkaterFeed from './SkaterFeed';
import BrandFeed from './BrandFeed'

function Feed({ skaterList, brandList }) {

    const filteredSkaters = skaterList.filter(skater => skater.following === true);

    const filteredBrands = brandList.filter(brand => brand.following === true);

    return (
    <>
      <h2 className='yourfeed'>Your Feed</h2>
      <div className="feed">
        {filteredBrands.map(brand => (
            <BrandFeed key={brand.id} brand={brand}/>
        ))}
        
        {filteredSkaters.map(skater => (
        <SkaterFeed key={skater.id} skater={skater} />
        ))}
      </div>
    </>
  );
}

export default Feed;