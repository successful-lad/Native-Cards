import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView, StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { CardScreen, CardInfoScreen } from './src/screens';
import {Provider} from 'react-redux';
import configureStore from "./src/configureStore";
import {useCardData} from './src/hooks';
import { Card } from './src/components';

const store = configureStore();

const Home = ({ navigation }) => {
  const { addNewCard, updateCardInfo, cards } = useCardData();

  return (
    <View style={homeStyles.home}>
      <Text>
        Home
      </Text>
      <Button
        title="Go to Second Screen"
        onPress={() => navigation.navigate('SecondScreen')}
      />
      <Button
        title="add new card"
        onPress={() => addNewCard({ balance: 2000, cardName: 'userCard'})}
      />
      <ScrollView contentContainerStyle={homeStyles.cardWrapper}>
        {cards.map((card, index) =>
          <Card cardName={card.cardName} balance={card.balance} key={index}/>
        )}
      </ScrollView>
    </View>
  )
};

const homeStyles = StyleSheet.create({
  home: {
    height: '100%',
    paddingBottom: 10,
    // marginTop: 20,
    // marginBottom: 20,
  },
  cardWrapper: {
  },
});

const SecondScreen = ({ navigation }) => {
  return (
    <View>
      <Text>
        Second Screen
      </Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
};

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
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{ title: 'SecondScreen' }}
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
