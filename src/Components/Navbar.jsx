import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import burger from './Assets/Burger_Menu.png' 
import Dark from './Assets/Dark.jpg'
import Light from './Assets/Light.jpg'

const Navbar = ({theme,setTheme}) =>{

    return(
        <>
        <div className="nav_bar" style={{backgroundColor : theme == 'light' ? '#eff1f3' : 'transparent'}}>
            <div className="logo_container">
                <div className="glass"></div>
                <h1 className="logo" style={{color: theme == 'light' ? 'black' : '' }}>Gamor</h1>
            </div>
            <div className="options_container">
                <img className="burger" src={burger} alt="burguer"/>
                <div className="list">
                    <div className="circle_home">
                        <h3 className="list_item"><span style={{color: theme == 'light' ? '#7d38e5' : '' }}>Home</span></h3>
                        <div className="circle_orange" style={{border: theme == 'light' ? 'solid 1px #7d38e5' : '', borderBottom: theme == 'light' ? 'none' : ''}} ></div>
                    </div>
                    <h3 className="list_item" style={{color: theme == 'light' ? 'grey' : '' }}>Streams</h3>
                    <h3 className="list_item" style={{color: theme == 'light' ? 'grey' : '' }}>Party</h3>
                    <h3 className="list_item" style={{color: theme == 'light' ? 'grey' : '' }}>Premium</h3>
                </div>
                <div className="authentication_section">
                    <Link to="/SignIn">
                        <button className="sign_in" style={{color: theme == 'light' ? 'black' : '' }}>Sign in</button>
                    </Link>
                    <Link  to="/CreateAccount">
                        <button className="create_account">Create Account</button>
                    </Link>
                    <div className="toggle" onClick={()=>theme == 'light' ? setTheme('dark') : setTheme('light') } style={{backgroundImage: theme == 'light' ? `url(${Dark})` : `url(${Light})`}}></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar