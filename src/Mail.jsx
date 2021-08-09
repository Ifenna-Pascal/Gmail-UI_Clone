 import React, { useEffect } from 'react';
 import {getInfoById} from "./features/counterSlice";
 import "./Mail.css";
 import { useDispatch, useSelector } from 'react-redux';
 import {IconButton} from "@material-ui/core";
import { ArrowBack, MoveToInbox, Error, Delete, Email, WatchLater, CheckCircle, LabelImportant, MoreVert, UnfoldMore, Print, ExitToApp } from '@material-ui/icons';

 function Mail({history}) {
     const dispatch = useDispatch();
     const data = useSelector(state=> (state.toggle));
     console.log(data);
    const params = history.location.pathname.split("/")[2];
    useEffect(()=>{
        dispatch(getInfoById(params))
    }, [])
     return (
         <div className="mail">
            <div className="mailtools">
                <div className="mailtool_left">
                    <IconButton onClick={()=> history.push("/")}>
                        <ArrowBack/>
                    </IconButton>
                    <IconButton>
                        <MoveToInbox/>
                    </IconButton>
                    <IconButton>
                        <Error/>
                    </IconButton>
                    <IconButton>
                        <Delete/>
                    </IconButton>
                    <IconButton>
                        <Email/>
                    </IconButton>
                    <IconButton>
                        <WatchLater/>
                    </IconButton>
                    <IconButton>
                        <CheckCircle/>
                    </IconButton>
                    <IconButton>
                        <LabelImportant/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>'
                </div>
                <div className="mailtool_right">
                    <IconButton>
                        <UnfoldMore/>
                    </IconButton>
                    <IconButton>
                        <Print/>
                    </IconButton>
                    <IconButton>
                        <ExitToApp/>
                    </IconButton>
                </div>
            </div>
            <div className="mail_body">
                <div className="mailbody_header">
                    <h2>Subject</h2>
                    <LabelImportant className="important"/>
                    <p>Title</p>
                    <p className="time">10pm</p>
                </div>
                <div className="mail_message">
                    This is a message
                </div>
            </div>
         </div>
     )
 }
 
 export default Mail
 