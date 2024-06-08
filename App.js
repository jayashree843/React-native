import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './component/Home';
import Form from './component/Form';
import Welcome from './component/Welcome';
import Search from './component/Search';
import Work from './component/Work';
import Camera from './component/Camera';
import RequestReset from './component/RequestReset';
import ForgotPassword from './component/ForgotPassword';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Work" component={Work} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name='RequestReset' component={RequestReset}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;