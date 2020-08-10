import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView, StyleSheet,
} from 'react-native';
import { useCardData } from '../../hooks';
import { Card } from '../../components';

const CardScreen = ({navigation}) => {
  const { addNewCard, cards } = useCardData();
  console.log(cards)
  return (
    <View style={homeStyles.home}>
      <Text>
        Home
      </Text>

      <Button
        title="add new card"
        onPress={() => addNewCard({ balance: 2000, cardName: 'userCard', transactionHistory: []})}
      />
      <Button
        title="Перейти на экран с картами"
        onPress={() => navigation.navigate('CardScreen')}
      />
      <ScrollView contentContainerStyle={homeStyles.cardWrapper}>
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
  },
  cardWrapper: {
  },
});

export default CardScreen;
