
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Reg from './src/Reg';

class App extends Component {
  
  
  render() {
    return (
      <View style={styles.container}>
      
<Reg/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36485f',
    flex: 1,
    justifyContent: 'center',
   
    paddingLeft: 60,
    paddingRight: 60,
    

  },
});
export default App;