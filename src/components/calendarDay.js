import{ DateTime } from 'luxon';
import {
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import theme from '../styles/theme';
import store from '../store/store';

export const calendarDay = (props) => {

  const style = StyleSheet.flatten([
    styles.dayWrap,
    !props.activeMonth ? styles.opacity : null,
    DateTime.fromISO(props.date).weekday == 6 || DateTime.fromISO(props.date).weekday == 7 ? styles.weekendColor : null,
    DateTime.fromISO(props.date).toFormat('dd.MM.yy') == DateTime.now().toFormat('dd.MM.yy') && styles.currentDayStyle,
    DateTime.fromISO(props.date).toFormat('dd.MM.yy') == store.selectedDate && styles.selectedDayColor
  ])

  return (
    <Pressable
      style={style}
      onPress={() => {
        store.setSelectedDate(props.date);
      }}
      key={props.key}>
      {store.todos.map(elem =>
        elem.date == props.date.toFormat('dd.MM.yy')
        && (
          <View style={styles.redCircle} key={elem.data.id}></View>
        )
      )}
      <Text style={styles.calendarDay}>{DateTime.fromISO(props.date).day}</Text>
      <Text style={styles.calendarDay}>{DateTime.fromISO(props.date).setLocale('ru').weekdayShort}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  dayWrap: {
    display:'flex',
    width: '10%',
    backgroundColor: theme.dayWrapColor,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin: 5,
    shadowColor: theme.mainAccentColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  calendarDay: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'RobotoSlab-Light'
  },
  opacity: {
    opacity: 0.5
  },
  weekendColor: {
    backgroundColor: theme.weekendColor
  },
  currentDayStyle: {
    borderColor: theme.currentDayColor,
    borderBottomWidth: 0.5,
    borderRightWidth: 1.5
  },
  selectedDayColor: {
    backgroundColor: theme.selectedDayColor
  },
  redCircle: {
    position: 'absolute',
    right: -3,
    borderRadius: 5,
    width: 10,
    height: 10,
    borderColor: 'red',
    borderWidth: 1
  }
})
