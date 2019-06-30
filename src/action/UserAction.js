// import { AlertDetail } from '../_constants';
// import { userService } from '../_services';
// import { AlertMsgAction } from './';
// import { history } from '../_helpers';


// export const userActions = {
//     login,
//     logout,
//     register,
//     getAll,
//     delete: _delete
// };

// function login(username, password) {
//     return dispatch => {
//         dispatch(request({ username }));

//         userService.login(username, password)
//             .then(
//                 user => { 
//                     dispatch(success(user));
//                     history.push('/');
//                 },
//                 error => {
//                     dispatch(failure(error));
//                     dispatch(AlertMsgAction.error(error));
//                 }
//             );
//     };

//     function request(user) { return { type: AlertDetail.LOGIN_REQUEST, user } }
//     function success(user) { return { type: AlertDetail.LOGIN_SUCCESS, user } }
//     function failure(error) { return { type: AlertDetail.LOGIN_FAILURE, error } }
// }

// function logout() {
//     userService.logout();
//     return { type: AlertDetail.LOGOUT };
// }

// function register(user) {
//     return dispatch => {
//         dispatch(request(user));

//         userService.register(user)
//             .then(
//                 user => { 
//                     dispatch(success());
//                     history.push('/login');
//                     dispatch(AlertMsgAction.success('Registration successful'));
//                 },
//                 error => {
//                     dispatch(failure(error));
//                     dispatch(AlertMsgAction.error(error));
//                 }
//             );
//     };

//     function request(user) { return { type: AlertDetail.REGISTER_REQUEST, user } }
//     function success(user) { return { type: AlertDetail.REGISTER_SUCCESS, user } }
//     function failure(error) { return { type: AlertDetail.REGISTER_FAILURE, error } }
// }

// function getAll() {
//     return dispatch => {
//         dispatch(request());

//         userService.getAll()
//             .then(
//                 users => dispatch(success(users)),
//                 error => dispatch(failure(error))
//             );
//     };

//     function request() { return { type: AlertDetail.GETALL_REQUEST } }
//     function success(users) { return { type: AlertDetail.GETALL_SUCCESS, users } }
//     function failure(error) { return { type: AlertDetail.GETALL_FAILURE, error } }
// }

// // prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     return dispatch => {
//         dispatch(request(id));

//         userService.delete(id)
//             .then(
//                 user => { 
//                     dispatch(success(id));
//                 },
//                 error => {
//                     dispatch(failure(id, error));
//                 }
//             );
//     };

//     function request(id) { return { type: AlertDetail.DELETE_REQUEST, id } }
//     function success(id) { return { type: AlertDetail.DELETE_SUCCESS, id } }
//     function failure(id, error) { return { type: AlertDetail.DELETE_FAILURE, id, error } }
// }