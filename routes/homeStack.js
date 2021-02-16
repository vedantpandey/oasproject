  
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import AddNewCourse from '../screens/addNewCourse';
import CourseList from '../screens/courseList';
import CourseDetails from '../screens/courseDetails'
import AssignmentDetails from '../screens/assignmentDetails'

const screens = {
  Home: {
    screen: Home,
    navigationOptions:{
      title:'Online Assignment Submission Portal',
    }
  },
  AddNewCourse: {
    screen: AddNewCourse,
  },
  CourseList: {
    screen: CourseList,
  },
  CourseDetails:{
    screen: CourseDetails
  },
  AssignmentDetails:{
    screen: AssignmentDetails
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