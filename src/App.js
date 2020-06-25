import React from 'react';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";
import Friends from "./components/Friends";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/DialogsContainer";
import UsersContainer from "./components/UsersContainer";


const App = (props) => {

    return (
        <div>
            <Header/>
            <div className='App__container'>
                <Nav/>
                <div className='App__container-main'>
                    <Route path='/profile' render={() => <Main/>}/>
                    <Route path='/message' render={() => <DialogsContainer/>}/>
                    <Route path='/friends' render={() => <Friends />}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </div>
            </div>
        </div>
    );
};

export default App;