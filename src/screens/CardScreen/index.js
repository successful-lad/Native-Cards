import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

const CardScreen = ({ navigation }) => {
  return(
    <View>
      <Text>
        Card Screen
      </Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('CardInfoScreen')}
      />
    </View>
  )
};

export default CardScreen;
