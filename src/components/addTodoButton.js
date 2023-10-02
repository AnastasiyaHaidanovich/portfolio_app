import { observer } from 'mobx-react-lite';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../styles/theme';
import store from '../store/store';

const windowWidth = Dimensions.get('window').width;

const AddTodoButton = observer(({ navigation }) => {

  return (
    <Pressable
      style={styles.buttonWrap}
      disabled={store.selectedDate === ''}
      onPress={() => navigation.navigate('ToDo')}>
      <LinearGradient start={{x:1,y:0}} end={{x:0,y:0}} colors={theme.buttonColors} style={styles.button}>
        <Text style ={styles.buttonText}>+</Text>
      </LinearGradient>
    </Pressable>
  )
})

const styles = StyleSheet.create({
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
    shadowColor: theme.mainAccentColor,
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

export default AddTodoButton;