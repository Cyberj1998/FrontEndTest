import React from 'react'
import { useState } from 'react'
import Action from './Assets/Action.jpg'
import Adventure from './Assets/Adventure.jpg'
import Arcade from './Assets/Arcade.jpg'
import Fantasy from './Assets/Fantasy.jpg'
import Shooter from './Assets/Shooter.jpg'
import Sport from './Assets/Sport.jpg'
import Strategy from './Assets/Strategy.jpg'


const Categories = ({theme,setTheme,gameCategory,setGameCategory,youtuber,setYoutuber}) => {


    const[categorie,setCategorie] = useState('')
    function setAction () {
        setGameCategory('god of war')
        setCategorie("action")
        
    }
    function setSport () {
        setGameCategory("fifa")
        setCategorie("sport")
        
    }
    function setAdventure () {
        setGameCategory("baldurs gate")
        setCategorie("adventure")
        
    }
    function setArcade () {
        setGameCategory("shovel knight")
        setCategorie("arcade")
        
    }
    function setFantasy () {
        setGameCategory("final fantasy")
        setCategorie("fantasy")
        
    }
    function setStrategy () {
        setGameCategory("age of empires")
        setCategorie("strategy")
        
    }
    function setShooter () {
        setGameCategory("fortnite")
        setCategorie("shooter")
    }

    /*style={{display: 'flex', flexWrap: games ? 'wrap' : 'nowrap'}}*/
    return(
        <>
        <div className="categories_section" style={{backgroundColor: theme == 'light' ? '#eff1f3' : ''}}>
            <div className="categories_container">
                <h1 className="categories_title">Trending Categories</h1>
                <div className="categories_wraper">
                    <div className="categorie" onClick={()=>setAction()} style={{backgroundImage: categorie == 'action' ? `url(${Action})` : '', backgroundColor: theme == 'light' ? '#cdcfcf' : '', color: theme == 'light' ? 'grey' : ''}} ><span id="one">/</span><span id="number">01</span><br/>Action Games<br/>-></div>
                    <div className="categorie" onClick={()=>setSport()} style={{backgroundImage: categorie == 'sport' ? `url(${Sport})` : '', backgroundColor: theme == 'light' ? '#cdcfcf' : '', color: theme == 'light' ? 'grey' : ''}}><span id="two">/</span><span id="number">02</span><br/>Sport Games<br/>-></div>
                    <div className="categorie" onClick={()=>setAdventure()} style={{backgroundImage: categorie == 'adventure' ? `url(${Adventure})` : '', backgroundColor: theme == 'light' ? '#cdcfcf' : '', color: theme == 'light' ? 'grey' : ''}}><span id="three">/</span><span id="number">03</span><br/>Adventure Games<br/>-></div>
                    <div className="categorie" onClick={()=>setArcade()} style={{backgroundImage: categorie == 'arcade' ? `url(${Arcade})` : '', backgroundColor: theme == 'light' ? '#cdcfcf' : '', color: theme == 'light' ? 'grey' : ''}}><span id="four">/</span><span id="number">04</span><br/>Arcade Games<br/>-></div>
                    <div className="categorie" onClick={()=>setFantasy()} style={{backgroundImage: categorie == 'fantasy' ? `url(${Fantasy})` : '', backgroundColor: theme == 'light' ? '#cdcfcf' : '', color: theme == 'light' ? 'grey' : ''}}><span id="five">/</span><span id="number">05</span><br/>Fantasy Games<br/>-></div>
                    <div className="categorie" onClick={()=>setStrategy()} style={{backgroundImage: categorie == 'strategy' ? `url(${Strategy})` : '', backgroundColor: theme == 'light' ? '#cdcfcf' : '', color: theme == 'light' ? 'grey' : ''}}><span id="six">/</span><span id="number">06</span><br/>Strategy Games<br/>-></div>
                    <div className="categorie" onClick={()=>setShooter()} style={{backgroundImage: categorie == 'shooter' ? `url(${Shooter})` : '', backgroundColor: theme == 'light' ? '#cdcfcf' : '', color: theme == 'light' ? 'grey' : ''}}><span id="seven">/</span><span id="number">07</span><br/>Shooter Games<br/>-></div>
                    <div className="categorie" onClick={()=>setCategorie("all")} style={{backgroundColor: theme == 'light' ? '#a3a2a2' : '', color: theme == 'light' ? 'grey' : '', backgroundColor: categorie == 'all' ? '#232425' : ''}}><span className="all">View All</span><br/><span className="all">All Categories</span><br/>-></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Categories