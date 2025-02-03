import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MontrealContext = createContext({});

export function MontrealProvider({children}) {
  const [favorites, setFavorites] = useState([]);
  console.log(favorites);

  // Load favorites when app starts
  useEffect(() => {
    loadFavorites();
  }, []);

  // Load favorites from AsyncStorage
  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  // Toggle favorite status
  const toggleFavorite = async location => {
    try {
      const isAlreadyFavorite = favorites.some(fav => fav.id === location.id);
      let updatedFavorites;

      if (isAlreadyFavorite) {
        updatedFavorites = favorites.filter(fav => fav.id !== location.id);
      } else {
        updatedFavorites = [...favorites, location];
      }

      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);

      return !isAlreadyFavorite; // Return new favorite status
    } catch (error) {
      console.error('Error toggling favorite:', error);
      return false;
    }
  };

  // Check if location is favorite
  const isFavorite = locationId => {
    return favorites.some(fav => fav.id === locationId);
  };

  const value = {
    favorites,
    toggleFavorite,
    isFavorite,
  };

  return (
    <MontrealContext.Provider value={value}>
      {children}
    </MontrealContext.Provider>
  );
}

export function useMontrealContext() {
  return useContext(MontrealContext);
}
