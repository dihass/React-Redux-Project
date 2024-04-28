import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";
let isFIrstRender = true;
function App() {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification)
  const cart = useSelector(state => state.cart);
  const isLoggedIn = useSelector(state=> state.auth.isLoggedIn);

  useEffect(()=>{
    if(isFIrstRender){
      isFIrstRender = false;
      return;
    }
    const sendRequest = async()=>{
      //send state as sending req 
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sending request...",
        type: "warning",
      }))
      const res = await  
      fetch('https://react-redux-982a1-default-rtdb.firebaseio.com/cartItems.json',{
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      const data = await res.json();
      // sed state as request is successful
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sent request to database!",
        type: "sucess",
      }))
    };
    sendRequest().catch(err => {
      // send state as error 
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sent failed",
        type: "error",
      }))
    });
  },[cart])
  return (
    <div className="App">
    {notification && <Notification type={notification.type} message={notification.message}/>}
    {!isLoggedIn &&<Auth />}
    {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
