import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            /*.then(user => {
               // dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
               dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => {
                    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
                });
            });*/
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => loginUserSuccess(dispatch, user))
                .catch(() => loginUserFail(dispatch));
            });
    };
};

const loginUserFail = (dispatch) => {
    console.log('fail');
    dispatch({
        type: LOGIN_USER_FAIL
    });
};

const loginUserSuccess = (dispatch, user) => {
    console.log('success');
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
   // Actions.employeeList();
   Actions.main();
};

