import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import JokesScreen from './screens/JokesScreen';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Joke" component={JokesScreen} />
    </Stack.Navigator>
  )
}

export default Routes;