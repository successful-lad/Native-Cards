import { useMemo, useCallback } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { updateTitle} from "../actions";

import { getTodos } from '../reducers';

const utilsSelector = (state, resultKey, initialValue) =>
  getTodos(state)[resultKey] ?? initialValue;

export default () => {
  const selector = useCallback(state => ({
    title: utilsSelector(state, 'title', ''),
  }), []);

  const data = useSelector(selector);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    setTitle: title => updateTitle({
      title,
    })
    }, dispatch),
    [dispatch]);

  return {
    ...data,
    ...actions,
  };
}
