import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import Home1 from './screens/home1';
import Home2 from './screens/home2';
import Home3 from './screens/home3';
import Logging from './screens/logging';
import GoToLogin from './screens/go-to-login';
import Products from './screens/product';
import ProductView from './screens/product-view'; 
import Layout from './components/layout';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home1" component={Home1} options={{ headerShown: false }} />
        <Stack.Screen name="Home2" component={Home2} options={{ headerShown: false }} />
        <Stack.Screen name="Home3" component={Home3} options={{ headerShown: false }} />
        <Stack.Screen name="GoToLogin" component={GoToLogin} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen
          name="Logging"
          component={Logging}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductsStack"
          component={ProductsStackNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const ProductsStack = createNativeStackNavigator();

function ProductsStackNavigator() {
  return (
      <Layout>
    <ProductsStack.Navigator>

      <ProductsStack.Screen
        name="Products"
        component={Products}
        options={{ headerShown: false }}
        />
      <ProductsStack.Screen
        name="ProductView"
        component={ProductView}
        options={{ headerShown: false }}
        />
    </ProductsStack.Navigator>
        </Layout>
  );
}

export default App;
