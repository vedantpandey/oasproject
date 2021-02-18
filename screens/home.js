import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import firebasedb from '../database/firebaseDb';


export default function Home({ navigation }) {
    const [Student, setStudent] = useState({});
    
    useEffect(() => {
      let doc=firebasedb.firestore().collection('students').get();
      doc.then((snapshot) => {
        snapshot.docs.forEach(doc => {
          setStudent({
            cids: doc.data().courseids
          })
        });
      })
      // console.log(Student);
    }, [])
      
    const pressHandler = () => {
      navigation.navigate('CourseList', Student)
    }
    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.button}>
            <Button title='Courses list' onPress={pressHandler} />
        </View>
        <Button title='Join new course' onPress={() => navigation.navigate('AddNewCourse', Student)} />
        {/* <Text>{Animals[0].name}</Text> */}
      </View>
    );
}
  

  {/* <View style={styles.button}>
      <Button title='Courses list' />
  </View>
  <Button title='join a new course' /> */}

  
