import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.text}>Main Screen</Text>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Joke')}>
            <Text style ={styles.buttonText}>Cheer up!</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 70,
    paddingTop: 200,
    color: 'black',
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'lightgrey',
    height: 60,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'darkblue'
  }
})

export default HomeScreen;