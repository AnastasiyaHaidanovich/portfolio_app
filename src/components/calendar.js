import { useState } from 'react';
import{ DateTime } from 'luxon';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import theme from '../styles/theme';
import { calendarDay } from './calendarDay';

const calendar = () => {
  const [date, setDate] = useState(DateTime.now().toFormat('dd.MM.yy'));
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
        {calendarMonth.map((day, idx) => calendarDay({...day, key: idx}))}
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

})

export default calendar;