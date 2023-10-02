import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { todoElement } from './todoElement';
import store from '../store/store';
import { observer } from 'mobx-react-lite';

const TodoListBlock = observer((props) => {
  const [ selectedDate, setSelectedDate ] = useState(store.selectedDate)
  useEffect(() => {
    setSelectedDate(store.selectedDate)
  },[store.selectedDate])

  return (
    <View style={styles.elementsContainer} >
      {!!store.todos.length && store.todos.map((item, idx) => item.date === selectedDate && todoElement({...item, idx}) || (<View></View>))}
    </View>
  )
})

const styles = StyleSheet.create({
  elementsContainer: {
    minHeight: '100%',
    marginHorizontal: 15
  },
})
export default TodoListBlock;