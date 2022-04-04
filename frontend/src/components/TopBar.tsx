import React from 'react'
import "./styles/TopBar.css"

export default function TopBar() {
    return (<div className='topbar'>
        <img src={`${process.env.PUBLIC_URL}/logo512.png`} className='logo' />  
        <h1 className='header'>User Management Application</h1>
    </div>)
}






