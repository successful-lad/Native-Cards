import { UPDATE_CARD_INFO, ADD_NEW_CARD } from '../actions/types';

const initialState = {cards:[
    {cardName: 'Дебетовая карта', balance: 1000},
    {cardName: 'Кредитная карта', balance: 100},
  ]
};

  export default (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
      case UPDATE_CARD_INFO : {
        return {cards: state.cards.map((card, id) =>
            id === action.index ? action.payload : card)}
      }
      case ADD_NEW_CARD : {
        return {cards:[...state.cards, action.payload.cards]}
      }
      default: {
        return initialState;
      }
    }
  }
