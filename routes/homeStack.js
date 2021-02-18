  
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import AddNewCourse from '../screens/addNewCourse';
import CourseList from '../screens/courseList';
import CourseDetails from '../screens/courseDetails'
import AssignmentDetails from '../screens/assignmentDetails'

import Login from '../screens/Login';
import Register from '../screens/Register'

const stackNavigatorOptions = {
    headerShown:false
}
navigationOptions: {
  headerShown:false
}
const screens = {
  Login:{
    screen:Login,       
    navigationOptions: {
      headerShown:false
    }
  },
  Register:{
    screen:Register,
    navigationOptions: {
      headerShown:false
    }
  },
  Home: {
    screen: Home,
    navigationOptions:{
      title:'Online Assignment Submission Portal',
    }
  },
  AddNewCourse: {
    screen: AddNewCourse,
    navigationOptions:{
      title:'Join New Course',
    }
  },
  CourseList: {
    screen: CourseList,
    navigationOptions:{
      title:'Courses List',
    }
  },
  CourseDetails:{
    screen: CourseDetails,
    navigationOptions:{
      title:'Course Details',
    }
  },
  AssignmentDetails:{
    screen: AssignmentDetails,
    navigationOptions:{
      title:'Assignment Details',
    }
  }
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions:{
    headerTintColor:'#444',
    headerStyle:{ backgroundColor:'#eee'}
  }
});

export default createAppContainer(HomeStack);