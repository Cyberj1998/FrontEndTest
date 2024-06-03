import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const CreateAccount = () =>{


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
        <>
        <div className="form_page_container">
        <form action={()=>handleSubmit()} className="form">
            <div className="form_wraper">
                <h1 className="title_form">Create your account</h1>
                <h1 className="username">Username</h1>
                <input type="text" className="username_input" name="username" onChange={()=>handleChange()} placeholder="username"/>
                <h1 className="email">Email</h1>
                <input type="email" className="email_input" name="email" onChange={()=>handleChange()} placeholder="email"/>
                <h1 className="password">Password</h1>
                <input type="password" className="password_input" name="password" onChange={()=>handleChange()} placeholder="password"/>
                <Link to="/">
                    <button className="send" type="submit">Submit</button>
                </Link>
            </div>
            <div className="circles_container">
                <div className="circle_form" id="second_circle" ></div>
                <div className="circle_form" id="third_circle" ></div>
            </div>
        </form>
        </div>
        </>
    )
}

export default CreateAccount