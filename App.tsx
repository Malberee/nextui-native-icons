import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Snow} from './components'

export default function App() {

  return (
    <View style={styles.container}>
        <Snow color="black" width={100} height={100} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});