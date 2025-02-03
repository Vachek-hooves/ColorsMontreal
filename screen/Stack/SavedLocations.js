import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import { useMontrealContext } from '../../store/context';

const SavedLocations = ({ navigation }) => {
  const { customLocations, deleteCustomLocation } = useMontrealContext();

  const handleDelete = async (locationId) => {
    const success = await deleteCustomLocation(locationId);
    if (!success) {
      Alert.alert('Error', 'Failed to delete location');
    }
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

      <ScrollView style={styles.scrollView}>
        {customLocations.map((location) => (
          <LocationCard
            key={location.id}
            location={location}
            onDelete={() => handleDelete(location.id)}
            onPress={() => navigation.navigate('CustomLocationDetails', { locationId: location.id })}
          />
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

// LocationCard component for reusability
const LocationCard = ({ location, onPress, onDelete }) => (
  <Pressable style={styles.locationCard} onPress={onPress}>
    <Image
      source={{ uri: location.image }}
      style={styles.locationImage}
    />
    <View style={styles.locationInfo}>
      <Text style={styles.locationTitle}>{location.name}</Text>
      <Text numberOfLines={2} style={styles.locationDescription}>
        {location.description}
      </Text>
    </View>
    {onDelete && (
      <Pressable style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteIcon}>×</Text>
      </Pressable>
    )}
  </Pressable>
);

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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
});

export default SavedLocations;
