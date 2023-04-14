import React from 'react'
import { useContext } from 'react'
import { MyAppContext } from './MyApp'



export default React.memo(
  function HelloComponent({ onMessageClick }) {
    const conText = useContext(MyAppContext)
    console.log(conText.isLogin);
    return <div onClick={onMessageClick}>{ conText.message}</div>
  }) 

