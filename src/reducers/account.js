/**
 * 在球场
 * zaiqiuchang.com
 */

import logger from '../logger';
import * as actions from '../actions';

const initialState = {
  userId: '',
  city: {name: '成都', code: '028'},
  sport: {name: '网球', code: 'tennis'},
};

export default (state = initialState, action) => {
  if (action.type == actions.SET_ACCOUNT) {
    let {userId} = action;
    return {
      ...state,
      userId,
    };
  } else if (action.type == actions.SET_CITY) {
    let {city} = action;
    return {
      ...state,
      city,
    };
  } else if (action.type == actions.SET_SPORT) {
    let {sport} = action;
    return {
      ...state,
      sport,
    };
  } else if (action.type == actions.RESET || action.type == actions.RESET_ACCOUNT) {
    return initialState;
  } else {
    return state;
  }
}
