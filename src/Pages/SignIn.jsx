import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'


function SignIn () {
    const[formData,setFormData]=useState({name:"",email:"",password:""})
    
    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('./register.json',{
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json',
            },
            body: JSON.stringify(formData)
        })
        const data = await response.json();
        console.log(data)
    }
    return(
        <div className="sign_in_container">
            <form action={()=>handleSubmit()} className="sign_in_form">
                <div className="sign_wraper">
                    <h1 className="sign_in_title">Jump in our world</h1>
                    <h1 className="username_sign">Username</h1>
                    <input type="text" className="username_sign_input" name="username" onChange={()=>handleChange()} placeholder="username"/>
                    <h1 className="password_sign">password</h1>
                    <input type="password" className="password_sign_input" name="password" onChange={()=>handleChange()} placeholder="passswrod"/>
                    <Link to="/">
                    <button className="send_sign">Sign In</button>
                    </Link>
                </div>
                <div className="circles_container_sign">
                    <div className="circle_sign" id="second_sign" ></div>
                    <div className="circle_sign" id="third_sign" ></div>
                </div>
            </form>
        </div>
    )
}

export default SignIn