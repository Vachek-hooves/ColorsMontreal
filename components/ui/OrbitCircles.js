import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect, useRef} from 'react';

const OrbitCircles = () => {
  const orangeCircleAnim = useRef(new Animated.Value(0)).current;
  const yellowCircleAnim = useRef(new Animated.Value(0)).current;
  const pulsateAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Pulsation animation for all circles
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulsateAnim, {
          toValue: 1.2,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(pulsateAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    // Orange circle orbit animation
    Animated.loop(
      Animated.timing(orangeCircleAnim, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    // Yellow circle orbit animation (opposite direction)
    Animated.loop(
      Animated.timing(yellowCircleAnim, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const orangeCircleTransform = {
    transform: [
      {
        translateX: -70,
      },
      {
        rotate: orangeCircleAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
      {
        translateX: 70,
      },
      {
        scale: pulsateAnim,
      },
    ],
  };

  const yellowCircleTransform = {
    transform: [
      {
        translateX: -70,
      },
      {
        rotate: yellowCircleAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['360deg', '0deg'],
        }),
      },
      {
        translateX: 70,
      },
      {
        scale: pulsateAnim,
      },
    ],
  };
  return (
    <Animated.View
      style={[styles.logoCircle, {transform: [{scale: pulsateAnim}]}]}>
      <Animated.View
        style={[styles.centerCircle, {transform: [{scale: pulsateAnim}]}]}
      />
      <Animated.View
        style={[styles.orbitCircle, styles.orangeCircle, orangeCircleTransform]}
      />
      <Animated.View
        style={[styles.orbitCircle, styles.yellowCircle, yellowCircleTransform]}
      />
    </Animated.View>
  );
};

export default OrbitCircles;

const styles = StyleSheet.create({
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
});
