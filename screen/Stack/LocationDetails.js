import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {getRandomLocationByColor} from '../../data/locations';
import { useMontrealContext } from '../../store/context';
// import Icon from 'react-native-vector-icons/Ionicons'

const LocationDetails = ({route, navigation}) => {
  const {color} = route.params;
  const location = getRandomLocationByColor(color);
  const { toggleFavorite, isFavorite } = useMontrealContext();

  const colorName =
    color === '#4169E1'
      ? 'Royal Blue'
      : color === '#228B22'
      ? 'Forest Green'
      : color === '#FFFFFF'
      ? 'Snow White'
      : color === '#FFD700'
      ? 'Amber Yellow'
      : color === '#DC143C'
      ? 'Crimson Red'
      : color === '#FA8072'
      ? 'Terracotta'
      : '';

  const handleBookmark = async () => {
    const newStatus = await toggleFavorite(location);
    // Optional: Add some visual feedback here
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Image Container */}
        <View
          style={[styles.imageContainer, {backgroundColor: color, padding: 5}]}>
          <ImageBackground
            source={{uri: location.image}}
            style={styles.image}
            resizeMode="cover"
            defaultSource={require('../../assets/image/placeholder.png')}>
            <View style={[styles.colorNameContainer, {backgroundColor: color}]}>
              <Text style={styles.colorName}>{colorName}</Text>
            </View>
          </ImageBackground>
        </View>

        {/* Location Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{location.name}</Text>
          <Text style={styles.description}>{location.description}</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionContainer}>
          <Pressable style={styles.mapButton} onPress={() => {}}>
            <Image
              source={require('../../assets/icons/map.png')}
              style={styles.mapIcon}
            />
            <Text style={styles.buttonText}>Open on the map</Text>
          </Pressable>

          <Pressable 
            style={[
              styles.bookmarkButton,
              isFavorite(location.id) && styles.bookmarkButtonActive
            ]} 
            onPress={handleBookmark}
          >
            <Image
              source={require('../../assets/icons/bookmark.png')}
              style={[
                styles.bookmarkIcon,
                isFavorite(location.id) && styles.bookmarkIconActive
              ]}
            />
          </Pressable>
        </View>

        {/* Bottom Buttons */}
        <View style={styles.bottomContainer}>
          <Pressable
            style={styles.searchAgainButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>SEARCH AGAIN</Text>
          </Pressable>

          <Pressable
            style={styles.homeButton}
            onPress={() => navigation.navigate('MainScreen')}>
            <Image
              source={require('../../assets/icons/home.png')}
              style={styles.homeIcon}
            />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#180D0C',
  },
  imageContainer: {
    height: 300,
    borderRadius: 20,
    margin: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: '#180D0C',
    borderRadius: 20,
    overflow: 'hidden',
  },
  colorName: {
    // position: 'absolute',
    // bottom: 20,
    // left: 20,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 6,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
    lineHeight: 24,
  },
  actionContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 10,
  },
  mapButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  bookmarkButton: {
    // width: 50,
    // height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
  },
  bottomContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 10,
    marginTop: 'auto',
  },
  searchAgainButton: {
    flex: 1,
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  searchAgainText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  homeButton: {
    // width: 50,
    // height: 50,
    borderRadius: 25,
    backgroundColor: '#F0950D',
    borderWidth: 2,
    borderColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
  },
  colorNameContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  mapIcon: {
    width: 32,
    height: 32,
  },
  bookmarkButtonActive: {
    backgroundColor: '#FFA50033', // Semi-transparent orange
  },
  bookmarkIconActive: {
    tintColor: '#FFA500', // Orange color for active state
  },
  homeIcon: {
    width: 34,
    height: 34,
  },
});

export default LocationDetails;
