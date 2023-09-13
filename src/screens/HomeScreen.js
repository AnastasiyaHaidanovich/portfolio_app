import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import theme from '../styles/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={theme.mainLightColor}/>
      <ScrollView>
        <View>
          <Text style={styles.text}>Main Screen</Text>
        </View>
      </ScrollView>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Joke')}>
          <Text style ={styles.buttonText}>Cheer up!</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: theme.backgroundColor
  },
  text: {
    fontSize: 70,
    paddingTop: 200,
    color: 'black',
    marginBottom: 30,
  },
  button: {
    backgroundColor: theme.mainLightColor,
    margin: 10,
    width: '95%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 15,
    color: theme.mainDarkColor,
    fontSize: 24,
  }
})

export default HomeScreen;