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
import {useState} from 'react';
import FactLoading from './FactLoading';

const InterestingFacts = ({navigation}) => {
  const [isFactLoading, setIsFactLoading] = useState(false);

  const findFact = () => {
    setIsFactLoading(true);

    setTimeout(() => {
      setIsFactLoading(false);
      navigation.navigate('ShowFact');
    }, 1500);
  };

  if (isFactLoading) {
    return <FactLoading />;
  }
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
        <OrbitCircles />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Discover Montreal</Text>
        <Text style={styles.subtitle}>through interesting facts!</Text>
      </View>

      {/* Button */}
      <Pressable style={styles.button} onPress={findFact}>
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
    marginVertical: '10%',
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
    paddingVertical: 16,
  },
});

export default InterestingFacts;
