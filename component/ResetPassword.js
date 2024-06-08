import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const ResetPassword = ({ route }) => {
  const { token } = route.params;
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const resetPassword = async () => {
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('https://your-api-url.com/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
      });
      const data = await response.json();
      if (data.success) {
        setMessage('Password has been reset.');
      } else {
        setMessage('Error resetting password.');
      }
    } catch (error) {
      setMessage('An error occurred.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="New Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Reset Password" onPress={resetPassword} />
      {message ? <Text>{message}</Text> : null}
    </View>
  );
};

export default ResetPassword;
