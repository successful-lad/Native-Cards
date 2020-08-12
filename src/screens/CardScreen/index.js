import React from 'react';
import {
  View,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useCardData } from '../../hooks';
import { Card } from '../../components';

const CardScreen = ({navigation}) => {

  const { addNewCard, cards } = useCardData();

  return (
    <View style={homeStyles.home}>
      <Button
        title="add new card"
        onPress={() => addNewCard({ balance: 2000, cardName: 'userCard', transactionHistory: []})}
      />

      <ScrollView>
        {cards.map((card, index) =>
          <Card
            cardName={card.cardName}
            balance={card.balance}
            key={index}
            push={() => navigation.navigate('CardInfoScreen', { cardId: index})}
          />
        )}
      </ScrollView>
    </View>
  )
};

const homeStyles = StyleSheet.create({
  home: {
    height: '100%',
    paddingBottom: 10,
    backgroundColor: 'white',
  },
});

export default CardScreen;
