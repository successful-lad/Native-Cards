import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { useCardData } from '../../hooks';
import { BankInput } from "../../components";

const CardInfoScreen = ({ route }) => {

  const [balance, setBalance] = useState('0');

  useEffect(() => {
    if (balance === '0')
    setBalance(currentCard.balance)
  },[])

  const {cards, updateCardInfo } = useCardData();
  console.log(cards)
  const { cardId } = route.params;
  const currentCard = cards.find((card, index) => index === cardId);

  const addValue = (step, max) => {
    if (+balance + +step <= max) {
      setBalance(value => `${+value + +step}`)
    }
    else {
      setBalance(`${max}`)
    }
  }
  const removeValue = (step, min) => {
    if (+balance - +step >= min) {
      setBalance(value => `${+value - +step}`)
    } else {
      setBalance(`${min}`)
    }
  }
  return(
    <View>
      <Text>
        Card Screen
      </Text>
      {/*<Button*/}
      {/*  title="add trans info"*/}
      {/*  onPress={() => updateTransactionHistory({text:'чет поменялось', id: cardId})}*/}
      {/*/>*/}
      <BankInput
        balance={balance}
        addValue={addValue}
        removeValue={removeValue}
      />
      <Button title='Сохранить изменения'
              onPress={() => {
                updateCardInfo({
                  text: currentCard.balance < balance ? `Ваш баланс увеличился на ${balance - currentCard.balance}, и теперь составляет ${balance}`
                    : `Ваш баланс уменьшился, на ${currentCard.balance - balance}, и теперь составляет ${balance}`,
                  id: cardId,
                  balance,
                });
              }}
      />
      <View>
        {currentCard.transactionHistory.map((info, id) =>(
          <Text key={id}>
            {info}
          </Text>
        ))}
      </View>
    </View>
  )
};

export default CardInfoScreen;
