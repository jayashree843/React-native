import { Link } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, TextInput,View, Button, Text, Pressable} from 'react-native';


export default function ForgotPassword({navigation}){
  const [email, onChangeEmail] = React.useState('');
  return(
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.heading}>Forgot Password</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Enter Email ID"
        keyboardType="text"
      />
      
     
      <Pressable style={styles.send_button} onPress={() =>
        navigation.navigate('ForgotPassword', {name: 'let'})
      } >
      <Text style={styles.text}>Send</Text>
    </Pressable>
    </SafeAreaView>
  
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(253,226,77)',
  },
  input: {
    height: 40,
    width:250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'#fff'
  },
  heading:{
    marginBottom:10,
    fontSize: 20,
  },
  send_button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'rgb(59,9,9)',
    marginBottom:10,
  },
 
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
