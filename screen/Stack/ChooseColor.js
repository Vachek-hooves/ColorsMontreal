import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
// import Icon from 'react-native-vector-icons/Ionicons'

const ChooseColor = ({ navigation }) => {
  const [selectedColor, setSelectedColor] = useState(null)

  const colorSections = [
    { id: 1, color: '#4169E1', angle: 0 },     // Blue - starts at 0 degrees
    { id: 2, color: '#FA8072', angle: 60 },    // Salmon
    { id: 3, color: '#DC143C', angle: 120 },   // Crimson
    { id: 4, color: '#FFD700', angle: 180 },   // Gold
    { id: 5, color: '#FFFFFF', angle: 240 },   // White
    { id: 6, color: '#228B22', angle: 300 },   // Forest Green
  ].reverse() // Reverse the array to fix layering

  const handleColorSelect = (color) => {
    setSelectedColor(color)
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Icon name="chevron-back" size={24} color="#FFA500" /> */}
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <View style={styles.smallLogo}>
            {/* Small version of the orbiting circles logo */}
            <View style={styles.centerDot} />
            <View style={[styles.orbitDot, styles.orangeDot]} />
            <View style={[styles.orbitDot, styles.yellowDot]} />
          </View>
          <Text style={styles.logoText}>COLORS</Text>
          <Text style={styles.subLogoText}>MONTREAL</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Choose a color</Text>
        
        {/* Color Wheel */}
        <View style={styles.colorWheel}>
          {colorSections.map((section) => (
            <TouchableOpacity
              key={section.id}
              style={[
                styles.colorSection,
                {
                  backgroundColor: section.color,
                  transform: [
                    { rotate: `${section.angle}deg` }
                  ],
                  zIndex: 7 - section.id, // Higher zIndex for earlier sections
                }
              ]}
              onPress={() => handleColorSelect(section.color)}
            />
          ))}
        </View>

        {/* Search Button */}
        <TouchableOpacity 
          style={[
            styles.button,
            { opacity: selectedColor ? 1 : 0.9 }
          ]}
          disabled={!selectedColor}
        >
          <Text style={styles.buttonText}>START SEARCH</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ChooseColor

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#180D0C',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  smallLogo: {
    width: 40,
    height: 40,
    position: 'relative',
  },
  centerDot: {
    width: 20,
    height: 20,
    backgroundColor: '#8B0000',
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  orbitDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    position: 'absolute',
  },
  orangeDot: {
    backgroundColor: '#FFA500',
    top: 5,
    left: 5,
  },
  yellowDot: {
    backgroundColor: '#FFD700',
    bottom: 5,
    right: 5,
  },
  logoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  subLogoText: {
    color: 'white',
    fontSize: 12,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  title: {
    fontSize: 34,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  colorWheel: {
    width: 300,
    height: 300,
    position: 'relative',
    borderRadius: 150,
    borderWidth: 2,
    borderColor: '#333',
    overflow: 'hidden',
  },
  colorSection: {
    position: 'absolute',
    width: 150,    // Half of the wheel width
    height: 150,   // Half of the wheel height
    left: 150,     // Center horizontally
    top: 150,      // Center vertically
    marginLeft: 0, // Negative half of section width
    marginTop: 0,  // Negative half of section height
    // transform: [{ rotate: '0deg' }],  // Will be set dynamically
    transformOrigin: '0 0',
    borderWidth: 1,
    borderColor: '#333',
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 40,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
})