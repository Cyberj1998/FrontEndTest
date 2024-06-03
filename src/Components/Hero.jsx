import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import avatar1 from './Assets/Start_Lord.png'
import avatar2 from './Assets/Soldier.png'
import addUser from './Assets/Add.png'
import vision from './Assets/vision.png'
import jhon from './Assets/Jhon.png'
import astro from './Assets/Astro1.png'
import settings from './Assets/Settings.png'
import plus from './Assets/plus.png'
import users from './users.json'



const Hero = ({theme,gameCategory,setCategory,youtuber,setYoutuber}) => {
    
    const[mode,setMode]=useState('party')
    
    function displayYoutuber () {
        if(youtuber != ''){
            return(
                <>
                <div className="youtuber">{youtuber}</div>
                </>
            )
        }
    }
    
    return(
        <>
        <div className="hero_container">
            <div className="left_panel" style={{backgroundColor : theme == 'light' ? '#eceff0' : ''}}>
                <div className="wraper">
                    <div className="hero_title_container">
                        <div className="title" style={{color : theme == 'light' ? 'black' : ''}}>
                            start <br/><span className="straming" style={{color : theme == 'light' ? '#fe8944' : ''}}>streaming</span> <br/>games <br/>differently
                        </div>
                    </div>
                    <div className="circles_container">
                        <div className="circle" id="first" style={{border: theme == 'light' ? 'solid 1px #fe8944' : '', borderBottom: theme == 'light' ? 'none' : ''}}></div>
                        <div className="circle" id="second" style={{border: theme == 'light' ? 'solid 1px #fe8944' : '', borderBottom: theme == 'light' ? 'none' : ''}}></div>
                        <div className="circle" id="third" style={{border: theme == 'light' ? 'solid 1px #fe8944' : '', borderBottom: theme == 'light' ? 'none' : ''}}></div>
                    </div>
                </div>
                <div className="sign_up_section">
                    <div className="gamor_description">
                        <p className="gamor_text" style={{color : theme == 'light' ? 'black' : ''}}>gamor now has <span className="stream_party" style={{color : theme == 'light' ? 'black' : ''}}>stream party</span> platform</p>
                    </div>
                    <div className="sign_up_options">
                        <Link to="/CreateAccount">
                        <button className="gamor_account" style={{backgroundColor : theme == 'light' ? '#d6d8da' : '', color: theme == 'light' ? 'black' : '', fontWeight: theme == 'light' ? '700' : ''}}  >Create account</button>
                        </Link>
                        <Link to="/SignIn">
                        <button className="gamor_sign_in" style={{color : theme == 'light' ? 'black' : ''}}>Sign in</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="middle_panel" style={{backgroundColor : theme == 'light' ? '#7e34ed' : ''}}>
                <div className="game_season_section">
                    <h1 className="fornite_season">Fornite New Season</h1>
                    <p className="join_live" style={{color : theme == 'light' ? 'grey' : ''}}>join live stream</p>
                    <div className="clock_container">
                        <div className="add_user">
                            <img src={addUser} className="add_user_icon" alt="add user"/>
                        </div>
                        <div className="clock" style={{color : theme == 'light' ? '#7e34ed' : ''}}>11 : 45</div>
                    </div>
                    <div className="youtuber_container">{displayYoutuber()}</div>
                </div>
                <div className="avatar_section">
                    <div className="left_square" style={{backgroundColor : theme == 'light' ? '#6e05ef' : ''}}>
                        <img src={vision} className="vision" alt="vision"/>
                        <img src={astro} className="astro" alt="astro"/>
                    </div>
                    <div className="right_square" style={{backgroundColor : theme == 'light' ? '#6e05ef' : ''}}>
                        <img src={jhon} className="jhon" alt="jhon"/>
                    </div>
                    <img className="avatar" src={theme == 'light' ? avatar2 : avatar1} style={{width : theme == 'light' ? '200px' : '', height: theme == 'light' ? '450px' : ''}} alt="avatar"/>
                </div>
            </div>
            <div className="right_panel" style={{backgroundColor : theme == 'light' ? '#eceff0' : ''}}>
                <div className="choose_platform_section">
                    <h1 className="choose_platform_title" style={{color : theme == 'light' ? 'black' : ''}}><span>01.</span> Choose Platform</h1>
                    <div className="choose_panel" style={{backgroundColor : theme == 'light' ? '#fdfdfd' : ''}}>
                        <div className="option" id="party" onClick={()=>setMode('party')} style={{backgroundColor: mode == 'party' ? `#30363e` : 'transparent', backgroundColor: theme == 'light' ? '#d3d3d4' : '', color: theme == 'light' ? 'black' : ''}}>&#127881;Party</div>
                        <div className="option" onClick={()=>setMode('match')} style={{backgroundColor: mode == 'match' ? `#30363e` : 'transparent',backgroundColor: theme == 'light' ? '#d3d3d4' : '', color: theme == 'light' ? 'black' : ''}}>Matchs</div>
                        <div className="option" onClick={()=>setMode('streams')} style={{backgroundColor: mode == 'streams' ? `#30363e` : 'transparent', backgroundColor: theme == 'light' ? '#d3d3d4' : '', color: theme == 'light' ? 'black' : ''}}>Streams</div>
                    </div>
                </div>
                <div className="searchingGames_section">
                    <h1 className="search_title" style={{color : theme == 'light' ? 'black' : ''}}><span>02.</span> Searching Game</h1>
                    <div className="search_panel" style={{backgroundColor : theme == 'light' ? '#fdfdfd' : ''}}>
                        <div className="top_search">
                            <input type="text" className="search_game_input" placeholder="Search for Games" spellCheck="false" style={{color: theme == 'light' ? 'black' : ''}} value={gameCategory}/>
                            <div className="settings">
                                <img src={settings} alt="settings"/>
                            </div>
                        </div>  
                        <div className="players_section">
                            {
                                users.map(gamers=>{
                                    return(
                                    gamers.game == gameCategory ? gamers.user.map(streamer=><>
                                    <div className="streamer" style={{backgroundColor: theme == 'light' ? '#eff1f3' : '',color: theme == 'light' ? 'black' : ''}} >{streamer}<img className="add_streamer" style={{backgroundColor: theme == 'light' ? 'grey' : ''}} src={plus} alt="plus" id={streamer} onClick={()=>setYoutuber(streamer)} /></div>
                                    </>)
                                    :
                                    <>
                                    </>
                                    )
                                })
                            }
                        </div>
                        <div className="search_button_container">
                            <button className="search_button" style={{backgroundColor : theme == 'light' ? '#21272e' : '',color: theme == 'light' ? 'whitesmoke' : ''}}>Search Now</button>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero