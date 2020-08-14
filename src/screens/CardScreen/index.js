import React, { useState } from 'react';
import {
  View,
  Button,
  ScrollView,
  StyleSheet,
  Modal,
  Alert,
  Text,
  TouchableHighlight,
  TextInput
} from 'react-native';
import { useCardData } from '../../hooks';
import { Card } from '../../components';
import onlyNumbers from "../../helpers/onlyNumbers";

const CardScreen = ({ navigation }) => {

  const { addNewCard, cards } = useCardData();
  const [modalVisible, setModalVisible] = useState(false);
  const [newCardData, setNewCardData] = useState({balance: 0});
  return (
    <View
      style={homeStyles.home}>
      <Button
        title="add new card"
        onPress={() => {
          setModalVisible(true)
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={homeStyles.centeredView}>
          <View style={homeStyles.modalView}>
            <Text>Введите название карты</Text>
            <TextInput
              onChangeText={cardName =>setNewCardData({...newCardData, cardName})}
              style={homeStyles.textInput}
            />
            <Text>Введите баланс карты</Text>
            <TextInput
              onChangeText={balance =>setNewCardData({...newCardData, balance: +onlyNumbers(balance)})}
              style={homeStyles.textInput}
              value={`${newCardData.balance}`}
            />
            <View style={homeStyles.buttonWrapper}>
              <TouchableHighlight
                style={{ ...homeStyles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  addNewCard({...newCardData,
                    transactionHistory: [{
                      transText: `Зачисление на счет суммы - ${newCardData.balance}$`,
                      balance: newCardData.balance,
                    }]}
                  )
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={homeStyles.textStyle}>Create</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...homeStyles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  addNewCard({})
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={homeStyles.textStyle}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 0,
    minWidth: 60,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    maxWidth: 100,
  }
});

export default CardScreen;
