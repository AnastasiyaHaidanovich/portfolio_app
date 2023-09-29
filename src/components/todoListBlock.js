import { StyleSheet, View } from 'react-native';
import { todoElement } from './todoElement';
import store from '../store/store';
import { observer } from 'mobx-react-lite';

const TodoListBlock = observer((props) => {
  return (
    <View style={styles.elementsContainer} >
      {!!store.todos.length && store.todos.map((item, idx) => item.date === store.selectedDate && todoElement({...item, idx}))}
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