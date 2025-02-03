import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MontrealContext = createContext({});

export function MontrealProvider({children}) {
  const [favorites, setFavorites] = useState([]);
  const [customLocations, setCustomLocations] = useState([]);
  console.log(favorites);
  console.log(customLocations);

  // Load both favorites and custom locations on start
  useEffect(() => {
    loadFavorites();
    loadCustomLocations();
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

  // Load custom locations from AsyncStorage
  const loadCustomLocations = async () => {
    try {
      const storedCustomLocations = await AsyncStorage.getItem(
        'customLocations',
      );
      if (storedCustomLocations) {
        setCustomLocations(JSON.parse(storedCustomLocations));
      }
    } catch (error) {
      console.error('Error loading custom locations:', error);
    }
  };

  // Add new custom location
  const addCustomLocation = async newLocation => {
    try {
      const updatedLocations = [
        ...customLocations,
        {...newLocation, id: Date.now()},
      ];
      await AsyncStorage.setItem(
        'customLocations',
        JSON.stringify(updatedLocations),
      );
      setCustomLocations(updatedLocations);
      return true;
    } catch (error) {
      console.error('Error adding custom location:', error);
      return false;
    }
  };

  // Delete custom location
  const deleteCustomLocation = async locationId => {
    try {
      const updatedLocations = customLocations.filter(
        loc => loc.id !== locationId,
      );
      await AsyncStorage.setItem(
        'customLocations',
        JSON.stringify(updatedLocations),
      );
      setCustomLocations(updatedLocations);
      return true;
    } catch (error) {
      console.error('Error deleting custom location:', error);
      return false;
    }
  };

  // Toggle favorite status for predefined locations
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
      return true;
    } catch (error) {
      console.error('Error toggling favorite:', error);
      return false;
    }
  };

  const isFavorite = locationId => {
    return favorites.some(fav => fav.id === locationId);
  };

  const value = {
    favorites,
    customLocations,
    addCustomLocation,
    deleteCustomLocation,
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
