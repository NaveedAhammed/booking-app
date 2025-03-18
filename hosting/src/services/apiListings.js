import supabase from './supabase';

export const getListings = async function () {
  const { data, error } = await supabase.from('listings').select('*');

  if (error) {
    console.log(error.message);
    throw new Error('Listings could not be loaded');
  }

  return data;
};

export const deleteListing = async function (id) {
  const { data, error } = await supabase.from('listings').delete().eq('id', id);

  if (error) {
    console.log(error.message);
    throw new Error('Listing could not be deleted');
  }

  return data;
};
