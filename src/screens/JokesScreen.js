import React, { useState }  from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../styles/theme';

const JokesScreen = () => {
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(true);
  const [punchlineVisible, setPunchlineVisible] = useState(false);
  const getJoke = () => {
    setLoading(true);
    fetch("https://official-joke-api.appspot.com/jokes/programming/random")
      .then((data) => data.json())
      .then((res) => {
        setJoke(res[0]);
        setLoading(false);
      }
    )};

  useFocusEffect(
    React.useCallback(() => {
      getJoke();
    },[])
  )

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Pressable
            style={styles.button}
            onPress={() => setPunchlineVisible(true)}>
              {!!loading && <ActivityIndicator size={30} color={theme.mainLightColor} style={{padding: 30, paddingBottom: 5}}/>}
              <Text style ={styles.buttonText}>{joke.setup}</Text>
            </Pressable>
            {punchlineVisible &&
              <Pressable
                style={styles.button}
                onPress={() => {
                  setJoke({});
                  setPunchlineVisible(false);
                  getJoke();
                }}>
                  <Text style ={styles.buttonText}>{joke.punchline}</Text>
              </Pressable>
            }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.backgroundColor
  },
  text: {
    fontSize: 70,
    paddingTop: 200,
    color: 'black',
    marginBottom: 30,
  },
  button: {
    backgroundColor: theme.lightGreyColor,
    borderRadius:10,
    justifyContent: 'center',
    marginTop: 50,
    marginHorizontal: 90,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.mainAccentColor
  }
})

export default JokesScreen;