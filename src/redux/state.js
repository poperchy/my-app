import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import friendsReducer from "./friends-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are you?', LikesCount: 10},
                {id: 2, message: 'its my first post', LikesCount: 20},
            ],
            newPostText: 'kavosydanaxyu',
        },
        messagePage: {
            messages: [
                {id: 1, message: 'Hello my name is ...'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'How are you?'},
            ],
            dialogsData: [
                {id: 1, name: 'Vasik'},
                {id: 2, name: 'Viktor'},
                {id: 3, name: 'Pi'},
                {id: 4, name: 'Shlapka'},
                {id: 5, name: 'Kto eto'},
                {id: 6, name: 'Artyrchik'},
                {id: 7, name: 'Olga'},
            ],
            newMessageBody: '',

        },
        friendsList: {
            friendsName: [
                {
                    id: 1,
                    name: 'Vasik',
                    src: 'https://www.noc.by/upload/medialibrary/18b/18b23ca1b79026ce84522642297c9096.jpg'
                },
                {
                    id: 2,
                    name: 'Viktor',
                    src: 'https://www.noc.by/upload/medialibrary/18b/18b23ca1b79026ce84522642297c9096.jpg'
                },
                {
                    id: 3,
                    name: 'Pi',
                    src: 'https://www.noc.by/upload/medialibrary/18b/18b23ca1b79026ce84522642297c9096.jpg'
                },
                {
                    id: 4,
                    name: 'Valera',
                    src: 'https://www.noc.by/upload/medialibrary/18b/18b23ca1b79026ce84522642297c9096.jpg'
                },
                {
                    id: 5,
                    name: 'Yrik',
                    src: 'https://www.noc.by/upload/medialibrary/18b/18b23ca1b79026ce84522642297c9096.jpg'
                },
                {
                    id: 6,
                    name: 'Tolsty',
                    src: 'https://www.noc.by/upload/medialibrary/18b/18b23ca1b79026ce84522642297c9096.jpg'
                },
                {
                    id: 7,
                    name: 'Hudoy',
                    src: 'https://www.noc.by/upload/medialibrary/18b/18b23ca1b79026ce84522642297c9096.jpg'
                },
                {
                    id: 8,
                    name: 'Vadim',
                    src: 'https://www.noc.by/upload/medialibrary/18b/18b23ca1b79026ce84522642297c9096.jpg'
                },
                {
                    id: 9,
                    name: 'Sveta',
                    src: 'https://www.noc.by/upload/medialibrary/18b/18b23ca1b79026ce84522642297c9096.jpg'
                },
                {
                    id: 10,
                    name: 'YA',
                    src: 'https://www.noc.by/upload/medialibrary/18b/18b23ca1b79026ce84522642297c9096.jpg'
                },
            ],
        },
    },
    _callSubscriber() {
        console.log('sdasd');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            LikesCount: 0,
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        // this._state.friendsList = friendsReducer(this._state.friendsList, action);

        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;