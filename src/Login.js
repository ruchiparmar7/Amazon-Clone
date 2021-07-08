import React,{useState} from 'react'
import './Login.css'
import {Link , useHistory} from "react-router-dom"
import {auth} from "./firebase"
function Login() {
    const history = useHistory();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const signIn = e=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    };

    const register = e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //It create new user successfuly
            console.log(auth)

            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
        
    };
    return (
        <div className='login'>
            <Link to='/'>
            <img  className='login_logo' src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png?fit=636%2C193&ssl=1"></img>

            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}></input>
                   
                    <button type="submit" onClick={signIn}   className='login__signInButton'>Sign In</button>

                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
