import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";
import Friends from "./components/Friends";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/DialogsContainer";
import UsersContainer from "./components/UsersContainer";
import MainContainer from "./components/MainContainer";
import HeaderContainer from "./components/HeaderContainer";
import LoginPage from "./components/login";


const App = (props) => {

    return (
        <div>
            <HeaderContainer/>
            <div className='App__container'>
                <Nav/>
                <div className='App__container-main'>
                    <Route path='/profile/:userId?' render={() => <MainContainer/>}/>
                    <Route path='/message' render={() => <DialogsContainer/>}/>
                    <Route path='/friends' render={() => <Friends />}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>
            </div>
        </div>
    );
};

export default App;