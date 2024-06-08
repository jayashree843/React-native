import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const RequestReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const requestReset = async () => {
    try {
      const response = await fetch('http://admin.turtu.in/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        setMessage('Check your email for reset instructions.');
      } else {
        setMessage('Error requesting password reset.');
      }
    } catch (error) {
      setMessage('An error occurred.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Request Reset" onPress={requestReset} />
      {message ? <Text>{message}</Text> : null}
    </View>
  );
};

export default RequestReset;
