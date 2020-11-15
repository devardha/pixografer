import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk'
import { account } from './reducers/account'

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
  }

const combinedReducer = combineReducers({
    account
})

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state,
        ...action.payload,
      }
      if (state.location) nextState.location = state.location
      return nextState
    } else {
      return combinedReducer(state, action)
    }
  }

// Membuat store
const makeStore = context => createStore(
    reducer,
    bindMiddleware([thunkMiddleware])
);

export const wrapper = createWrapper(makeStore, {debug: false});