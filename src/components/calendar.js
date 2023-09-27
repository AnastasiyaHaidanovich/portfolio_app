import{ DateTime } from 'luxon';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import theme from '../styles/theme';

const calendar = () => {
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
      styles.calendarWrap,
      !props.currentWeek ? styles.opacity : null,
      DateTime.fromISO(props.date).weekday == 6 || DateTime.fromISO(props.date).weekday == 7 ? styles.brightColor : null
    ])
    return (
      <Pressable style={style}>
        <Text style={styles.calendarDay}>{DateTime.fromISO(props.date).day}</Text>
        <Text style={styles.calendarDay}>{DateTime.fromISO(props.date).setLocale('ru').weekdayShort}</Text>
      </Pressable>
    )
  }

  return (
    <View style={{display:'flex', justifyContent: 'space-between', flexDirection: 'row',  flexWrap:'wrap'}}>
      {month.map((day, idx) => CalendarDay(day, {key: idx}))}
    </View>
  )
}

const styles = StyleSheet.create({
  calendarWrap: {
    display:'flex',
    width: 45,
    backgroundColor: '#faf3dd',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin: 5
  },
  calendarDay: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'RobotoSlab-Light'
  },
  opacity: {
    opacity: 0.5
  },
  brightColor: {
    backgroundColor: '#fff3b0'
  }
})

export default calendar;