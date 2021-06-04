import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from './components/AppHeader';
import db from './config'

export default class App extends React.Component {
  anjali1Pressed() {
    var anjali1=db.ref('Anjali/' +'/')
    anjali1.update({'absent':'true'})
  }
  
  anjali2Pressed() {
    var anjali2=db.ref('Anjali/' +'/')
    anjali2.update({'present':'true'})
  }

   alan1Pressed() {
    var alan1=db.ref('Alan/' +'/')
    alan1.update({'absent':'true'})
  }

  alan2Pressed() {
    var alan2=db.ref('Alan/' +'/')
    alan2.update({'absent':'true'})
  }

  rupin1Pressed() {
    var rupin1=db.ref('Rupin/' +'/')
    rupin1.update({'absent':'true'})
  }

  rupin2Pressed() {
    var rupin2=db.ref('Rupin/' +'/')
    rupin2.update({'absent':'true'})
  }
render(){
  return (
    <View style={styles.container}>
      <AppHeader />
      <Text style={{ marginTop: 0 }}>
        1. Anjali
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            borderWidth: 2,
            borderRadius: 1,
            marginTop: 50,
            width: 100,
            height: 25,
            marginLeft: 30,
            backgroundColor:'green'
          }}
           onPress={() => {
            this.anjali2Pressed();
          }}>
          <Text style={{ textAlign: 'center', color: 'blank' }}>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            borderWidth: 2,
            borderRadius: 1,
            marginTop: 50,
            width: 100,
            height: 25,
            marginLeft: 30,
            backgroundColor:'red'
          }}
          onPress={() => {
            this.anjali1Pressed();
          }}>
          <Text style={{ textAlign: 'center', color: 'blank' }}>Absent</Text>
        </TouchableOpacity>
      </Text>

      <Text style={{ marginTop: 0 }}>
        2.Rupin
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            borderWidth: 2,
            borderRadius: 1,
            marginTop: 50,
            width: 100,
            height: 25,
            marginLeft: 30,
             backgroundColor:'green'
          }}
          onPress={() => {
            this.rupin2Pressed();
          }}>
          <Text style={{ textAlign: 'center', color: 'blank' }}>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            borderWidth: 2,
            borderRadius: 1,
            marginTop: 50,
            width: 100,
            height: 25,
            marginLeft: 30,
            backgroundColor:'red'
          }}
          onPress={() => {
            this.rupin1Pressed();
          }}>
          <Text style={{ textAlign: 'center', color: 'blank' }}>Absent</Text>
        </TouchableOpacity>
      </Text>
      <Text style={{ marginTop: 0 }}>
        3.Alan
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            borderWidth: 2,
            borderRadius: 1,
            marginTop: 50,
            width: 100,
            height: 25,
            marginLeft: 30,
            backgroundColor:'green'
          }}
          onPress={() => {
            this.alan2Pressed();
          }}>
          <Text style={{ textAlign: 'center', color: 'blank' }}>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            borderWidth: 2,
            borderRadius: 1,
            marginTop: 50,
            width: 100,
            height: 25,
            marginLeft: 30,
            backgroundColor:'red'
          }}
          onPress={() => {
            this.alan1Pressed();
          }}>
          <Text style={{ textAlign: 'center', color: 'blank' }}>Absent</Text>
        </TouchableOpacity>
      </Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
