import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import * as Notifications from 'expo-notifications';
import {useCallback} from "react";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
export default function App() {
  const askPermission = useCallback(async () => {
    try {
      // const x = await Notifications.getPermissionsAsync();
      // const y = await Notifications.getDevicePushTokenAsync();
      await Notifications.requestPermissionsAsync();
      // console.log(x,y, 'here')
    } catch (e) {
      console.log(e, 'inside error')
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text>first step</Text>
      <Button title='Ask Permission' onPress={askPermission} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
