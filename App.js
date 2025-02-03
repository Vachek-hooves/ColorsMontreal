import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {MontrealProvider} from './store/context';
import Welcome from './screen/Stack/Welcome';
import Onboarding from './screen/Stack/Onboarding';
import TabNavBar from './screen/Menu/TabNavBar';
import MainScreen from './screen/Stack/MainScreen';
import ChooseColor from './screen/Stack/ChooseColor';
import LocationDetails from './screen/Stack/LocationDetails';
import MapLocation from './components/ui/MapLocation';
import SavedLocations from './screen/Stack/SavedLocations';
import CreateLocation from './screen/Stack/CreateLocation';
import CustomLocationDetails from './screen/Stack/CustomLocationDetails';
import FavoritesLocations from './screen/Stack/FavoritesLocations';
import FavoritesDetails from './screen/Stack/FavoritesDetails';
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
          <Stack.Screen name="LocationDetails" component={LocationDetails} />
          <Stack.Screen name="MapLocation" component={MapLocation} />
          <Stack.Screen name="SavedLocations" component={SavedLocations} />
          <Stack.Screen name="CreateLocation" component={CreateLocation} />
          <Stack.Screen
            name="CustomLocationDetails"
            component={CustomLocationDetails}
          />
          <Stack.Screen
            name="FavoritesLocations"
            component={FavoritesLocations}
          />
          <Stack.Screen name="FavoritesDetails" component={FavoritesDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </MontrealProvider>
  );
}
