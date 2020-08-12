import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useCardData } from '../../hooks';
import { BankInput, LogItem } from "../../components";

const CardInfoScreen = ({ route }) => {

  const [balance, setBalance] = useState('0');

  useEffect(() => {
    if (balance === '0')
    setBalance(currentCard.balance)
  },[])
  const {cards, updateCardInfo } = useCardData();

  const { cardId } = route.params;
  const currentCard = cards.find((card, index) => index === cardId);

  const addValue = (max, step = 20,) => {
    if (+balance + +step <= max) {
      setBalance(value => `${+value + +step}`)
    }
    else {
      setBalance(`${max}`)
    }
  }
  const removeValue = (min, step = 20) => {
    if (+balance - +step >= min) {
      setBalance(value => `${+value - +step}`)
    } else {
      setBalance(`${min}`)
    }
  }

  const onSave = () => {
    updateCardInfo({
      text: currentCard.balance < balance ? `Зачисление на счет суммы - ${balance - currentCard.balance}$`
        : `Снятие со счета суммы - ${currentCard.balance - balance}$`,
      id: cardId,
      balance,
    })
  };

  return(
    <View style={styles.wrapper}>
      <View style={styles.transContainer}>
        <BankInput
          balance={balance}
          addValue={addValue}
          removeValue={removeValue}
          onSave={onSave}
          disabled={+currentCard.balance === +balance}
          buttonText='Сохранить изменения'
          onSetBalance={setBalance}
        />
      </View>
      <ScrollView>
        {currentCard.transactionHistory.map((log, id) =>(
          <LogItem
            logText={log.transText}
            key={id}
            isInc={log.transText.indexOf('Зачисление') !== -1}
            balance={log.afterTransBalance}
          />
        ))}
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    height: '100%',
  },
  transContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  }
});

export default CardInfoScreen;
