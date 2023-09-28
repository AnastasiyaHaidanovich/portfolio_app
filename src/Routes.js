import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import JokesScreen from './screens/JokesScreen';
import ToDoScreen from './screens/ToDoScreen';
import theme from './styles/theme';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const options = {
    headerShown: false,
  }
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={options}/>
      <Stack.Screen name="Joke" component={JokesScreen} options={options}/>
      <Stack.Screen name="ToDo" component={ToDoScreen} options={options}/>
    </Stack.Navigator>
  )
}

export default Routes;