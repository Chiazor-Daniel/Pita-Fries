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
import Stock1 from './screens/stock-screens/stock1';
import ViewStock from './screens/stock-screens/view-stock';
import AddStock from './screens/stock-screens/add-stock';
import AdminHome from './screens/admin/admin-home';
import AdminSales from './screens/admin/admin-sales';
import AdminCustomers from './screens/admin/admin-customers';
import AdminProductReport from './screens/admin/admin-product-report';
import AdminOrderReport from './screens/admin/admin-order-report';
import AdminProductManagement from './screens/admin/admin-product-managemnt';


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
          options={{ headerShown: false }}
        />
        {/* </RecieptProgress> */}
        <ProductsStack.Screen
          name="StockStack"
          component={StockNavigator}
          options={{ headerShown: false }}
        />
        <ProductsStack.Screen
          name="AdminStack"
          component={AdminStackNavigator}
          options={{ headerShown: false }}
        />
      </ProductsStack.Navigator>
    </Layout>
  );
}

function StockNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="stock1"
        component={Stock1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='view-stock'
        component={ViewStock}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='add-stock'
        component={AddStock}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const AdminStack = createNativeStackNavigator();

function AdminStackNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="admin-home"
          component={AdminHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="admin-sales"
          component={AdminSales}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="admin-customers"
          component={AdminCustomers}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="admin-product-report"
          component={AdminProductReport}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="admin-order-report"
          component={AdminOrderReport}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="admin-product-management"
          component={AdminProductManagement}
          options={{ headerShown: false }}
        />
    </Stack.Navigator>
  );
}
export default App;
