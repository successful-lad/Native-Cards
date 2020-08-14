import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import onlyNumbers from "../../helpers/onlyNumbers";

const BankInput = ({
                     balance = 0,
                     min = 0,
                     max = 1000000,
                     addValue,
                     removeValue,
                     onSave,
                     disabled,
                     buttonText,
                     onSetBalance,
                   }) =>  {

  // const enterNumb = text =>{
  //   const numbArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   return text.split('').filter(word => numbArr.includes(+word)).join('');
  // }

  return (
    <View style={styles.bankInput}>
      <View style={styles.inpWrapper}>
      </View>
      <TouchableOpacity style={styles.buttonWrapper}>
        <TouchableOpacity
          onPress={() => addValue(max)}
          style={styles.leftButton}
        >
          <Text style={styles.leftButtonText}>
            {`+ ${20}`}
          </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.enterInput}
          onChangeText={text => onSetBalance(+onlyNumbers(text))}
          value={`${balance}`}
        />
        <TouchableOpacity
          onPress={() => removeValue(min)}
          style={styles.rightButton}
        >
          <Text style={styles.rightButtonText}>
            {`- ${20}`}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={[disabled && {opacity: 0.4}, styles.saveButton]}
        onPress={onSave}
        disabled={disabled}
      >
        <Text
          style={styles.saveButtonText}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  )
};
const styles = StyleSheet.create({
  bankInput: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    flexWrap: 'wrap',
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
  },
  saveButton: {
    width: 100,
    padding: 8,
    backgroundColor: '#4682B4',
    borderRadius: 6,
    marginLeft: 10,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 15,
  },
  enterInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    maxWidth: 100,
  }
  });
export default BankInput;
