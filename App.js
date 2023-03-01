import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [email, setEmail] =useState('');
  const [password, setPassword] = useState('');
  const [displayText, setDisplayText] = useState('');
  
  const printInputs = () => {
    //setDisplayText(`Email: ${email} \nPassword: ${password}`)
    if (!isValidEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
    } else {
      setDisplayText(`Email: ${email}\nPassword: ${password}`);
    }
  }
  const isValidEmail = (email) => {
    // regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const clear = () => {
    {setDisplayText('')}
    {setEmail('')}
    {setPassword('')}
  }

  return (
    <View style={styles.container}>
      <Text>Log In</Text>
      <View>
        <TextInput 
          style={styles.text} 
          placeholder='Enter Email' 
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput 
          style={styles.text} 
          placeholder='Enter Password'
          onChangeText= {text => setPassword(text)}
          value={password}
          secureTextEntry = {true}
        />
        <Button 
          title='Submit'
          onPress={printInputs}
        />
        <Text>{displayText}</Text>
        <Button 
          title='Clear'
          onPress={clear}
        />

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    borderColor: 'black',
    borderWidth: 2,
    width: 200,
    padding: 10,
    margin: 10,
  }
});