import { StyleSheet, View } from 'react-native';
import { todoElement } from './todoElement';
import todos from '../store/todos';
import { observer } from 'mobx-react-lite';

const TodoListBlock = observer((props) => {
  return (
    <View style={styles.elementsContainer} >
      {!!todos.todos.length && todos.todos.map((item, idx) => todoElement({...item, idx}))}
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