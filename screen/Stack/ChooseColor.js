import { StyleSheet, Text, View, Pressable, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import Icon from 'react-native-vector-icons/Ionicons'

const ChooseColor = ({ navigation }) => {
  const [selectedColor, setSelectedColor] = useState(null)

  const colorSections = [
    { id: 1, color: '#4169E1', angle: 300, zIndex: 6 },   // Blue
    { id: 2, color: '#228B22', angle: 0, zIndex: 5 },     // Green
    { id: 3, color: '#FFFFFF', angle: 60, zIndex: 4 },    // White
    { id: 4, color: '#FFD700', angle: 120, zIndex: 3 },   // Gold
    { id: 5, color: '#DC143C', angle: 180, zIndex: 2 },   // Crimson
    { id: 6, color: '#FA8072', angle: 240, zIndex: 1 },   // Salmon
  ]

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
            <Pressable
              key={section.id}
              style={({ pressed }) => [
                styles.colorSection,
                {
                  backgroundColor: section.color,
                  transform: [
                    { rotate: `${section.angle}deg` },
                    { skewX: '0deg' },  // Add skew to create rhombus
                    { skewY: '30deg' }   // Add skew to create rhombus
                  ],
                  zIndex: section.zIndex,
                  opacity: selectedColor && selectedColor !== section.color ? 0.5 : 1,
                  borderColor: selectedColor === section.color ? '#FFFFFF' : '#333',
                  borderWidth: selectedColor === section.color ? 2 : 1,
                }
              ]}
              onPress={() => handleColorSelect(section.color)}
            />
          ))}
        </View>

        {/* Updated Search Button */}
        <Pressable 
          style={[
            styles.button,
            !selectedColor && styles.buttonInactive
          ]}
          disabled={!selectedColor}
          onPress={() => {
            if (selectedColor) {
              // Navigate or handle search
              console.log('Starting search with color:', selectedColor)
            }
          }}
        >
          <Text style={[
            styles.buttonText,
            !selectedColor && styles.buttonTextInactive
          ]}>
            START SEARCH
          </Text>
        </Pressable>
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
    width: 150,    // Adjusted for rhombus shape
    height: 150,   // Adjusted for rhombus shape
    left: 150,     
    top: 150,      
    // marginLeft: -53, // Half of new width
    // marginTop: -53,  // Half of new height
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
  buttonInactive: {
    backgroundColor: '#FFA50050', // Semi-transparent orange
    // Or you could use: backgroundColor: '#666' for a grey button
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTextInactive: {
    color: '#00000050', // Semi-transparent black
    // Or you could use: color: '#999' for grey text
  }
})