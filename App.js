import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Layout from './components/layout';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Login from './screens/login';
import Home1 from './screens/home1';
import Home2 from './screens/home2';
import Home3 from './screens/home3';
import Logging from './screens/logging';
import GoToLogin from './screens/go-to-login';
import Products from './screens/product';
import ProductView from './screens/product-view';
import Preview from './screens/preview';
import Preview2 from './screens/preview2';
import Register from './screens/register';
import Loyalty from './screens/loyalty';
import Receipt1 from './screens/receipt1';
import { MyContextProvider } from './context/context';
import RecieptProgress from './components/receipt-progress';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <MyContextProvider>
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
    </MyContextProvider>
  );
}

const ProductsStack = createSharedElementStackNavigator();

function ProductsStackNavigator() {
  return (
    <Layout>
      <ProductsStack.Navigator mode="modal" headerMode="none">
        <ProductsStack.Screen
          name="Products"
          component={Products}
          options={{ headerShown: false }}
        />
        <ProductsStack.Screen 
          name="ProductView"
          component={ProductView}
          options={() => ({
            headerShown: false,
            gestureEnabled: true,
           
            
          })}
          // sharedElements={(route) => {
          //   const { productData } = route.params;
          //   return [productData.id];
          // }}
        />
        <ProductsStack.Screen
          name="Preview"
          component={Preview}
          options={{ headerShown: false }}
        />
         <ProductsStack.Screen
          name="Preview2"
          component={Preview2}
          options={{ headerShown: false }}
        />
        <ProductsStack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <ProductsStack.Screen
          name="Loyalty"
          component={Loyalty}
          options={{ headerShown: false }}
        />
        {/* <RecieptProgress> */}
          <ProductsStack.Screen
          name="Receipt1"
          component={Receipt1}
          options={{headerShown: false}}
          />
        {/* </RecieptProgress> */}
      </ProductsStack.Navigator>
    </Layout>
  );
}

export default App;