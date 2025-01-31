import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
// import Icon from 'react-native-vector-icons/Ionicons'

const ChooseColor = ({ navigation }) => {
  const [selectedColor, setSelectedColor] = useState(null)

  const colorSections = [
    { id: 1, color: '#4169E1', angle: 60 },    // Blue
    { id: 2, color: '#FA8072', angle: 60 },    // Salmon
    { id: 3, color: '#DC143C', angle: 60 },    // Crimson
    { id: 4, color: '#FFD700', angle: 60 },    // Gold
    { id: 5, color: '#FFFFFF', angle: 60 },    // White
    { id: 6, color: '#228B22', angle: 60 },    // Forest Green
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
            <TouchableOpacity
              key={section.id}
              style={[
                styles.colorSection,
                {
                  backgroundColor: section.color,
                  transform: [
                    { rotate: `${(section.id - 1) * 60}deg` }
                  ]
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
            { opacity: selectedColor ? 1 : 0.5 }
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
  },
  colorSection: {
    position: 'absolute',
    width: '50%',
    height: '50%',
    left: '25%',
    top: '25%',
    transformOrigin: 'bottom',
    borderRadius: 150,
    overflow: 'hidden',
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