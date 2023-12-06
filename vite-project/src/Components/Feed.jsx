import React from 'react';
import SkaterFeed from './SkaterFeed';

function Feed({ skaterList }) {
  const filteredSkaters = skaterList.filter(skater => skater.following === true);

  return (
    <>
      <h2>Your Feed</h2>
      <div className="feed">
        {filteredSkaters.map(skater => (
          <SkaterFeed key={skater.id} skater={skater} />
        ))}
      </div>
    </>
  );
}

export default Feed;