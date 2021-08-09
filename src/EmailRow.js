import { Checkbox, IconButton } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import React from 'react'
import "./EmailRow.css";

function EmailRow({id, subject, title, description, time}) {
    const history  = useHistory()
    return (
        <div className="emailRow">
            <div className="emailRowOptions">
                <Checkbox onClick= {()=>history.push(`/mail/${id}`)}/>
                <IconButton>
                    <StarBorderOutlined/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined/>
                </IconButton>
            </div>
            <h3 className="title">{title}</h3>
            <div className="message" >
                <h4>{subject}{" "}
                <span className="description"> -  {description}</span>
                
                </h4>
            </div>
            <p className="time">{time}</p>
        </div>
    )
}

export default EmailRow
