
import React from 'react';
import SkaterFeed from './SkaterFeed';
import BrandFeed from './BrandFeed'

function Feed({ skaterList, brandList }) {
    // const skaterGif = {
    //     feed: [
    //         "https://media.tenor.com/o1sxdKORagMAAAAd/rondey-mullen-john-rodney-mullen.gif",
    //         "https://i.imgur.com/iG7CWMv.gif",
    //         "https://i.pinimg.com/originals/92/59/d7/9259d7242225c239bfc6d7de0fa9c213.gif"
    //         ]
    // }
    console.log(skaterList)
    // skaterList.map((skater)=> {
    //     skater.feed.map((skate) => console.log(skate))
    // }) use this with skaterGif once db.json is filled out with feed list
    const filteredSkaters = skaterList.filter(skater => skater.following === true);

    const filteredBrands = brandList.filter(brand => brand.following === true);
  console.log(filteredBrands)
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