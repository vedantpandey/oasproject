import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import AssignmentItem from './assignmentItem';

export default function CourseDetails({ navigation }) {

    const assignmentList = [
        {name:'Assignment 1', key:1},
        {name:'Assignment 2', key:2},
        {name:'Assignment 3', key:3},
    ];

    const pressHandler=(item) => {
        navigation.navigate('AssignmentDetails', item);
    }

    return (
        <View style={globalStyles.container}>
            <Text>{ navigation.getParam('name') }</Text>
            <Text>Assignment List</Text>
            <FlatList 
                data={assignmentList}
                renderItem={({ item }) => (
                    <AssignmentItem item={item} pressHandler={pressHandler} />
                )}
            />
        </View>
    );
}