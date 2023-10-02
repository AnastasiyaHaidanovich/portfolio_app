import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import theme from '../styles/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';
import store from '../store/store';

const ToDoScreen = observer(({ navigation }) => {
  const [ text, setText ] = useState('')

  return(
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={'#e7e6f7'} barStyle={'dark-content'}/>
      <ScrollView>
        <Pressable style={styles.arrowBack} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.arrow}>&#8592;</Text>
        </Pressable>
        <View style={styles.wrap}>
          <Text style={styles.title}>Новая задача</Text>
          <TextInput
            style={styles.input}
            value={store.text}
            blurOnSubmit={true}
            onSubmitEditing={(value) => !!value.nativeEvent.text.trim() && setText({data:{text: value.nativeEvent.text.trim()}})}
            placeholder="Название задачи"/>
          <Pressable
            style={styles.button}
            disabled={text == ''}
            onPress={() => {
              store.setTodo(text);
              navigation.navigate('Home');
            }}
          >
            <Text style={styles.buttonText}>Добавить задачу</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
})

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#e7e6f7',
  },
  wrap: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fbfbf2',
    margin: 20,
//    height: 500,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: theme.mainAccentColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    overflow: 'hidden'
  },
  title: {
    lineHeight: 26,
    fontSize: 24,
    color: theme.mainAccentColor,
    padding: 20,
    textAlign: 'center',
    fontFamily: 'Comfortaa'
  },
  input: {
    fontSize: 22,
    margin: 15,
    marginHorizontal: 25,
    fontFamily: 'Comfortaa',
    borderBottomColor: theme.mainAccentColor,
    borderBottomWidth: 1,
    marginBottom: 250
  },
  arrowBack: {
    padding: 15,
  },
  arrow: {
    fontSize: 30,
  },
  button: {
    backgroundColor: theme.mainAccentColor,
    width: '100%',
    padding: 25,
  },
  buttonText: {
    textAlign:'center',
    fontWeight:'bold',
    fontFamily: 'Comfortaa',
    fontSize: 22,
    color: 'white'
  }
})

export default ToDoScreen;