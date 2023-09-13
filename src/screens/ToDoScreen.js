import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import theme from '../styles/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';

const ToDoScreen = () => {

  const todoElement = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
      <View style={styles.elementWrap} >
       <Text style={styles.text}>1</Text>
       <Text style={{...styles.text, flex: 1}}>First task</Text>
       <View>
       <CheckBox
         disabled={false}
         value={toggleCheckBox}
         onValueChange={(newValue) => setToggleCheckBox(newValue)}
       />
      </View>
      </View>
    )
  }
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.elementsContainer} >
          {todoElement()}
          {todoElement()}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.backgroundColor,
  },
  elementsContainer: {
    margin: 15
  },
  elementWrap: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#fff7c1',
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  text: {
    marginRight: 10,
    fontSize: 20
  }
})

export default ToDoScreen;