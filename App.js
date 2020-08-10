import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CardScreen, CardInfoScreen } from './src/screens';
import { Provider } from 'react-redux';
import store from "./src/configureStore";


const Stack = createStackNavigator();

const NavStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#621FF7',
        },
        headerTintColor: '#fff',
        headerTitleStyle :{
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="CardScreen"
        component={CardScreen}
        options={{ title: 'CardScreen' }}
      />
      <Stack.Screen
        name="CardInfoScreen"
        component={CardInfoScreen}
        options={{ title: 'CardInfoScreen' }}
      />
    </Stack.Navigator>
  );
}
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
     <NavigationContainer>
       <NavStack />
     </NavigationContainer>
    </Provider>
  )
};

export default App;
