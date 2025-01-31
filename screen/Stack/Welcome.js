import React, {useEffect} from 'react';
import Pulsation from '../../components/ui/Pulsation';

const Welcome = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2000);
  }, []);
  return (
    <>
      <Pulsation />
    </>
  );
};

export default Welcome;
