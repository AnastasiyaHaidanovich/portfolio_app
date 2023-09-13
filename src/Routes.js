import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import JokesScreen from './screens/JokesScreen';
import theme from './styles/theme';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const options = {
    headerStyle: {
      backgroundColor: theme.mainLightColor,
    },
    headerTintColor: theme.greyColor,
    headerTitleStyle: {
      color: theme.greyColor,
      fontWeight: 'bold',
      fontSize: 22
    },
  }
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={options}/>
      <Stack.Screen name="Joke" component={JokesScreen} options={options}/>
    </Stack.Navigator>
  )
}

export default Routes;