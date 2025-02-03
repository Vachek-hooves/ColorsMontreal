import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Animated,
} from 'react-native';
import OrbitCircles from '../../components/ui/OrbitCircles';

const InterestingFacts = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Interesting facts</Text>
      </View>

      {/* Animated Circles */}
      <View style={styles.circlesContainer}>
        {/* <View style={[styles.circle, styles.mainCircle]}>
          <View style={[styles.circle, styles.orangeCircle]} />
          <View style={[styles.circle, styles.redCircle]} />
          <View style={[styles.circle, styles.yellowCircle]} />
        </View> */}
        <OrbitCircles />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Discover Montreal</Text>
        <Text style={styles.subtitle}>through interesting facts!</Text>
      </View>

      {/* Button */}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('FactsList')}>
        <Text style={styles.buttonText}>FIND OUT THE FACTS</Text>
      </Pressable>
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
  backButton: {
    fontSize: 24,
    color: '#FFA500',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  circlesContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:'10%'
  },
  circle: {
    position: 'absolute',
    borderRadius: 999,
  },
  mainCircle: {
    width: 240,
    height: 240,
    backgroundColor: '#2A1F1E',
    position: 'relative',
  },
  orangeCircle: {
    width: 60,
    height: 60,
    backgroundColor: '#FFA500',
    top: -30,
    left: 90,
  },
  redCircle: {
    width: 80,
    height: 80,
    backgroundColor: '#FF4500',
    top: 80,
    left: 80,
  },
  yellowCircle: {
    width: 50,
    height: 50,
    backgroundColor: '#FFD700',
    bottom: 0,
    right: 40,
  },
  content: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFA500',
    marginHorizontal: 20,
    marginBottom: 40,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical:16
  },
});

export default InterestingFacts;
