import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {MontrealProvider} from './store/context';
import Welcome from './screen/Stack/Welcome';
import Onboarding from './screen/Stack/Onboarding';
import TabNavBar from './screen/Menu/TabNavBar';
import MainScreen from './screen/Stack/MainScreen';
import ChooseColor from './screen/Stack/ChooseColor';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MontrealProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="TabNavBar" component={TabNavBar} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="ChooseColor" component={ChooseColor} />
        </Stack.Navigator>
      </NavigationContainer>
    </MontrealProvider>
  );
}
