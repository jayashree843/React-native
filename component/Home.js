import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../component/turtu logo.png')}
        style={{ width: 80, height: 100 }}
      />
      <Text style={styles.heading}>NEEDS TO DOORS</Text>
      <View style={styles.btnContainer}>
        <Button
      title="Lets get started"
      onPress={() =>
        navigation.navigate('Form', {name: 'let'})
      }
      color="#3B0909"
    />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(253,226,77)',
  },
  heading: {
    marginTop: 10,
    color: 'rgb(118,107,47)',
  },
  btnContainer: {
    marginTop: 10,
  },
});
