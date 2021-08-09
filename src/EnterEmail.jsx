import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import {Button} from "@material-ui/core";
import "./EnterEmail.css";
import {setOpen, setClose, getInfo} from "./features/counterSlice";
function EnterEmail() {
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const {toggle} = useSelector((state)=>(state.toggle))
    const Close = ()=>{
        dispatch(setClose())
    } 
    const date = new Date();
    const dated = date.toString().split(" ")[4].split(":")[0];
    console.log(dated > 12);
    var  time
     
    if(dated >= 12){
        time = dated - 12 + "pm"
    }else if (dated < 12 ) {
        time = dated + "am"
    }else if (dated == 0 ){
        time = "00" + "am"
    }else{
        time = "Enter Date"
    }

    
    const sendDetails = {
        id:Math.floor(Math.random() * 10),
        name,
        subject,
        message,
        time
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(getInfo(sendDetails))
        dispatch(setClose())

    }
    return (
        toggle && 
        
        <div className="sendEmail">
            <div className="sendEmail_header">
                <h3>New Message</h3>
                <CloseIcon className="close" onClick={Close}/>
            </div>
            <form onSubmit= {handleSubmit}>
                <input type="text" placeholder="To" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder="Subject" value={subject} onChange = {(e)=> setSubject(e.target.value)} />
                <input type="text" className="sendEmail_message" placeholder="Body" value={message} onChange={(e)=> setMessage(e.target.value)} />
            <div className="sendEmail_options">
                <Button type="submit" className="sendEmail_send">Send</Button>
            </div>
            </form>
        </div>
                
    )
}

export default EnterEmail
