import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import CourseItem from './courseItem'

export default function CourseList({ navigation }) {

    const [courseArray, setCourseArray] = useState([
        {name:'algorithms', key:1},
        {name:'computer architecture', key:2}
      ])

    // const courseArray=[
    //   {name:'algorithms', key:1},
    //   {name:'computer architecture', key:2}
    // ];
      
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
        {/* <Button title='go to rev dets' onPress={() => navigation.navigate('ReviewDetails')} /> */}
      </View>
    );
}