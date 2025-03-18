import { useEffect } from 'react';
import { getListings } from '../services/apiListings';
import Row from '../ui/Row';
import Heading from '../ui/Heading';
import ListingTable from '../features/listings/ListingTable';

function Listings() {
  useEffect(() => {
    getListings().then(listings => {
      console.log(listings);
    });
  }, []);

  return (
    <>
      <Row>
        <Heading as="h1">All Listings</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <ListingTable />
      </Row>
    </>
  );
}

export default Listings;
