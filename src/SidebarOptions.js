import React from 'react'
import "./SidebarOption.css"
function SidebarOptions({Icon, title, number, selected}) {
    return (
        <div className={`sidebarOptions ${selected && "sidebarOptions--active"}`}>
            <Icon className="icon"/>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOptions
