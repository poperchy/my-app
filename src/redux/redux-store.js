import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    friendsList: friendsReducer,
    usersPage: usersReducer,
});


let store = createStore(reducers);

window.store = store;

export default store;