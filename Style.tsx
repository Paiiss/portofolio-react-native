import { StatusBar, Platform, StyleSheet } from 'react-native';

export const Style = StyleSheet.create({
  SafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
