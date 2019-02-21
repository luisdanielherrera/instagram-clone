import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import Store from './Store/Store'
import Seleccion from './Seleccion';

export default class App extends React.Component {

  state = {
    nombre: "instagram-clone "
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>

          <Seleccion />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
