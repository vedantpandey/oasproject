import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Login extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/image2.jpg')}
                    style={{width:"100%",height:"43%"}}
                />
                <Text
                 style={{
                     fontSize:30,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                > Assignment System </Text>

                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Your Assignment Saviour...!
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="mail" color="#00716F" size={24}/>
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                        
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="password" color="#00716F" size={24}/>
                    <TextInput 
                        placeholder="Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />

                    

                </View>

                <TouchableHighlight 
                    style={{
                        marginHorizontal:55,
                        alignItems:"center",
                        justifyContent:"center",
                        marginTop:30,
                        backgroundColor:"#00716F",
                        paddingVertical:10,
                        borderRadius:23
                    }}
                    onPress={() => navigate('Home')}
                >
                    <Text style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Log In</Text>
                </TouchableHighlight>
                <Text 
                
                onPress={()=>navigate('Register')}
                
                style={{
                    alignSelf:"center",
                    color:"#00716F",
                    fontFamily:"SemiBold",
                    paddingVertical:30
                }}>New User</Text>
            </View>
        )
    }
}