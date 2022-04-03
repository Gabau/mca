import React from 'react'
import SideBar from './SideBar'
import UserTable from './UserTable'
import "./HomePage.css"


export default function HomePage() {
    return (<div className="homepage">
        <SideBar />
        <UserTable />
    </div>)
}




