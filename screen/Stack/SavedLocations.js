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

const SavedLocations = ({ navigation }) => {
  const { favorites, toggleFavorite } = useMontrealContext();

  const handleDelete = async (location) => {
    await toggleFavorite(location);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/back.png')}
            style={styles.backIcon}
          />
        </Pressable>
        <Text style={styles.headerTitle}>Saved locations</Text>
      </View>

      {/* Favorites List */}
      <ScrollView style={styles.scrollView}>
        {favorites.map((location) => (
          <Pressable
            key={location.id}
            style={styles.locationCard}
            onPress={() => navigation.navigate('LocationDetails', { 
              color: location.color,
              locationId: location.id 
            })}
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
            <Pressable
              style={styles.deleteButton}
              onPress={() => handleDelete(location)}
            >
              <Text style={styles.deleteIcon}>×</Text>
            </Pressable>
          </Pressable>
        ))}
      </ScrollView>

      {/* Create New Location Button */}
      <Pressable
        style={styles.createButton}
        onPress={() => navigation.navigate('CreateLocation')}
      >
        <Image
          source={require('../../assets/icons/plus.png')}
          style={styles.plusIcon}
        />
        <Text style={styles.createButtonText}>Create new location</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#180D0C',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFA500',
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
  },
  locationImage: {
    width: 100,
    height: 100,
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
  deleteButton: {
    padding: 12,
    justifyContent: 'flex-start',
  },
  deleteIcon: {
    fontSize: 24,
    color: '#FFA500',
    fontWeight: 'bold',
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  plusIcon: {
    width: 24,
    height: 24,
  },
  createButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default SavedLocations;
