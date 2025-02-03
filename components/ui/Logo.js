import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Logo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {/* <TouchableOpacity onPress={() => navigation.goBack()}> */}
      <TouchableOpacity>
        <Image
          source={require('../../assets/icons/back.png')}
          style={styles.backIcon}
        />
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
  );
};

export default Logo;

const styles = StyleSheet.create({
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
  backIcon: {
    width: 30,
    height: 30,
  },
});
