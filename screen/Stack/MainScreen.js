import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import Pulsation from '../../components/ui/Pulsation'

const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <View style={styles.centerCircle} />
          <View style={[styles.orbitCircle, styles.orangeCircle]} />
          <View style={[styles.orbitCircle, styles.yellowCircle]} />
        </View>
        <Text style={styles.logoText}>C O L O R S</Text>
        <Text style={styles.subText}>MONTREAL</Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CHOOSE A COLOR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SAVED LOCATIONS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>INTERESTING FACTS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoCircle: {
    width: 200,
    height: 200,
    backgroundColor: '#8B0000',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  centerCircle: {
    width: 60,
    height: 60,
    backgroundColor: '#FF4500',
    borderRadius: 30,
  },
  orbitCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
  },
  orangeCircle: {
    backgroundColor: '#FFA500',
    top: 20,
    left: 20,
  },
  yellowCircle: {
    backgroundColor: '#FFD700',
    bottom: 30,
    right: 20,
  },
  logoText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    letterSpacing: 8,
  },
  subText: {
    color: 'white',
    fontSize: 18,
    marginTop: 5,
  },
  buttonContainer: {
    marginBottom: 40,
    gap: 15,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
})