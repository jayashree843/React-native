import React from 'react';
import {SafeAreaView, StyleSheet, TextInput,View, Button, Text,Pressable} from 'react-native';


export default function Form({navigation}){
  const [firstName, onChangeFirstName] = React.useState('');
  const [lastName, onChangeLastName] = React.useState('');
  const [emailid, onChangeEmailid] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [cPassword, onChangeCPassword] = React.useState('');
  return(
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.heading}>Lets get started</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeFirstName}
        value={firstName}
        placeholder="First Name"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeLastName}
        value={lastName}
        placeholder="Last Name"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmailid}
        value={emailid}
        placeholder="Email ID"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeCPassword}
        value={cPassword}
        placeholder="Confirm Password"
        keyboardType="text"
      />
      <View>
      
    <Pressable style={styles.search_button} onPress={() =>
        navigation.navigate('Welcome', {name: 'let'})
      } >
      <Text style={styles.text}>Search</Text>
    </Pressable>
      </View>
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
    fontSize:20,
  },
  search_button:{
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
