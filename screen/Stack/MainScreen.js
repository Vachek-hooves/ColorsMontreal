import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import OrbitCircles from '../../components/ui/OrbitCircles';
import Logo from '../../components/ui/Logo';

const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <OrbitCircles />

        <Text style={styles.logoText}>C O L O R S</Text>
        <Text style={styles.subText}>MONTREAL</Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ChooseColor')}>
          <Text style={styles.buttonText}>CHOOSE A COLOR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SavedLocations')}>
          <Text style={styles.buttonText}>SAVED LOCATIONS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>INTERESTING FACTS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#180D0C',
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
    marginTop: 100,
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
    top: '45%',
    left: '75%',
    marginLeft: -10, // Half of width
    marginTop: -10, // Half of height
  },
  orangeCircle: {
    backgroundColor: '#FFA500',
  },
  yellowCircle: {
    backgroundColor: '#FFD700',
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
    // flex: 1,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 30,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 15,
  },
});
