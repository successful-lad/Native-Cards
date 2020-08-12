import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const LogItem = ({ logText, isInc = false, balance }) => {
  return (
    <View style={styles.logWrapper}>
      <View style={styles.container}>
        <View>
          <Text>
            Баланс:
          </Text>
        </View>
        <View >
          <Text>
            {`${balance}$`}
          </Text>
        </View>
        <Text style={ [isInc? {color: 'green'}: { color: 'purple'}, styles.logText]}>
          {logText}
        </Text>
      </View>
    </View>
  )
};

export default LogItem;

const styles = StyleSheet.create({
  logWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
  },
  container: {
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    borderRadius: 5,
  },
  logText: {
    width: '100%',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 20,
  }
});
