import React, {createContext, useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MontrealContext = createContext({});

export function MontrealProvider({children}) {
  const value = {};

  return (
    <MontrealContext.Provider value={value}>
      {children}
    </MontrealContext.Provider>
  );
}

export function useMontrealContext() {
  return useContext(MontrealContext);
}
