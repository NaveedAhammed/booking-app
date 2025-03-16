import { useEffect } from 'react';
import { getListings } from '../services/apiListings';

function Listings() {
  useEffect(() => {
    getListings().then(listings => {
      console.log(listings);
    });
  }, []);

  return <div>Listings</div>;
}

export default Listings;
