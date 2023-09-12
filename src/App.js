import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes';
//function Section({children, title}) {
//  const isDarkMode = useColorScheme() === 'dark';
//  return (
//    <View style={styles.sectionContainer}>
//      <Text
//        style={[
//          styles.sectionTitle,
//          {
//            color: isDarkMode ? Colors.white : Colors.black,
//          },
//        ]}>
//        {title}
//      </Text>
//      <Text
//        style={[
//          styles.sectionDescription,
//          {
//            color: isDarkMode ? Colors.light : Colors.dark,
//          },
//        ]}>
//        {children}
//      </Text>
//    </View>
//  );
//}

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
