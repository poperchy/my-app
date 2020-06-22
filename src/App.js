import React from 'react';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Dialogs from "./components/Dialogs";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";
import Friends from "./components/Friends";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/DialogsContainer";


const App = (props) => {

    return (
        <div>
            <Header/>
            <div className='App__container'>
                <Nav/>
                <div className='App__container-main'>
                    <Route path='/profile' render={() => <Main store={props.store}/>}/>
                    <Route path='/message' render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/friends' render={() => <Friends state={props.state.friendsList}/>}/>
                </div>
            </div>
        </div>
    );
};

export default App;