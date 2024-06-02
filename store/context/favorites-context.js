import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [mealIds, setMealIds] = useState([]);

  function addFavorite(id) {
    setMealIds((currentIds) => [...currentIds, id]);
  }

  function removeFavorite(id) {
    setMealIds((currentIds) => currentIds.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: mealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
