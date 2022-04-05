import React from 'react'
import SideBar from '../components/SideBar'
import UserTable from '../components/UserTable'
import "./styles/HomePage.css"


export default function HomePage() {
    return (<div className="homepage">
        <SideBar />
        <UserTable />
    </div>)
}




