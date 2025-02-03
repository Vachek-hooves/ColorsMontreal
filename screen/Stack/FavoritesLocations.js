import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import { useMontrealContext } from '../../store/context';

const FavoritesLocations = ({ navigation }) => {
  const { favorites } = useMontrealContext();

  if (favorites.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Favorites</Text>
        </View>
        <View style={styles.emptyContainer}>
          <Image
            source={require('../../assets/icons/bookmark.png')}
            style={styles.emptyIcon}
          />
          <Text style={styles.emptyText}>No favorite locations yet</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favorites</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {favorites.map((location) => (
          <Pressable
            key={location.id}
            style={styles.locationCard}
            onPress={() => {
              // Navigate based on location type
              if (location.isCustom) {
                navigation.navigate('CustomLocationDetails', { locationId: location.id });
              } else {
                navigation.navigate('LocationDetails', { 
                  color: location.color,
                  locationId: location.id 
                });
              }
            }}
          >
            <Image
              source={{ uri: location.image }}
              style={styles.locationImage}
            />
            <View style={styles.locationInfo}>
              <Text style={styles.locationTitle}>{location.name}</Text>
              <Text 
                numberOfLines={2} 
                style={styles.locationDescription}
              >
                {location.description}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#180D0C',
  },
  header: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  locationCard: {
    flexDirection: 'row',
    backgroundColor: '#2A1F1E',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    height: 100,
  },
  locationImage: {
    width: 100,
    height: '100%',
  },
  locationInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  locationDescription: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyIcon: {
    width: 48,
    height: 48,
    tintColor: '#FFA500',
    marginBottom: 16,
    opacity: 0.5,
  },
  emptyText: {
    fontSize: 18,
    color: '#FFFFFF',
    opacity: 0.5,
  },
});

export default FavoritesLocations;