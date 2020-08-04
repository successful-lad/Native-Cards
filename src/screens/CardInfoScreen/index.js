import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

const CardInfoScreen = ({ navigation }) => {

  return(
    <View>
      <Text>
        Card Info Screen
      </Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('CardScreen')}
      />
    </View>
  )
};

export default CardInfoScreen;
