import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import CourseItem from './courseItem'
import firebasetemp from '../database/firebaseDb';

export default function CourseList({ navigation }) {

    const [courseArray, setCourseArray] = useState([
        // {name:'algorithms', key:1},
        // {name:'computer architecture', key:2}
      ])

    // const courseArray=[
    //   {name:'algorithms', key:1},
    //   {name:'computer architecture', key:2}
    // ];
      
    useEffect(() => {
      let cidarray = navigation.getParam('cids');
      // console.log(cidarray)
      cidarray.forEach((id) => {
        let doc=firebasetemp.firestore().collection('courses').doc(id).get();
        doc.then((snapshot) => {
          setCourseArray((prevarr) => (
            [ {name:snapshot.data().name, key:Math.random().toString()}, ...prevarr ]
            
            ))
        })
      })

    }, [])

    const pressHandler= (item) => {
      navigation.navigate('CourseDetails', item);
    }
    return (
      <View style={globalStyles.container}>
        <View>
            <FlatList 
                data={courseArray}
                renderItem={({ item }) => (
                    <CourseItem item={item} pressHandler={pressHandler} />
                  // <Text>{item.name}</Text>
                )}
            />
        </View>
        {/* <Text>{navigation.getParam('cids')[0]}</Text> */}
        {/* <Button title='go to rev dets' onPress={() => navigation.navigate('ReviewDetails')} /> */}
      </View>
    );
}