import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import theme from '../styles/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';
import store from '../store/store';

const ToDoScreen = observer(({ navigation }) => {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Pressable style={styles.arrowBack} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.arrow}>&#8592;</Text>
        </Pressable>

      </ScrollView>
      <View>
        <TextInput
          style={styles.input}
          value={store.text}
          blurOnSubmit={true}
          onSubmitEditing={(value) => !!value.nativeEvent.text.trim() && store.setTodo({text: value.nativeEvent.text.trim()})}
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
  arrowBack: {
    padding: 15,
  },
  arrow: {
    fontSize: 30,
  }
})

export default ToDoScreen;