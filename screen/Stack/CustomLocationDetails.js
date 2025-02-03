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

const CustomLocationDetails = ({ route, navigation }) => {
  const { locationId } = route.params;
  const { customLocations, deleteCustomLocation } = useMontrealContext();
  
  const location = customLocations.find(loc => loc.id === locationId);

  if (!location) {
    return null; // Or navigate back
  }

  const handleDelete = async () => {
    const success = await deleteCustomLocation(location.id);
    if (success) {
      navigation.goBack();
    } else {
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
        <Text style={styles.headerTitle}>{location.name}</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Image */}
        <Image
          source={{ uri: location.image }}
          style={styles.locationImage}
          resizeMode="cover"
        />

        {/* Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{location.title}</Text>
          <Text style={styles.description}>{location.description}</Text>
          
          {/* Category */}
          <View style={styles.infoRow}>
            <Text style={styles.label}>Category:</Text>
            <Text style={styles.value}>{location.category}</Text>
          </View>

          {/* Coordinates */}
          <View style={styles.infoRow}>
            <Text style={styles.label}>Coordinates:</Text>
            <Text style={styles.value}>
              {location.coordinates.latitude.toFixed(4)}, {location.coordinates.longitude.toFixed(4)}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <Pressable
          style={styles.mapButton}
          onPress={() => navigation.navigate('MapLocation', {
            latitude: location.coordinates.latitude,
            longitude: location.coordinates.longitude,
            name: location.name,
          })}
        >
          <Image
            source={require('../../assets/icons/map.png')}
            style={styles.mapIcon}
          />
          <Text style={styles.buttonText}>Open on the map</Text>
        </Pressable>

        <Pressable
          style={styles.deleteButton}
          onPress={handleDelete}
        >
          <Image
            source={require('../../assets/icons/delete.png')}
            style={styles.deleteIcon}
          />
        </Pressable>
      </View>
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
  },
  locationImage: {
    width: '100%',
    height: 250,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
    lineHeight: 24,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  label: {
    width: 100,
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  value: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
  },
  actionContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  mapButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFA500',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    width: 52,
    height: 52,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapIcon: {
    width: 24,
    height: 24,
  },
  deleteIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFA500',
  },
});

export default CustomLocationDetails; 