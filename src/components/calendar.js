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
  const [date, setDate] = useState(DateTime.now());
  const [switchedMonth, setSwitchedMonth] = useState(0);

  let currentMonth = DateTime.now().minus({month: switchedMonth});
  let calendarMonth = [];

  for (let i = 1; i < currentMonth.startOf('month').weekday; i++){
    calendarMonth.unshift({
      date: currentMonth.startOf('month').minus({days: i}),
      activeMonth: false
    })
  }

  for (let i = 0; i < currentMonth.daysInMonth; i++){
    calendarMonth.push({
      date: currentMonth.startOf('month').plus({days: i}),
      activeMonth: true
    })
  }

  for (let i = 1; i <= currentMonth.endOf('month').endOf('week').diff(currentMonth.endOf('month'), ['days']).toObject().days; i++){
    calendarMonth.push({
      date: currentMonth.endOf('month').plus({days: i}),
      activeMonth: false
    })
  }

  const CalendarDay = (props) => {
    const style = StyleSheet.flatten([
      styles.dayWrap,
      !props.activeMonth ? styles.opacity : null,
      DateTime.fromISO(props.date).weekday == 6 || DateTime.fromISO(props.date).weekday == 7 ? styles.weekendColor : null,
      DateTime.fromISO(props.date).toFormat('dd.MM.yy') == DateTime.now().toFormat('dd.MM.yy') && styles.currentDayColor,
      DateTime.fromISO(props.date).toFormat('dd.MM.yy') == DateTime.fromISO(date).toFormat('dd.MM.yy') && styles.selectedDayColor
    ])

    return (
      <Pressable style={style} onPress={() => setDate(props.date)} key={props.key}>
        <Text style={styles.calendarDay}>{DateTime.fromISO(props.date).day}</Text>
        <Text style={styles.calendarDay}>{DateTime.fromISO(props.date).setLocale('ru').weekdayShort}</Text>
      </Pressable>
    )
  }

  return (
    <>
      <View style={styles.calendarHeader}>
        <Pressable onPress={() => setSwitchedMonth(switchedMonth + 1)}>
          <Text style={styles.calendarDay}>{currentMonth.minus({month: 1}).setLocale('ru').monthLong}</Text>
        </Pressable>
        <Pressable onPress={() => setSwitchedMonth(switchedMonth - 1)}>
          <Text style={styles.calendarDay}>{currentMonth.plus({month: 1}).setLocale('ru').monthLong}</Text>
        </Pressable>
      </View>
      <View style={styles.calendarWrap}>
        {calendarMonth.map((day, idx) => CalendarDay({...day, key: idx}))}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  calendarWrap: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    marginBottom: 50
  },
  calendarHeader: {
    marginTop: 30,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  },
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

export default calendar;