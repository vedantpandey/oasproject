import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {

    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.button}>
            <Button title='Course list' onPress={() => navigation.navigate('CourseList')} />
        </View>
        <Button title='Add new course' onPress={() => navigation.navigate('AddNewCourse')} />
      </View>
    );
}
  

  {/* <View style={styles.button}>
      <Button title='Courses list' />
  </View>
  <Button title='join a new course' /> */}

  
