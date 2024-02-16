import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
