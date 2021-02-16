import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import CourseItem from './courseItem';

export default function AssignmentDetails({ navigation }) {

    return (
        <View style={globalStyles.container}>
            <Text>{ navigation.getParam('name') }</Text>
        </View>
    );
}