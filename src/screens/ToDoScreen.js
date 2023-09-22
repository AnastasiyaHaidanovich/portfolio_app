import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import theme from '../styles/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';
import { todoElement } from '../components/todoElement';
import todos from '../store/todos';

const ToDoScreen = observer(() => {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.elementsContainer} >
          {!!todos.todos.length && todos.todos.map((item, idx) => todoElement({...item, idx}))}
        </View>
      </ScrollView>
      <View>
        <TextInput
          style={styles.input}
          value={todos.todo.text}
          onChangeText={(text) => todos.setTodoText(text)}
          blurOnSubmit={true}
          onSubmitEditing={(value) => !!value.nativeEvent.text.trim() && todos.setTodo(value.nativeEvent.text.trim())}
          placeholder="Write new todo"/>
      </View>
    </SafeAreaView>
  )
})

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.backgroundColor,
  },
  elementsContainer: {
    margin: 15
  },
  input: {
    fontSize: 22,
    margin: 15,
    padding: 15,
    paddingLeft: 25,
    borderWidth: 4,
    backgroundColor: theme.inputBackgroundColor,
    borderColor: theme.mainLightColor,
    borderRadius: 40
  },
})

export default ToDoScreen;