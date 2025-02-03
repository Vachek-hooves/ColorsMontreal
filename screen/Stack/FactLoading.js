import {StyleSheet, Text, View, ActivityIndicator, Image} from 'react-native';
import OrbitCircles from '../../components/ui/OrbitCircles';

const FactLoading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.OrbitCirclesContainer}>
        {/* <OrbitCircles /> */}
        <Image
          source={require('../../assets/image/Onboarding/OnboardingLogo.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>Please wait...</Text>
      <ActivityIndicator size="large" color="#FFA500" style={styles.loader} />
    </View>
  );
};

export default FactLoading;

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
  loader: {
    marginTop: 20,
  },
  OrbitCirclesContainer: {
    marginTop: '20%',
  },
  image: {
    width: 200,
    height: 280,
    alignSelf: 'center',
    marginTop: 20,
  },
});
