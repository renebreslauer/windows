import React from 'react'
import '../Navbar/Navbar.scss'
import WindowsLogo from '../../assets/windows-logo.png'
import IELogo from '../../assets/ie-logo.png'


function Navbar () {
    return (
        <div className='nav-wrapper'>
            <div className='nav-container'>
                <div className='nav-left'>
                    <button class='start-btn'><img src={WindowsLogo} class='windows-logo' alt=''/>Start</button>
                    <div class='nav-icons-left'>
                    <img src={IELogo} class='nav-icons-left-logo' alt=''/>

                    </div>
                </div>
                <div class='nav-icons-right'>
                    <div class='nav-clock'></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar