import React, { useState } from 'react';
import { useNavigate } from 'react-router';
function LoginPage(props) { 
    const[user, setUser] = useState ({
        userName: '',
        password:''
    })
    let navigate = useNavigate();
    const signIn = ()=>{
        if(user.userName == 'test' && user.password == '123'){
                navigate('/success')
        }
        else{
                navigate('/fail')
        }
    }
    return (
        <div>
            UserName:<input
            type='text'
            onChange={(e)=>{
                setUser(previousState=>{
                    return{...previousState, userName:e.target.value}
                })
            }
            }/><br/><br/>
            Password:<input
            type='password'
            onChange={(e)=>{
                setUser(previousState=>{
                    return{...previousState, password:e.target.value}
                })
            }
            }/><br/><br/>
            <button onClick={signIn}>Sign In</button>
        </div>
    );
}

export default LoginPage;