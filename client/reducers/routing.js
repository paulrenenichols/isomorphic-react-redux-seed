import { fromJS }           from 'immutable';

import { LOCATION_CHANGE }  from 'react-router-redux';

const initialState = fromJS({
  locationBeforeTransitions: null
});

export default function routing(state = initialState, { type, payload } = {}) {
  switch (type) {
    case LOCATION_CHANGE:
      return state.set('locationBeforeTransitions', payload);

    default:
      return state;
  }
}
