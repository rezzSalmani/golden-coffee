import React, { createContext, useEffect, useState, useContext } from 'react';
import { supabase } from '../supabaseClient';

const ProductContext = createContext({
  productData: [],
  loadingData: null,
  errorLoadingData: null,
  showAllProducts: null,
  setShowAllProducts: () => {},
});

export const useProductContext = () => {
  return useContext(ProductContext);
};
const ProductContextProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(true);
  const [loadingData, setLoadingData] = useState(false);
  const [errorLoadingData, setErrorLoadingData] = useState('');
  useEffect(() => {
    const updateProductData = async () => {
      const tempProductCount = () => {
        if (showAllProducts) {
          return 7;
        } else {
          return 11;
        }
      };

      try {
        setErrorLoadingData('');
        setLoadingData(true);
        const count = tempProductCount();
        const { data, error } = await supabase
          .from('coffeeProducts')
          .select('*')
          .range(0, count);

        if (error) {
          throw error;
        } else {
          setProductData(data);
          setErrorLoadingData('');
        }
      } catch (error) {
        console.log(error);
        if (error.message === 'TypeError: Failed to fetch')
          return setErrorLoadingData('دریافت اطلاعات موفقیت آمیز نبود.');
        setErrorLoadingData(error.message);
      } finally {
        setLoadingData(false);
      }
    };
    updateProductData();
  }, [showAllProducts]);

  const values = {
    productData,
    loadingData,
    errorLoadingData,
    showAllProducts,
    setShowAllProducts,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
