import { Button, IconButton } from '@material-ui/core';
import React, { useEffect } from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOptions";
import InboxIcon from "@material-ui/icons/Inbox";
import AddIcon from "@material-ui/icons/Add"
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DuoIcon from "@material-ui/icons/Duo";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import {useSelector, useDispatch} from "react-redux";
import {setOpen} from "./features/counterSlice"
function Sidebar() {
    const dispatch = useDispatch();
    const Toggle = ()=>{
        dispatch(setOpen())
    }
    return (
        <div className="sidebar">
            <Button className="sidebar_compose" onClick={Toggle} startIcon ={<AddIcon fontsize="large"/>}>Compose</Button>
            <SidebarOption selected="true" Icon={InboxIcon} title="Inbox" number={54}/>
            <SidebarOption  Icon={StarIcon} title="Stared" number={22}/>
            <SidebarOption  Icon={AccessTimeIcon} title="Snoozed" number={54}/>
            <SidebarOption  Icon={LabelImportantIcon} title="Important" number={54}/>
            <SidebarOption  Icon={NearMeIcon} title="Sent" number={54}/>
            <SidebarOption  Icon={NoteIcon} title="Drafts" number={54}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={54}/>
            <div className="sidebar_footer">
                <div className="sidebar_footerIcons">
                    
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>

                </div>

            </div>

        </div>
    )
}

export default Sidebar
