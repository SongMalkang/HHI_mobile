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

function getComponent(routeUrl) {
  switch (routeUrl) {
    case '/gas/monitoring':
      return 'ttesting';
    case '/gas/eventlog':
      return 'testing';
    default:
      return InitialPage;
  }
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const gasMenuList = [
    { id : 'g0', title : '복합 가스 원격 모니터링', routeUrl : '/noo'},
    { id : 'g1', title : 'ㄴ 실시간 가스 현황 조회', routeUrl : '/gas/monitoring' },
    { id : 'g2', title : 'ㄴ 가스 알람 및 이력 조회', routeUrl : '/gas/eventlog' },
    { id : 'g3', title : 'ㄴ 가스 감지기 설치/철거 등록', routeUrl : '/gas/device' },
    { id : 'g4', title : 'ㄴ 가스 감지기 상태 확인', routeUrl : '/gas/status' },
  ];

  const valveMenuList = [
    { id : 'v0', title : '매니폴드 밸브 원격 모니터링', routeUrl : '/no'},
    { id : 'v1', title : 'ㄴ 실시간 밸브 장치 상태 조회', routeUrl : '/valve/monitoring' },
    { id : 'v2', title : 'ㄴ 밸브 제어 이력 조회', routeUrl : '/valve/history' },
    { id : 'v3', title : 'ㄴ 밸브 원격 제어', routeUrl : '/valve/control' },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialPage">
        {[...gasMenuList, ...valveMenuList].map(({ id, title, routeUrl }) => (
          <Stack.Screen
            key={id}
            name={routeUrl}
            title={title}
            options= {{ headerShown: false }}
            component={getComponent(routeUrl)}
          />
        ))}
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
