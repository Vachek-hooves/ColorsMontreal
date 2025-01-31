import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

const {width} = Dimensions.get('window');

const slides = [
  {
    title: 'Explore Montreal through its colors',
    subtitle:
      'Each color tells a story. Discover the city from a new perspective.',
  },
  {
    title: 'Colors that come alive',
    subtitle:
      'Choose colors, find places that inspire. A park, a bridge, a building or a street mural — everything is connected.',
  },
  {
    title: 'Just choose a color',
    subtitle:
      'Click on your favorite shade and find a place that represents it.',
  },
  {
    title: 'Ready to get started?',
    subtitle:
      'Experience Montreal through its palette of colors. Choose your color and discover something new!',
  },
  // Add more slides if needed
];

const Onboarding = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      navigation.navigate('TabNavBar');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
      // style={styles.contentContainer} 
      contentContainerStyle={styles.contentContainer}
      >
        {/* Dots indicator */}
        <View style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    currentSlideIndex === index ? '#FFA500' : '#333',
                },
              ]}
            />
          ))}
        </View>
        <Image
          source={require('../../assets/image/Onboarding/OnboardingLogo.png')}
          style={styles.image}
        />

        {/* Title and subtitle */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{slides[currentSlideIndex].title}</Text>
          <Text style={styles.subtitle}>
            {slides[currentSlideIndex].subtitle}
          </Text>
        </View>

        {/* Next button */}
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 30,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 3,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 280,
    alignSelf: 'center',
    marginTop: 20,
  },
});
