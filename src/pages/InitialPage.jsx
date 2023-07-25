/* eslint-disable react/react-in-jsx-scope */
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../assets/logo.png';

const InitialPage = ({gasMenuList, valveMenuList}) => {

  console.log(gasMenuList);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logoImageBox} />
        <Text style={styles.logoTextBox}>외업 가스 안전 관리 시스템</Text>
      </View>

      <View style={styles.routeContainer}>
        <Text>This is the Routing Box</Text>
      </View>

    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: '100%',
  },
  logoContainer: {
    position: 'relative',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '25%',
  },
  routeContainer: {
    position: 'relative',
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '90%',
    height: '75%',
  },

  logoImageBox: {
    position: 'relative',
    width: '90%',
    height: '50%',
  },
  logoTextBox: {
    position: 'relative',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default InitialPage;
