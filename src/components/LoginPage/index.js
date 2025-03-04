import { useState,useContext, useEffect } from "react";

import Cookies from 'js-cookie';

import LoadingPopup from "../LoadingPopup";

import { FaEye, FaEyeSlash  } from "react-icons/fa";

import loginpagelogo from '../../appImages/loginpagelogo.png';

import AllInOne from "../../complexOne/AllInOne";


import {jwtDecode} from "jwt-decode";

import './index.css';

const LoginPage = (props) => {

    const jwtToken = Cookies.get('jwtToken');
    if(jwtToken){
        props.history.replace('/');
    }

    const {updateUserId} = useContext(AllInOne);

    const [isNewUser,setIsNewUser] = useState(false);
    const [nameInput,setNameInput] = useState('');
    const [emailInput,setEmailInput] = useState('');
    const [passwordInput,setPasswordInput] = useState('');
    const [confirmPasswordInput,setConfirmPasswordInput] = useState('');

    const [loginEmailInput,setLoginEmailInput] = useState('');
    const [loginPasswordInput,setLoginPasswordInput] = useState('');

    const [showPassword,setShowPassword] = useState(false);

    const [showPasswordForRegister,setShowPasswordForRegister] = useState(false);
    const [showConfirmPasswordForRegister,setShowConfirmPasswordForRegister] = useState(false);

    const [loading, setLoading] = useState(false);
    const [errorLogin,setErrorLogin] = useState(false);
    const [errorRegister,setErrorRegister] = useState(false);



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
        
        try{
            if(nameInput.trim() === '' || emailInput.trim() === '' || passwordInput.trim() === '' || confirmPasswordInput.trim() === ''){
                setErrorRegister("All fields are required. Please fill them in.")
                return
            }

            if(!emailInput.includes('@gmail.com')){
                setErrorRegister("Email format is incorrect. Use example@gmail.com.")
                return
            }

            if(passwordInput.length < 8){
                setErrorRegister("Your password must have at least 8 characters")
                return 
            }
                
            

            setLoading(true); 
            
            if((passwordInput === confirmPasswordInput) && passwordInput.trim() !== '' &&confirmPasswordInput.trim() !== ''){
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
    
                setLoading(false);
                const jwtToken = data.jwtToken;
                if(response.ok){
                    if(data === undefined){
                        console.log('Invalid Email or Password');
                    }else{
                        const decodedData = jwtDecode(data.jwtToken)
                        const {userId} = decodedData
                        updateUserId(userId)
                        Cookies.set('jwtToken',data.jwtToken, { expires: 30, path: '/' });
                        props.history.replace('/');
                    }
                }
            }else{
                setErrorRegister('Password and Confirm Password should be same');
            }

        }
        catch(error){
            if(error.message.includes("User already exists")){
                setErrorRegister("This email is already registered. Use a different one or log in.");
            }else{
                setErrorRegister('Invalid User');
            }
        }
        
        setLoading(false);
        
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

    const onClickLoginPassword = () => {
        setShowPassword(!showPassword);
    };

    const onClickshowPasswordForRegister = () => {
        setShowPasswordForRegister(!showPasswordForRegister);
    }

    const onClickshowConfirmPasswordForRegister = () => {
        setShowConfirmPasswordForRegister(!showConfirmPasswordForRegister);
    }


    const onClickLoginButton = async () => {

        
        if(loginEmailInput.trim() === '' || loginPasswordInput.trim() === ''){
            setErrorLogin("All fields are required. Please fill them in.")
            return
        }

        setLoading(true);

        try{
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
    
            if(response.ok) {
                if(data === undefined){
                    console.log('Invalid Email or Password');
                }else{
                    setLoading(false);
                    const decodedData = jwtDecode(data.jwtToken)
                    const {userId} = decodedData
                    updateUserId(userId)
                    Cookies.set('jwtToken',data.jwtToken, { expires: 30, path: '/' });
                    props.history.replace('/');
                }
            }
        }catch(error){
            if(error.message.includes("Invalid password")){
                setErrorLogin('Invalid Password');
                
            }else{
                setErrorLogin('Invalid User');
            }
        }
        setLoading(false);
    }

    const newAccount = () => {
        return(
            <div className="login-page">
                <img src={loginpagelogo} alt='login-page' className="login-image" />
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
                    <div className="password-input-container">
                        <input type={showPasswordForRegister ? "text" : "password"} id="passwordInput" onChange={onChangePasswordInput} className="input-one" placeholder="Password" value={passwordInput} />
                        {showPasswordForRegister ? <FaEyeSlash className="eye-icon" onClick={onClickshowPasswordForRegister} /> : <FaEye className="eye-icon" onClick={onClickshowPasswordForRegister} />}
                    </div>
                    <label htmlFor="confirmPasswordInput">
                        <h1 className="email-content">Confirm Password</h1>
                    </label>

                    <div className="password-input-container">
                        <input type={showConfirmPasswordForRegister ? "text" : "password"} id="confirmPasswordInput" onChange={onChangeConfirmPasswordInput} value={confirmPasswordInput} className="input-one" placeholder="Confirm Password" />
                        {showConfirmPasswordForRegister ? <FaEyeSlash className="eye-icon" onClick={onClickshowConfirmPasswordForRegister} /> : <FaEye className="eye-icon" onClick={onClickshowConfirmPasswordForRegister} />}
                    </div>
                    
                    <button onClick={onClickCreateAccountButton} className="login-button">Create Account</button>
                    <p className="error-message-2">{errorRegister}</p>
                    <p className="new-account-content">Already have an account: <span className="create-account-content" onClick={onClickLoginOne}>Login</span></p>
                </div>
            </div>
        )
    }

    const nowLogin = () => {
        return(
            <div className="login-page">
                <img src={loginpagelogo} alt='login-page' className="login-image" />
                <div className="login-container">
                    <label htmlFor="emailInput">
                        <h1 className="email-content">Email</h1>
                    </label>
                    <input id="emailInput" onChange={onChangeLoginEmailInput} value={loginEmailInput} className="input-one" placeholder="Email" />
                    <label htmlFor="passwordInput">
                        <h1 className="email-content">Password</h1>
                    </label>
                    <div className="password-input-container">
                        <input id="passwordInput" onChange={onChangeLoginPasswordInput} value={loginPasswordInput} className="input-one" placeholder="Password" type={showPassword ? "text" : "password"} />
                        {showPassword ? <FaEyeSlash className="eye-icon" onClick={onClickLoginPassword} /> : <FaEye className="eye-icon" onClick={onClickLoginPassword} />}

                    </div>
                    <button className="login-button" onClick={onClickLoginButton}>Login</button>
                    <p className="error-message-2">{errorLogin}</p>
                    <p className="new-account-content">New to BookStore: <span className="create-account-content" onClick={onClickNewAccount}>Create account</span></p>
                </div>
            </div>
        )
    }




    return(
        <div>
            <div>
                <LoadingPopup isOpen={loading} content={
                    "Checking Credentials"
                } />
            </div>
            
            {isNewUser ? newAccount() : nowLogin()}
        </div>
    )
}

export default LoginPage