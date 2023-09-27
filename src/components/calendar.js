import { useState } from 'react';
import{ DateTime } from 'luxon';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import theme from '../styles/theme';

const calendar = () => {
  const [date, setDate] = useState(DateTime.now())
  let month = []

  for (let i = 1; i < DateTime.now().startOf('month').weekday; i++){
    month.unshift({
      date:DateTime.now().startOf('month').minus({days: i}),
      currentWeek: false
    })
  }

  for (let i = 0; i < DateTime.now().daysInMonth; i++){
    month.push({
      date: DateTime.now().startOf('month').plus({days: i}),
      currentWeek: true
    })
  }

  for (let i = 1; i <= DateTime.now().endOf('month').endOf('week').diff(DateTime.now().endOf('month'), ['days']).toObject().days; i++){
    month.push({
      date: DateTime.now().endOf('month').plus({days: i}),
      currentWeek: false
    })
  }

  const CalendarDay = (props) => {
    const style = StyleSheet.flatten([
      styles.dayWrap,
      !props.currentWeek ? styles.opacity : null,
      DateTime.fromISO(props.date).weekday == 6 || DateTime.fromISO(props.date).weekday == 7 ? styles.weekendColor : null,
      DateTime.fromISO(props.date).toFormat('dd.MM.yy') == DateTime.fromISO(date).toFormat('dd.MM.yy') && styles.selectedDayColor,
      DateTime.fromISO(props.date).toFormat('dd.MM.yy') == DateTime.now().toFormat('dd.MM.yy') && styles.currentDayColor
    ])
    return (
      <Pressable style={style} onPress={() => setDate(props.date)}>
        <Text style={styles.calendarDay}>{DateTime.fromISO(props.date).day}</Text>
        <Text style={styles.calendarDay}>{DateTime.fromISO(props.date).setLocale('ru').weekdayShort}</Text>
      </Pressable>
    )
  }

  return (
    <View style={styles.calendarWrap}>
      {month.map((day, idx) => CalendarDay(day, {key: idx}))}
    </View>
  )
}

const styles = StyleSheet.create({
  calendarWrap: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 50,
    paddingHorizontal: 10
  },
  dayWrap: {
    display:'flex',
    width: 45,
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

export default calendar;