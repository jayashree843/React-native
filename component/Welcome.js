import { Link } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, TextInput,View, Button, Text, Pressable} from 'react-native';


export default function Welcome({navigation}){
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  return(
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.heading}>Welcome Back</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="Username / ID"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
        keyboardType="text"
      />
     
      <Pressable style={styles.login_button} onPress={() =>
        navigation.navigate('Search', {name: 'let'})
      } >
      <Text style={styles.text}>Login</Text>
    </Pressable>
    <Pressable style={styles.signup_button} onPress={() =>
        navigation.navigate('Form', {name: 'let'})
      } >
      <Text style={styles.text}>Sign Up</Text>
    </Pressable>
    <Pressable style={styles.forgot_button} onPress={() =>
        navigation.navigate('ForgotPassword', {name: 'let'})
      } >
      <Text style={styles.text_forgot}>Forgot password ?</Text>
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
  login_button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'rgb(59,9,9)',
    marginBottom:10,
  },
  signup_button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'rgb(71,108,36)',
  },
  text_forgot:{
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
    paddingVertical:10,
  },
 
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
