import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

const BankInput = ({
                     balance = 0,
                     min = 0,
                     max = 1000000,
                     addValue,
                     removeValue}) =>  {
  const [step, setStep] = useState('1');

  return (
    <View style={styles.bankInput}>
      <View style={styles.inpWrapper}>
        <Text>
          Задайте шаг
        </Text>
        <TextInput
          onChangeText={value => setStep(value)}
          value={step}
        />
      </View>
      <TouchableOpacity style={styles.buttonWrapper}>
        <TouchableOpacity
          onPress={() => addValue(step, max)}
          style={styles.leftButton}
        >
          <Text style={styles.leftButtonText}>
            {`+ ${step}`}
          </Text>
        </TouchableOpacity>
        <Text style={styles.balance}>{balance}</Text>
        <TouchableOpacity
          onPress={() => removeValue(step, min)}
          style={styles.rightButton}
        >
          <Text style={styles.rightButtonText}>
            {`- ${step}`}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  )
};
const styles = StyleSheet.create({
  bankInput: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  inpWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    width: 200,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'gray',
  },
  leftButton: {
    height: 50,
    width:50,
    backgroundColor: 'gray',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftButtonText: {
    color: 'white',
  },
  balance: {
    fontSize:20,
  },
  rightButton: {
    height: 50,
    width:50,
    backgroundColor: 'gray',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightButtonText: {
    color: 'white',
  }
  });
export default BankInput;
