import { useQuery } from '@tanstack/react-query';
import { getListings } from '../../services/apiListings';
import Spinner from '../../ui/Spinner';

function ListingTable() {
  const {
    isPending,
    data: listings,
    error,
  } = useQuery({
    queryKey: ['listings'],
    queryFn: getListings,
  });

  if (isPending) {
    return <Spinner />;
  }

  console.log(listings, error);

  return <div>Listing Table</div>;
}

export default ListingTable;
