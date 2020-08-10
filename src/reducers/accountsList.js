import { UPDATE_CARD_INFO, ADD_NEW_CARD } from '../actions/types';

const initialState = {cards:[
    {cardName: 'Дебетовая карта', balance: 1000, transactionHistory: []},
    {cardName: 'Кредитная карта', balance: 100, transactionHistory: []},
  ]
};

  export default (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_CARD_INFO : {
        return {cards: state.cards.map((card, id) =>
            id === action.payload.id ?
              {...card,
                transactionHistory: [action.payload.text, ...card.transactionHistory],
                balance: +action.payload.balance} : card)}
      }
      case ADD_NEW_CARD : {
        return {cards:[...state.cards, action.payload.cards]}
      }
      default: {
        return state;
      }
    }
  }
