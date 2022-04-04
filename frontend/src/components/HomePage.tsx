import React from 'react'
import SideBar from './SideBar'
import UserTable from './UserTable'
import "./styles/HomePage.css"


export default function HomePage() {
    return (<div className="homepage">
        <SideBar />
        <UserTable />
    </div>)
}




