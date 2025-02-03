import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import OrbitCircles from '../../components/ui/OrbitCircles';

const LocationSearching = () => {
  return (
    <View style={styles.container}>
      <View style={styles.OrbitCirclesContainer}>
        <OrbitCircles />
      </View>
      <Text style={styles.text}>
        Please wait, we are looking for a location...
      </Text>
      <ActivityIndicator size="large" color="#FFA500" style={styles.loader} />
    </View>
  );
};

export default LocationSearching;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#180D0C',
    paddingHorizontal: 20,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    marginTop: '20%',
  },

  OrbitCirclesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  loader: {
    marginTop: 20,
  },
});
