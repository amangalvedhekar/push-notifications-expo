import { StatusBar } from 'expo-status-bar';
import {Button, Platform, StyleSheet, View} from 'react-native';
import * as Notifications from 'expo-notifications';
import {useCallback, useRef, useState} from "react";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
if (Platform.OS === 'android') {
  Notifications.setNotificationChannelAsync('default', {
    name: 'default',
    importance: Notifications.AndroidImportance.MAX,
    vibrationPattern: [0, 250, 250, 250],
    lightColor: '#FF231F7C',
  });
}
export default function App() {

  const askPermission = useCallback(async () => {
    try {
      // const x = await Notifications.getPermissionsAsync();
      // const y = await Notifications.getDevicePushTokenAsync();
      await Notifications.requestPermissionsAsync();
     const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token, 'here');
      // console.log(x,y, 'here')
    } catch (e) {
      console.log(e, 'inside error')
    }
  }, []);
  return (
    <View style={styles.container}>
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
