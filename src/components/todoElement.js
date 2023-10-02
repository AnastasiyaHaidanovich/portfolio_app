import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../styles/theme';
import store from '../store/store';

export const todoElement = (props) => {
  const style = StyleSheet.flatten([styles.elementWrap, props.data.done && styles.blurElement])

  return (
    <View style={style} key={props.idx} >
      <Text style={{...styles.text, flex: 1}}>{props.data.text}</Text>
      <View style={styles.rightBlock}>
        <TouchableOpacity onPress={() => store.removeTodo(props.data.id)} style={styles.rightBlockItems}>
           <Text style={{...styles.text, fontSize: 25}}>&#9932;</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => store.setTodoDone(props.data.id)} style={styles.rightBlockItems}>
          {props.data.done ? <Text style={styles.text}>&#9745;</Text> : <Text style={{...styles.text, fontSize: 25}}>&#9633;</Text>}
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
    paddingVertical: 10,
    paddingLeft: 25,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRightWidth: 20,
    borderColor: theme.selectedDayColor,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: theme.mainAccentColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  blurElement:{
    opacity: 0.7
  },
  text: {
    marginRight: 10,
    lineHeight: 22,
    fontSize: 20,
    color: 'black',
    fontFamily: 'Comfortaa'
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
