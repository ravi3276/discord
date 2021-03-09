import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css';
import {auth,provider} from './firebase'

function Login() {

    const signin=()=>{
        auth.signInWithPopup(provider)
        .catch(err=>alert(err.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
            <img src="https://i1.wp.com/blog.travian.com/wp-content/uploads/2020/05/discord.png?fit=980%2C504&ssl=1" 
            alt="" />
            </div>
            <Button onClick={signin}>Sign In</Button>
        </div>
    )
}

export default Login
