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
import MapView, { Marker } from 'react-native-maps';
import { useMontrealContext } from '../../store/context';

const FavoritesDetails = ({ route, navigation }) => {
  const { locationId } = route.params;
  const { favorites, toggleFavorite } = useMontrealContext();
  
  const location = favorites.find(loc => loc.id === locationId);
  console.log(location);

  if (!location) {
    return null;
  }

  const handleUnfavorite = async () => {
    await toggleFavorite(location);
    navigation.goBack();
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
        {/* Image Container */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: location.image }}
            style={styles.locationImage}
            resizeMode="cover"
          />
          {location.color && (
            <View style={styles.colorOverlay}>
              {/* <Text style={styles.colorName}>{location.color}</Text> */}
            </View>
          )}
        </View>

        {/* Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{location.name}</Text>
          <Text style={styles.description}>{location.description}</Text>

          {/* Map Preview */}
          <View style={styles.mapContainer}>
            <Text style={styles.sectionTitle}>Location</Text>
            <View style={styles.mapPreview}>
              <MapView
                style={styles.map}
                region={{
                  latitude: location.coordinates.latitude,
                  longitude: location.coordinates.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
                scrollEnabled={true}
                zoomEnabled={false}
              >
                <Marker coordinate={location.coordinates} />
              </MapView>
            </View>
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
          style={styles.bookmarkButton}
          onPress={handleUnfavorite}
        >
          <Image
            source={require('../../assets/icons/bookmark.png')}
            style={[styles.bookmarkIcon, { tintColor: '#FFA500' }]}
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
  imageContainer: {
    height: 280,
    margin: 20,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  locationImage: {
    width: '100%',
    height: '100%',
  },
  colorOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  colorName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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
  mapContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  mapPreview: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  actionContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  mapButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mapIcon: {
    width: 24,
    height: 24,
  },
  bookmarkButton: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: '#FFA50033',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookmarkIcon: {
    width: 24,
    height: 24,
  },
});

export default FavoritesDetails; 