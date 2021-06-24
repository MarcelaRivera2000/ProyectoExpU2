import React, { Component } from 'react';
import firebase from '../firebase';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
    }

    login(){
        let provider=new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result =>{
                console.log(result);
        })
    } 

    render(){
        return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a href="#"  type="button"  onClick={this.login}>Sing in with Google</a>
        );
    }
}