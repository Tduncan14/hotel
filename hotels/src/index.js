import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,combineReducers} from 'redux'
import{Provider} from 'react-redux';
import {composeWithDevtools} from 'redux-devtools-extension';



const authReducer = (state = {},action) => {


  switch(action.type){

    case "LOGGED_IN_USER":
      return {...state, ...action.payload}
      break;
    case "LOGOUT":
       return action.payload
       break;

    default: return state


  }
    
}



// combine the reducers

const rootReducer = combineReducers({
   user: authReducer

})


// create a redux store

const store = createStore(rootReducer,composeWithDevtools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

