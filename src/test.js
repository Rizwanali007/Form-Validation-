
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import  useValidation  from '@react-native-form-validator';
 
const FormTest = () => {
  const [name, setName] = useState('My name');
  const [email, setEmail] = useState('tibtib@gmail.com');
  const [number, setNumber] = useState('56');
  const [date, setDate] = useState('2017-03-01');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 
  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { name, email, number, date, newPassword, confirmPassword },
    });
 
  const _onPressButton = () => {
    validate({
      name: { minlength: 3, maxlength: 7, required: true },
      email: { email: true },
      number: { numbers: true },
      date: { date: 'YYYY-MM-DD' },
      confirmPassword: { equalPassword: newPassword },
    });
  };
 
  return (
    <View>
      <TextInput onChangeText={setName} value={name} />
      <TextInput onChangeText={setEmail} value={email} />
      <TextInput onChangeText={setNumber} value={number} />
      <TextInput onChangeText={setDate} value={date} />
      {isFieldInError('date') &&
        getErrorsInField('date').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}
 
      <TextInput
        onChangeText={setNewPassword}
        value={newPassword}
        secureTextEntry={true}
      />
      <TextInput
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry={true}
      />
      {isFieldInError('confirmPassword') &&
        getErrorsInField('confirmPassword').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}
 
      <TouchableHighlight onPress={_onPressButton}>
        <Text>Submit</Text>
      </TouchableHighlight>
 
      <Text>{getErrorMessages()}</Text>
    </View>
  );
};
 
export default FormTest;