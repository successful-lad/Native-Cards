import { useMemo, useCallback } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCard, updateCardInfo } from "../actions";

import { getAccList } from '../reducers';

const utilsSelector = (state, resultKey, initialValue) =>
  getAccList(state)[resultKey] ?? initialValue;

export default () => {
  const selector = useCallback(state => ({
    cards: utilsSelector(state, 'cards', []),
  }), []);

  const data = useSelector(selector);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
      addNewCard: cards => addNewCard({
        cards,
      }),
      updateCardInfo: changeCard => addNewCard({
        cards: changeCard,
      }),
    }, dispatch),
    [dispatch]);

  return {
    ...data,
    ...actions,
  };
}
