import supabase from './supabase';

export const getListings = async function () {
  const { data, error } = await supabase.from('listings').select('*');

  if (error) {
    console.log(error.message);
    throw new Error('Listings could not be loaded');
  }

  return data;
};
