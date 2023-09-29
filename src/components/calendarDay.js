import{ DateTime } from 'luxon';
import {
  Pressable,
  StyleSheet,
  Text
} from 'react-native';
import theme from '../styles/theme';
import store from '../store/store';

export const calendarDay = (props) => {

  const style = StyleSheet.flatten([
    styles.dayWrap,
    !props.activeMonth ? styles.opacity : null,
    DateTime.fromISO(props.date).weekday == 6 || DateTime.fromISO(props.date).weekday == 7 ? styles.weekendColor : null,
    DateTime.fromISO(props.date).toFormat('dd.MM.yy') == DateTime.now().toFormat('dd.MM.yy') && styles.currentDayColor,
    DateTime.fromISO(props.date).toFormat('dd.MM.yy') == store.selectedDate && styles.selectedDayColor
  ])

  return (
    <Pressable
      style={style}
      onPress={() => {
        store.setSelectedDate(props.date);
      }}
      key={props.key}>
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
    shadowColor: "#000",
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
  currentDayColor: {
    backgroundColor: theme.currentDayColor
  },
  selectedDayColor: {
    backgroundColor: theme.selectedDayColor
  }
})
