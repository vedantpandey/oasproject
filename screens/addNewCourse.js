import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import firebasedb from '../database/firebaseDb';

export default function AddNewCourse({ navigation }) {
    const [code, setCode] = useState('');

    function chkvalid(code){
      

    }
    let cidarray = navigation.getParam('cids');
    
    console.log(chkvalid(code))
    // console.log(cidarray);
    const pressHandler = () => {
        if(code.length != 0){
            
            const usersRef = firebasedb.firestore().collection('courses').doc(code)
            usersRef.get()
              .then((docSnapshot) => {
                if (docSnapshot.exists) {
                  if(cidarray.indexOf(code) < 0){
                    
                    cidarray.push(code);
                    
                    firebasedb.firestore().collection('students').doc('VJU0ICWKEdaf8nzz67Ly').update({
                      courseids:  cidarray
                    })
                    Alert.alert('Joined Course Successfully!')
                  }
                  else{
                    Alert.alert('Already enrolled in course!','',[
                      {text:'ok', onPress:() => navigation.navigate('Home')}
                    ])
                  }
                } else {
                  Alert.alert('Invalid course id !','',[
                    {text:'ok', onPress:() => navigation.navigate('Home')}
                  ])
                }
            });
        }
        else{
          Alert.alert('Course id cannot be empty!')
          
        }
    }
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Enter Code</Text>
        <TextInput 
          placeholder='e.g abc123'
          style={globalStyles.input}
          onChangeText={(val) => setCode(val)}
        />
        <Button title='Join Course' style={globalStyles.button} onPress={pressHandler} />
      </View>
    );
}