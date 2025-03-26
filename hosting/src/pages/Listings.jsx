import { useEffect } from 'react';
import { getListings } from '../services/apiListings';

function Listings() {
  useEffect(() => {
    getListings().then(data => console.log(data));
  }, []);

  return <div>Listings</div>;
}

export default Listings;
