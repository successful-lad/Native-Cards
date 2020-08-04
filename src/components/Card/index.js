import React from 'react';
import { StyleSheet, Text, View } from "react-native";

const Card = ({cardName, balance}) => {
  return(
     <View style={styles.wrapper}>
       <View style={styles.container}>
         <View style={styles.cardName}>
           <Text style={styles.cardNameText}>{cardName}</Text>
         </View>
         <View style={styles.balance}>
           <Text style={styles.balanceText}>
             {balance}
           </Text>
         </View>
       </View>
     </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'purple',
    borderRadius: 10,
    // color: 'white',
  },
  cardName: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,

  },
  cardNameText: {
    fontSize: 20,
    color: 'white',
  },
  balance: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  balanceText: {
    fontSize: 40,
    color: 'white',
  }
});
export default Card;
