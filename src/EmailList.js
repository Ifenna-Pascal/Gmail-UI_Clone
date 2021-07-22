import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownButton from '@material-ui/icons/ArrowDropDown';
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CheveronLeftIcon from "@material-ui/icons/ChevronLeft";
import CheveronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Section from "./Section"
import EmailRow from './EmailRow';
import EnterEmail from "./EnterEmail"
import React from 'react';
import "./EmailList.css";
// import { ArrowDropDownCircleRounded } from '@material-ui/icons';

function EmailList() {
    return (
        <div className="emailList">
            <div className="emailListSettings">
                <div className="emailListSettings_left">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownButton/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailListSettings_right">
                 
                    <IconButton>
                        <CheveronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <CheveronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="emailList_sections">
                <Section Icon={InboxIcon} title="primary" color="red" selected/>
                <Section Icon={PeopleIcon} title="social" color="blue" />
                <Section Icon={LocalOfferIcon} title="promotion" color="green" />
            </div>
            <div className="emailList_List">
                <EmailRow title="Tswitch" time="10pm" subject="What's In Next Guys" description="Hey guys just started building cool stuffs"/>
                <EmailRow title="Tswitch" time="10pm" subject="What's In Next Guys" description="Hey guys just started building cool stuffs"/>
                <EmailRow title="Tswitch" time="10pm" subject="What's In Next Guys" description="Hey guys just started building cool stuffs"/>
                <EmailRow title="Tswitch" time="10pm" subject="What's In Next Guys" description="Hey guys just started building cool stuffs"/>
                <EmailRow title="Tswitch" time="10pm" subject="What's In Next Guys" description="Hey guys just started building cool stuffs"/>
            </div>
            <EnterEmail/>
        </div>
    )
}

export default EmailList
