import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  TextInput,
  Modal,
  Image,
  Alert,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useMontrealContext } from '../../store/context';

const CreateLocation = ({ navigation }) => {
  const { addCustomLocation } = useMontrealContext();
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [newLocation, setNewLocation] = useState({
    id: Date.now(), // Generate unique ID
    name: '',
    title: '',
    description: '',
    image: '',
    coordinates: {
      latitude: 45.5017,
      longitude: -73.5673
    },
    category: '',
  });

  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setNewLocation(prev => ({
      ...prev,
      coordinates: { latitude, longitude }
    }));
    setIsMapVisible(false);
  };

  const handleSave = async () => {
    // Validate form
    if (!newLocation.name || !newLocation.description || !newLocation.image) {
      // Show error message
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    // Save to context/AsyncStorage
    const success = await addCustomLocation(newLocation);
    
    if (success) {
      navigation.goBack();
    } else {
      Alert.alert('Error', 'Failed to save location');
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
        <Text style={styles.headerTitle}>Create new location</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Form Fields */}
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Location Name</Text>
            <TextInput
              style={styles.input}
              value={newLocation.name}
              onChangeText={(text) => setNewLocation(prev => ({ ...prev, name: text }))}
              placeholder="Enter location name"
              placeholderTextColor="#666"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              value={newLocation.title}
              onChangeText={(text) => setNewLocation(prev => ({ ...prev, title: text }))}
              placeholder="Enter title"
              placeholderTextColor="#666"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={newLocation.description}
              onChangeText={(text) => setNewLocation(prev => ({ ...prev, description: text }))}
              placeholder="Enter description"
              placeholderTextColor="#666"
              multiline
              numberOfLines={4}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Image URL</Text>
            <TextInput
              style={styles.input}
              value={newLocation.image}
              onChangeText={(text) => setNewLocation(prev => ({ ...prev, image: text }))}
              placeholder="Enter image URL"
              placeholderTextColor="#666"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Category</Text>
            <TextInput
              style={styles.input}
              value={newLocation.category}
              onChangeText={(text) => setNewLocation(prev => ({ ...prev, category: text }))}
              placeholder="Enter category"
              placeholderTextColor="#666"
            />
          </View>

          {/* Location Picker Button */}
          <Pressable
            style={styles.locationButton}
            onPress={() => setIsMapVisible(true)}
          >
            <Image
              source={require('../../assets/icons/map.png')}
              style={styles.mapIcon}
            />
            <Text style={styles.locationButtonText}>
              {newLocation.coordinates.latitude !== 45.5017 
                ? 'Location Selected'
                : 'Select Location on Map'}
            </Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Save Button */}
      <Pressable style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Location</Text>
      </Pressable>

      {/* Map Modal */}
      <Modal
        visible={isMapVisible}
        animationType="slide"
        onRequestClose={() => setIsMapVisible(false)}
      >
        <View style={styles.modalContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 45.5017,
              longitude: -73.5673,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={handleMapPress}
          >
            {newLocation.coordinates && (
              <Marker coordinate={newLocation.coordinates} />
            )}
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
  formContainer: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#2A1F1E',
    borderRadius: 12,
    padding: 16,
    color: '#FFFFFF',
    fontSize: 16,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A1F1E',
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  locationButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  mapIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFA500',
  },
  saveButton: {
    backgroundColor: '#FFA500',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#FFA500',
    padding: 12,
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default CreateLocation;