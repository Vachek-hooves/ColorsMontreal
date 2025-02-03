import React from 'react'
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView } from 'react-native'
import { getRandomLocationByColor } from '../../data/locations'
// import Icon from 'react-native-vector-icons/Ionicons'

const LocationDetails = ({ route, navigation }) => {
  const { color } = route.params
  const location = getRandomLocationByColor(color)
  
  // const colorName = color === '#4169E1' ? 'Royal Blue' : 
  //                  color === '#228B22' ? 'Forest Green' : 
  //                  // ... add other color names

  return (
    <SafeAreaView style={styles.container}>
      {/* Image Container */}
      <View style={[styles.imageContainer, { backgroundColor: color }]}>
        <Image
          // source={require('../../assets/images/placeholder.jpg')} // Add your image
          style={styles.image}
          resizeMode="cover"
        />
        {/* <Text style={styles.colorName}>{colorName}</Text> */}
      </View>

      {/* Location Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{location.name}</Text>
        <Text style={styles.description}>{location.description}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <Pressable style={styles.mapButton} onPress={() => {}}>
          {/* <Icon name="map-outline" size={24} color="#000" /> */}
          <Text style={styles.buttonText}>Open on the map</Text>
        </Pressable>

        <Pressable style={styles.bookmarkButton} onPress={() => {}}>
          {/* <Icon name="bookmark-outline" size={24} color="#FFA500" /> */}
        </Pressable>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomContainer}>
        <Pressable 
          style={styles.searchAgainButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.searchAgainText}>SEARCH AGAIN</Text>
        </Pressable>

        <Pressable 
          style={styles.homeButton}
          onPress={() => navigation.navigate('MainScreen')}
        >
          {/* <Icon name="home-outline" size={24} color="#FFA500" /> */}
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#180D0C',
  },
  imageContainer: {
    height: 300,
    borderRadius: 20,
    margin: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  colorName: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
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
  },
  bookmarkButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#180D0C',
    borderWidth: 2,
    borderColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default LocationDetails
