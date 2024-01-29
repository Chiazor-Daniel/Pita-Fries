import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import Home1 from './screens/home1';
import Home2 from './screens/home2';
import Home3 from './screens/home3';
import Logging from './screens/logging';
import GoToLogin from './screens/go-to-login'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home1" component={Home1} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Home2" component={Home2} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Home3" component={Home3} options={{ headerShown: false }} />
        <Stack.Screen name="GoToLogin" component={GoToLogin} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Logging" component={Logging} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
