import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';

export default function CourseItem({ item, pressHandler }) {

    return (
      <TouchableOpacity style={globalStyles.courseItem} onPress={() => pressHandler(item)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
}