import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import InitialPage from './src/pages/InitialPage';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const gasMenuList = [
    { id : 'Header', Title : '복합 가스 원격 모니터링', routeUrl : '/'},
  ];

  const valveMenuList = [
    { id : 'Header', Title : '매니폴드 밸브 원격 모니터링', routeUrl : '/'},
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialPage">
        <Stack.Screen
          name="InitialPage"
          options= {{ headerShown: false }}
          component={InitialPage}
          gasMenuList={gasMenuList}
          valveMenuList={valveMenuList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
