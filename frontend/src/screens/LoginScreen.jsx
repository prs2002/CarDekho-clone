import { useState } from 'react'
import Model from 'react-modal'


const LoginScreen = () => {

    const [visible, setvisible] = useState(false);
  return (
    <div>
        <button onClick={()=> setvisible(true)}>Open Model</button>
        <Model isOpen={visible} onRequestClose={()=>setvisible(false)} >
            <h1>Modal Body</h1>
            <button onClick={()=> setvisible(false)}>Close Model</button>
        </Model>
    </div>
  )
}

export default LoginScreen