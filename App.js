import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { CardScreen, CardInfoScreen } from './src/screens';
import store from "./src/configureStore";
import {View, Text} from "react-native";


const TabNavigator = createBottomTabNavigator();
const StackNavigator = createStackNavigator();

const SecondScreen = () => {
  return (
    <View>
      <Text>
        SecondScreen
      </Text>
    </View>
  )
};

const MyTabs = () => {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen name="CardStackScreen" component={CardScreen} />
      <TabNavigator.Screen name="SecondScreen" component={SecondScreen} />
    </TabNavigator.Navigator>
  );
}

const NavStack = () => {
  return (
    <StackNavigator.Navigator
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
      <StackNavigator.Screen
        name="CardScreen"
        component={MyTabs}
        options={{ title: 'CardScreen' }}
      />
      <StackNavigator.Screen
        name="CardInfoScreen"
        component={CardInfoScreen}
        options={{ title: 'CardInfoScreen' }}
      />
    </StackNavigator.Navigator>
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
