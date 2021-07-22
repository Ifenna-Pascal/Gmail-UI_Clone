import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import {Button} from "@material-ui/core";
import "./EnterEmail.css";
import {setClose} from "./features/counterSlice";
function EnterEmail() {
    const dispatch = useDispatch()
    const {toggle} = useSelector((state)=>(state.toggle))
    const Close = ()=>{
        dispatch(setClose())
    }
    return (
        toggle && 
        
        <div className="sendEmail">
            <div className="sendEmail_header">
                <h3>New Message</h3>
                <CloseIcon className="close" onClick={Close}/>
            </div>
            <form>
                <input type="text" placeholder="To" name="" />
                <input type="text" placeholder="Subject" name="" />
                <input type="text" className="sendEmail_message" placeholder="Body" name="" />
            <div className="sendEmail_options">
                <Button className="sendEmail_send">Send</Button>
            </div>
            </form>
        </div>
                
    )
}

export default EnterEmail
