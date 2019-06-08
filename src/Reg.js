import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  CheckBox,
  TouchableOpacity,
} from 'react-native';


import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';
var hobbies = [
  {label: "Male", value: 0},
  {label: "Female", value: 1},
];



export default class Reg extends Component {

  render() {

    return (
      <View style={styles.Regform}>
        <Text style={styles.header}>Registration</Text>

        <TextInput style={styles.textinput} placeholder="First Name"
        />


        <TextInput style={styles.textinput} placeholder="Last Name"
        />




        <TextInput style={styles.textinput} placeholder="user@email.com" label="Email: "
          secureTextEntry />
        <TextInput style={styles.textinput} placeholder="password"
          label="password" />
        
        <TextInput style={styles.textinput} placeholder="Your City"/>

        <TextInput style={styles.textinput} placeholder="Cell Number"/>



        <RadioForm

        radio_props={hobbies}
        onPress={(value) => {}}
        formHorizontal={true}
        style={{marginRight:20}}



        />

<Text>Accepts the term and conditions</Text>
        <CheckBox/>
        



        <TouchableOpacity style={styles.button}>

          <Text style={styles.btntext}>Sign up</Text>

        </TouchableOpacity>




      </View>

    );
  }
}

const styles = StyleSheet.create({
  Regform: {
    backgroundColor: '#36485f',
  },

  header:
  {
    fontSize: 34,
    color: '#fff',
    marginBottom: 24,
    borderBottomColor: '#199187',


    borderBottomWidth: 1,



  },

  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#f8f8f8',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,

  },


  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },



});
