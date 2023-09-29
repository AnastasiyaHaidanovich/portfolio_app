import {
  Dimensions,
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
import { DateTime } from 'luxon';
import Calendar from '../components/calendar';
import TodoListBlock from '../components/todoListBlock';

const windowWidth = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {

  return (
    <>
      <StatusBar backgroundColor={theme.mainLightColor}/>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.date}>{DateTime.now().setLocale('ru').weekdayShort} {DateTime.now().setLocale('ru').toFormat('dd LLL yyyy')}</Text>
        <Calendar />
        <TodoListBlock />
        </ScrollView>
        <Pressable style={styles.buttonWrap}
          onPress={() => navigation.navigate('ToDo')}>
          <LinearGradient start={{x:1,y:0}} end={{x:0,y:0}} colors={theme.buttonColors} style={styles.button}>
            <Text style ={styles.buttonText}>+</Text>
          </LinearGradient>
        </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: theme.backgroundColor,
  },
  date: {
    marginTop: 20,
    textAlign: 'right',
    color: theme.dateTitleColor,
    width: '90%',
    fontSize: 14,
    fontFamily: 'Comfortaa-SemiBold'
  },
  buttonWrap:{
    marginTop: -100,
    borderRadius: 50,
    left: windowWidth / 2 - 38,
    backgroundColor: 'transparent',
    width: 75,
    alignItems: 'center'
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
    color: theme.mainDarkColor,
  },

})

export default HomeScreen;