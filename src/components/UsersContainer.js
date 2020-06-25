import React from 'react';
import Users from './Users';
import {connect} from "react-redux";
import {followAC, setusersAC, unfollowAC} from "../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps;
mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (user) => {
            dispatch(setusersAC(user))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);