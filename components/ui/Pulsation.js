import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';

const Pulsation = () => {
  const outerCircleScale = useRef(new Animated.Value(1)).current;
  const innerCircleScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animate outer circle
    Animated.loop(
      Animated.sequence([
        Animated.timing(outerCircleScale, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(outerCircleScale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    // Animate inner circle with different timing
    Animated.loop(
      Animated.sequence([
        Animated.timing(innerCircleScale, {
          toValue: 1.3,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(innerCircleScale, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.outerCircle,
          {
            transform: [{scale: outerCircleScale}],
          },
        ]}>
        <Animated.View
          style={[
            styles.innerCircle,
            {
              transform: [{scale: innerCircleScale}],
            },
          ]}
        />
      </Animated.View>
    </View>
  );
};

export default Pulsation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#180D0C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#8B0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FF0000',
  },
});
