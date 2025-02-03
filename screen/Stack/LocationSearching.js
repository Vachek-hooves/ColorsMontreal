import {StyleSheet, Text, View} from 'react-native';
import OrbitCircles from '../../components/ui/OrbitCircles';

const LocationSearching = () => {
  return (
    <View style={styles.container}>

      <OrbitCircles/>  
    </View>
  );
};

export default LocationSearching;

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#180D0C',
    paddingHorizontal: 20,
  },
});
