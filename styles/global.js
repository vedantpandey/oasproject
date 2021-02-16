import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    marginTop:10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  button:{
      marginVertical:30,
      marginTop:50
  },
  courseItem:{
    padding:20,
    marginVertical:10,
    borderWidth:1,
    borderColor:'grey',
    borderRadius:30
  },
  input:{
    paddingHorizontal:5,
    height:40,
    marginTop:10,
    marginBottom:40,
    borderBottomWidth:1,
    borderBottomColor:'grey'
  }
});