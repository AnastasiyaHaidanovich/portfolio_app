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
import { DateTime } from 'luxon';
import Calendar from '../components/calendar';
import TodoListBlock from '../components/todoListBlock';
import AddTodoButton from '../components/addTodoButton';

const HomeScreen = ({ navigation }) => {

  return (
    <>
      <StatusBar backgroundColor={theme.backgroundColor} barStyle={'dark-content'}/>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.date}>{DateTime.now().setLocale('ru').weekdayShort} {DateTime.now().setLocale('ru').toFormat('dd LLL yyyy')}</Text>
        <Calendar />
        <TodoListBlock />
        </ScrollView>
        <AddTodoButton navigation={navigation}/>
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
    paddingBottom: 100
  },
  date: {
    marginTop: 20,
    textAlign: 'right',
    color: theme.dateTitleColor,
    width: '90%',
    fontSize: 14,
    fontFamily: 'Comfortaa-SemiBold'
  },
})

export default HomeScreen;