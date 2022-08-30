import Toast from 'react-native-simple-toast';

export function showToast(title) {
    Toast.show(title, Toast.LONG);
}
export const validateUserEmail = (text) => {

    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(text) === false) {

        return false;
    }
    else {
        return true;
    }
};
export const validateUserName = (text) => {

    const reg = /^[A-Za-z]+$/;
    if (reg.test(text) === false) {

        return false;
    }
    else {
        return true;
    }
};