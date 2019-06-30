import { AlertDetail } from '../Store';

export const AlertMsgActn = {
    success,
    error,
    clear
};

function success(message) {
    return { type: AlertDetail.SUCCESS, message };
}

function error(message) {
    return { type: AlertDetail.ERROR, message };
}

function clear() {
    return { type: AlertDetail.CLEAR };
}