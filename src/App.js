import React,{useEffect} from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import {selectUser,login,logout} from './features/userSlice';
import {useSelector,useDispatch} from 'react-redux';
import Login from './Login';
import {auth,provider} from './firebase';

function App() {
  const user=useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
      auth.onAuthStateChanged((authUser)=>{
        console.log(authUser)
        if(authUser){
          dispatch(login({
            uid:authUser.uid,
            photo:authUser.photoURL,
            email:authUser.email,
            displayName:authUser.displayName,
          }))
        }
        else{
          dispatch(logout())
        }
      })
  },[dispatch])

  return (
    <div className="app">

    {
      user?(
        <>
        <Sidebar />
    
        <Chat />
        </>
      ):(
        <Login />
        )
    }
   
    </div>
  );
}

export default App;
