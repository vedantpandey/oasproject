import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';

export default function CourseList() {

    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Enter Code</Text>
        <TextInput 
          placeholder='e.g abc123'
          style={globalStyles.input}
        />
        <Button title='Join Course' style={globalStyles.button} />
      </View>
    );
}