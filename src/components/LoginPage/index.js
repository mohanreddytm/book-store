import { useState,useEffect } from "react";

import './index.css';

const LoginPage = () => {

    const [isNewUser,setIsNewUser] = useState(false);
    const [nameInput,setNameInput] = useState('');
    const [emailInput,setEmailInput] = useState('');
    const [passwordInput,setPasswordInput] = useState('');
    const [confirmPasswordInput,setConfirmPasswordInput] = useState('');

    const [loginEmailInput,setLoginEmailInput] = useState('');
    const [loginPasswordInput,setLoginPasswordInput] = useState('');


    const onChangeNameInput = (event) => {
        setNameInput(event.target.value);
    };

    const onChangeEmailInput = (event) => {
        setEmailInput(event.target.value);
    };

    const onChangePasswordInput = (event) => {
        setPasswordInput(event.target.value);
    };

    const onChangeConfirmPasswordInput = (event) => {
        setConfirmPasswordInput(event.target.value);
    };

    const onClickCreateAccountButton = async () => {  
        console.log(nameInput,emailInput,passwordInput,confirmPasswordInput);
        if(passwordInput === confirmPasswordInput){
            const response = await fetch('https://forrender-1cde.onrender.com/users/',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    name:nameInput,
                    email:emailInput,
                    password:passwordInput
                })
            });
            const data = await response.json();
            console.log(data);
        }else{
            console.log('Password and Confirm Password should be same');
        }
    }



    const onClickNewAccount = () => {
        setIsNewUser(true);
    }

    const onClickLoginOne = () => {
        setIsNewUser(false);
    }

    const onChangeLoginEmailInput = (event) => {    
        setLoginEmailInput(event.target.value);
    }

    const onChangeLoginPasswordInput = (event) => {
        setLoginPasswordInput(event.target.value);
    }

    const onClickLoginButton = async () => {

        const options = {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                email:loginEmailInput,
                password:loginPasswordInput
            })
        }
        const response =  await fetch('https://forrender-1cde.onrender.com/login/',options);
        const data = await response.json();
        console.log(data);

    }

    const newAccount = () => {
        return(
            <div className="login-page">
                <div className="login-container">
                    <label htmlFor="nameInput">
                        <h1 className="email-content">Name</h1>
                    </label>
                    <input id="nameInput" onChange={onChangeNameInput} value={nameInput} className="input-one" placeholder="Name" />
                    <label htmlFor="emailInput">
                        <h1 className="email-content">Email</h1>
                    </label>
                    <input id="emailInput" onChange={onChangeEmailInput} value={emailInput} className="input-one" placeholder="Email" />
                    <label htmlFor="passwordInput">
                        <h1 className="email-content">Password</h1>
                    </label>
                    <input type='password' id="passwordInput" onChange={onChangePasswordInput} className="input-one" placeholder="Password" value={passwordInput} />
                    <label htmlFor="confirmPasswordInput">
                        <h1 className="email-content">Confirm Password</h1>
                    </label>
                    <input type='password' id="confirmPasswordInput" onChange={onChangeConfirmPasswordInput} value={confirmPasswordInput} className="input-one" placeholder="Confirm Password" />
                    <button onClick={onClickCreateAccountButton} className="login-button">Create Account</button>
                    <p className="new-account-content">Already have an account: <span className="create-account-content" onClick={onClickLoginOne}>Login</span></p>
                </div>
            </div>
        )
    }

    const nowLogin = () => {
        return(
            <div className="login-page">
                <div className="login-container">
                    <label htmlFor="emailInput">
                        <h1 className="email-content">Email</h1>
                    </label>
                    <input id="emailInput" onChange={onChangeLoginEmailInput} value={loginEmailInput} className="input-one" placeholder="Email" />
                    <label htmlFor="passwordInput">
                        <h1 className="email-content">Password</h1>
                    </label>
                    <input id="passwordInput" onChange={onChangeLoginPasswordInput} value={loginPasswordInput} className="input-one" placeholder="Password" />
                    <button className="login-button" onClick={onClickLoginButton}>Login</button>
                    <p className="new-account-content">New to BookStore: <span className="create-account-content" onClick={onClickNewAccount}>Create account</span></p>
                </div>
            </div>
        )
    }




    return(
        <div>
            {isNewUser ? newAccount() : nowLogin()}
        </div>
    )
}

export default LoginPage