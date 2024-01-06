// create the context

// provide the context

// consume that context

import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToFavorites = (productId, reason) => {
    let cpyFavoriteItems = [...favoriteItems];
    const index = cpyFavoriteItems.findIndex((item) => item.id === productId);

    if (index === -1) {
      // add new
      const getCurrentProductItem = products.find(
        (item) => item.id === productId
      );
      cpyFavoriteItems.push({
        title: getCurrentProductItem.title,
        id: productId,
        reason,
      });
    } else {
      // update
      cpyFavoriteItems[index] = {
        ...cpyFavoriteItems[index],
        reason,
      };
    }
    setFavoriteItems(cpyFavoriteItems);
  };

  const handleRemoveFavorites = (getCurrentId) => {
    let cpyFavoriteItems = [...favoriteItems];

    cpyFavoriteItems = cpyFavoriteItems.filter(
      (item) => item.id !== getCurrentId
    );
    setFavoriteItems(cpyFavoriteItems);
  };

  useEffect(() => {
    async function getProductsFromApi() {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      const finalResult = await response.json();

      if (finalResult) {
        setLoading(false);
        setProducts(finalResult.products);
      }
    }

    getProductsFromApi();
  }, []);
  console.log(products);
  return (
    <Context.Provider
      value={{
        products,
        loading,
        addToFavorites,
        favoriteItems,
        handleRemoveFavorites,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProductContext;
