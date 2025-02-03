import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  Modal,
  Alert,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useMontrealContext } from '../../store/context';

const CustomLocationDetails = ({ route, navigation }) => {
  const { locationId } = route.params;
  const { customLocations, deleteCustomLocation } = useMontrealContext();
  const [isMapVisible, setIsMapVisible] = useState(false);
  
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

        {/* Map Preview */}
        <View style={styles.mapPreviewContainer}>
          <Text style={styles.sectionTitle}>Location</Text>
          <Pressable onPress={() => setIsMapVisible(true)}>
            <View style={styles.mapPreview}>
              <MapView
                style={styles.previewMap}
                region={{
                  latitude: location.coordinates.latitude,
                  longitude: location.coordinates.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
                scrollEnabled={false}
                zoomEnabled={false}
              >
                <Marker coordinate={location.coordinates} />
              </MapView>
              <View style={styles.mapOverlay}>
                <Text style={styles.mapOverlayText}>Tap to view full map</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
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

      {/* Map Modal */}
      <Modal
        visible={isMapVisible}
        animationType="slide"
        onRequestClose={() => setIsMapVisible(false)}
      >
        <View style={styles.modalContainer}>
          <MapView
            style={styles.fullMap}
            initialRegion={{
              latitude: location.coordinates.latitude,
              longitude: location.coordinates.longitude,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            }}
          >
            <Marker coordinate={location.coordinates} title={location.name} />
          </MapView>
          <Pressable
            style={styles.closeButton}
            onPress={() => setIsMapVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
        </View>
      </Modal>
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
  deleteButton: {
    width: 52,
    height: 52,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFA500',
  },
  mapPreviewContainer: {
    padding: 20,
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
    position: 'relative',
  },
  previewMap: {
    ...StyleSheet.absoluteFillObject,
  },
  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapOverlayText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 8,
    borderRadius: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#180D0C',
  },
  fullMap: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#FFA500',
    padding: 12,
    borderRadius: 8,
    zIndex: 1,
  },
  closeButtonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default CustomLocationDetails; 