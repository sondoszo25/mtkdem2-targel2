import { createElement, useState } from 'react';
import React from 'react';
import '../Chat/Chat.css'
import dimg from '../dimg.png'
import Contacts from './contacts.js';
import ReactDOM from 'react-dom/client';

class user {
    constructor(username, password, name, img) {
        this.name = name
        this.username = username
        this.password = password
        this.img = img
        this.contactslist = []
        this.msg={};
        this.lastmsg={};
    }
}
export var users = { "mohammed": new user("mohammed", "Mm1234567", "mohammed", undefined), "sondos": new user("sondos", "Ss1234567", "sondos", undefined), "sally": new user("sally", "Sally1234567", "sally", undefined) };
export var lastlogin = "mohammed";

export function check(username, password) {

    if (typeof (users[username]) === 'undefined') {
        return false;
    }
    else {
        if (users[username].password === password) {
            lastlogin = users[username].username;
            return true;
        }
        else {
            return false;
        }
    }
}



export var frineds = users[lastlogin].contactslist.map((friend, key) => {
    return <Contacts {...friend} key={key}></Contacts>

});



export function addf(name) {

    var found = false;
    for (var i = 0; i < users[lastlogin].contactslist.length; i++) {
        if (users[lastlogin].contactslist[i].username === name) {
            found = true;
            break;
        }
    }

    if (typeof (users[name]) === 'undefined') {
        alert("Not exist");
    }
    else if (found) {
        alert("You already add");
    }
    else {
        users[lastlogin].contactslist.push({username:name ,name: users[name].name, img: users[name].img });
    }
}
export function saveUser(username, password, name, img) {

    if (typeof (users[username]) === 'undefined') {
        users[username] = new user(username, password, name, img);
        return true;
    }
    else {
        return false;
    }
}



function Me() {

    var srcimg;
    if (users[lastlogin].img) {
        srcimg = URL.createObjectURL(users[lastlogin].img);
    }
    else {
        srcimg = dimg;
    }
    return (
        <>
            <img src={srcimg} class="rounded-circle imageid"></img><span id="chatme">{users[lastlogin].name}</span>
        </>
    )
}
export default Me;



