import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Pressable,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import MapView, {Marker, DEFAULT_PROVIDER} from 'react-native-maps';
import {useMontrealContext} from '../../store/context';
import {locations} from '../../data/locations';

const MapScreen = ({ navigation }) => {
  const { customLocations, favorites } = useMontrealContext();

  // Combine all locations
  const allLocations = [...customLocations, ...locations];

  // Montreal center coordinates
  const initialRegion = {
    latitude: 45.5017,
    longitude: -73.5673,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // Custom map style for dark theme
  const mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [{ "color": "#242f3e" }]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#746855" }]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [{ "color": "#242f3e" }]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{ "color": "#38414e" }]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [{ "color": "#212a37" }]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{ "color": "#17263c" }]
    }
  ];

  const handleMarkerPress = (location) => {
    if (location.isCustom) {
      navigation.navigate('CustomLocationDetails', { locationId: location.id });
    } else {
      navigation.navigate('LocationDetails', { 
        locationId: location.id,
        color: location.color 
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        provider={DEFAULT_PROVIDER}
        style={styles.map}
        initialRegion={initialRegion}
        customMapStyle={mapStyle}
      >
        {allLocations.map((location) => (
          <Marker
            key={location.id}
            coordinate={location.coordinates}
            onPress={() => handleMarkerPress(location)}
          >
            <View style={styles.markerWrapper}>
              <Image
                source={require('../../assets/icons/marker.png')}
                style={[
                  styles.markerIcon,
                  { tintColor: location.isCustom ? '#FFA500' : location.color || '#FFA500' }
                ]}
              />
              {location.name && (
                <View style={styles.markerLabelContainer}>
                  <Text style={styles.markerLabel}>{location.name}</Text>
                </View>
              )}
            </View>
          </Marker>
        ))}
      </MapView>

      {/* Home Button */}
      <Pressable
        style={styles.homeButton}
        onPress={() => navigation.navigate('MainScreen')}
      >
        <Image
          source={require('../../assets/icons/home.png')}
          style={styles.homeIcon}
        />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#180D0C',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  markerWrapper: {
    alignItems: 'center',
  },
  markerIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  markerLabelContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 4,
  },
  markerLabel: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  homeButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: '#FFA500',
    // width: 52,
    // height: 52,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minWidth: 80,
    padding: 15,
  },
  homeIcon: {
    width: 34,
    height: 34,
    tintColor: '#000000',
    // padding: 15,
  },
});

export default MapScreen;
