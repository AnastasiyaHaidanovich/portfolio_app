import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../styles/theme';
//import CheckBox from '@react-native-community/checkbox';
import todos from '../store/todos';
import checkbox from '../../assets/icons/checkbox.png';
import checked from '../../assets/icons/checked.png';

export const todoElement = (props) => {
  return (
    <View style={styles.elementWrap} key={props.idx} >
      <Text style={styles.text}>{props.id}</Text>
      <Text style={{...styles.text, flex: 1}}>{props.text}</Text>
      <View>
        <TouchableOpacity onPress={() => todos.setTodoDone(props.id)} style={{alignItems: 'center', justifyContent: 'center'}}>
          {props.done ? <Image source={checked} /> : <Image source={checkbox} />}
        </TouchableOpacity>

{//        <CheckBox
//          disabled={false}
//          value={todos.todos[props.id - 1].done}
//          onValueChange={(newValue) => {todos.setTodoDone(props.id-1)}}
//        />
}
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
    fontSize: 22
  }
})
