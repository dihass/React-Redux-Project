import React from "react";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";



const Notification = ({type,message}) =>{
    const dispatch = useDispatch();
    const notification = useSelector(state => state.ui.notification);
    const handleClose =()=>{
        dispatch(uiActions.showNotification({
            open: false
        }))
    }
    return (
        <div className="notification">
            {notification.open && <Alert onClose={handleClose} icon={<CheckIcon fontSize="inherit" />} severity={type}>{message}</Alert>}
        </div>
    );
}
export default Notification