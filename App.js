import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import RouterComponent from './src/Router';


class App extends Component {
  componentWillMount() {
    const config = {
      // apiKey: 'AIzaSyBuuhw1pfvMNnR2nbGJG_j8q4puv-SK0CY',
      // authDomain: 'manager-500c0.firebaseapp.com',
      // databaseURL: 'https://manager-500c0.firebaseio.com',
      // projectId: 'manager-500c0',
      // storageBucket: 'manager-500c0.appspot.com',
      // messagingSenderId: '922826170112'
      apiKey: 'AIzaSyAjUeBi62SjQBIswV69HnTEyOCrmZybUDw',
      authDomain: 'manager-896cb.firebaseapp.com',
      databaseURL: 'https://manager-896cb.firebaseio.com',
      projectId: 'manager-896cb',
      storageBucket: 'manager-896cb.appspot.com',
      messagingSenderId: '726259103312'
    };
    firebase.initializeApp(config);
  }
  render() {
    console.ignoredYellowBox = ['Remote debugger'];
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}> 
          <RouterComponent />
      </Provider>
    );
  }
}

export default App;
