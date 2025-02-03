import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Share,Image
} from 'react-native';
import {getRandomFact} from '../../data/facts';
import OrbitCircles from '../../components/ui/OrbitCircles';

const ShowFact = ({navigation}) => {
  const [currentFact, setCurrentFact] = useState(null);

  useEffect(() => {
    setCurrentFact(getRandomFact());
  }, []);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${currentFact.title}\n\n${currentFact.description}`,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  if (!currentFact) return null;

  return (
    <SafeAreaView style={styles.container}>
      {/* Circles Design */}
      <View style={styles.circlesContainer}>
        <OrbitCircles />
      </View>

      {/* Fact Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.factNumber}>Fact #{currentFact.id}</Text>
        <Text style={styles.title}>{currentFact.title}</Text>
        <Text style={styles.description}>{currentFact.description}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.shareButton} onPress={handleShare}>
          <Text style={styles.shareButtonText}>SHARE</Text>
        </Pressable>

        <Pressable
          style={styles.homeButton}
          onPress={() => navigation.navigate('MainScreen')}>
          <Image
            source={require('../../assets/icons/home.png')}
            style={styles.homeIcon}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#180D0C',
    justifyContent: 'space-between',
  },
  circlesContainer: {
    alignItems: 'center',
    marginTop: '10%',
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
  contentContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#1D1110',
    marginHorizontal: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 5.25,
    shadowRadius: 8.84,
    elevation: 5,
  },
  factNumber: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 10,
  },
  shareButton: {
    flex: 1,
    backgroundColor: '#FFA500',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  shareButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  homeButton: {
    // width: 52,
    // height: 52,
    backgroundColor: '#FFA500',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
  },
  homeButtonIcon: {
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
    paddingVertical: 16,
  },
});

export default ShowFact;
