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
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={theme.mainLightColor}/>
        <Pressable
          onPress={() => navigation.navigate('ToDo')}>
          <LinearGradient start={{x:1,y:0}} end={{x:0,y:0}} colors={theme.buttonColors} style={styles.button}>
            <Text style ={styles.buttonText}>+</Text>
          </LinearGradient>
        </Pressable>
        {
//        <Pressable
//          style={{width: '95%'}}
//          onPress={() => navigation.navigate('Joke')}>
//          <LinearGradient start={{x:1,y:0}} end={{x:0,y:0}} colors={theme.buttonColors} style={styles.button}>
//            <Text style ={styles.buttonText}>Cheer up!</Text>
//          </LinearGradient>
//        </Pressable>
        }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: theme.backgroundColor,
  },
  button: {
    width: 75,
    height: 75,
    backgroundColor: theme.mainLightColor,
    marginBottom: 25,
    borderRadius: 50,
    justifyContent: 'center',
    paddingTop: 9,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  buttonText: {
    fontSize: 50,
    lineHeight: 50,
//    fontWeight: 'bold',
//    paddingVertical: 15,
    color: theme.mainDarkColor,
  },

})

export default HomeScreen;