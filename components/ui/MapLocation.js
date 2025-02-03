import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';


const MapLocation = ({route }) => {
  console.log(route.params.latitude, route.params.longitude);
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: route.params.latitude,
    longitude: route.params.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{route.params.name}</Text>
      </View>
      <MapView style={styles.map} region={region}>
        <Marker coordinate={region} title={route.params.name} />
      </MapView>
    </View>
  );
};

export default MapLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#180D0C',
  },
  map: {
    marginTop: 100,
    flex: 1,
    width: '100%',
    height: '75%',
    borderRadius: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    marginTop: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
   
  },
});
