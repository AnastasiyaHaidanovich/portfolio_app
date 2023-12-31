import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../styles/theme';
import todos from '../store/todos';

export const todoElement = (props) => {
  return (
    <View style={styles.elementWrap} key={props.idx} >
      <Text style={styles.text}>{props.idx+1}</Text>
      <Text style={{...styles.text, flex: 1}}>{props.text}</Text>
      <View style={styles.rightBlock}>
        <TouchableOpacity onPress={() => todos.removeTodo(props.id)} style={styles.rightBlockItems}>
           <Text style={{...styles.text, fontSize: 25}}>&#9932;</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => todos.setTodoDone(props.id)} style={styles.rightBlockItems}>
          {props.done ? <Text style={styles.text}>&#9745;</Text> : <Text style={{...styles.text, fontSize: 25}}>&#9633;</Text>}
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  elementWrap: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: theme.inputBackgroundColor,
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    marginRight: 10,
    lineHeight: 25,
    fontSize: 22
  },
  rightBlock: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '17%'
  },
  rightBlockItems: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
