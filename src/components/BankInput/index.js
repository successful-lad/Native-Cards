import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

const BankInput = ({initialValue = 0, min = 0, max = 100}) =>  {
  const [count, setCount] = useState(`${initialValue}`);
  const [step, setStep] = useState('1');

  const addValue = () => {
    if (+count + +step <= max) {
      setCount(value => `${+value + +step}`)
    }
    else {
      setCount(`${max}`)
    }
  }
  const removeValue = () => {
    if (+count - +step >= min) {
      setCount(value => `${+value - +step}`)
    } else {
      setCount(`${min}`)
    }
  }
  return (
    <View>
      <View>
        <Text>
          Задайте шаг
        </Text>
        <TextInput
          onChangeText={text => setStep(text)}
          value={step}
        />
      </View>
      <TouchableOpacity style={styles.buttonWrapper}>
        <TouchableOpacity
          onPress={addValue}
          style={styles.leftButton}
        >
          <Text style={styles.leftButtonText}>
            {`+ ${step}`}
          </Text>
        </TouchableOpacity>
        <Text>{count}</Text>
        <TouchableOpacity
          onPress={removeValue}
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
