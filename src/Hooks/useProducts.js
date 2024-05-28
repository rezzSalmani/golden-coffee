import { useQuery } from '@tanstack/react-query';
import { supabase } from '../supabaseClient';

export const useAllProduct = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      return await supabase.from('coffeeProducts').select('*');
    },
  });
  return { data, isLoading };
};
export const useRangeProducts = showAllProducts => {
  const count = showAllProducts ? 7 : 11;
  const { data, isLoading } = useQuery({
    queryKey: ['RangedProducts', count],
    queryFn: async () => {
      return await supabase.from('coffeeProducts').select('*').range(0, count);
    },
  });

  //   if (error) {
  //     throw error; // or return error, depending on your use case
  //   }

  return { data, isLoading };
};
