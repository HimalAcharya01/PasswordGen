import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numallow,setnumallow]=useState(false)
  const [charallow,setcharallow]=useState(false)
  const [pass,setpass]=useState()
  const passgen=useCallback(()=>{
    let pass=''
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numallow){
      str+='0123456789'
    }
    if (charallow){
      str+="!@#$%&*()"
    }
    for (let i = 0; i < length; i++) {
      let char=Math.floor(Math.random()*str.length)
      pass+=str[char]
    }
    setpass(pass)

  },[length,numallow,charallow,setpass])
  return (
    <>
    <div className="body">
    <div className="title">
      <div className="box">
      <p>Password Generator</p>
        <input type="text" value={pass} />
      </div>
    </div>
    </div>
    </>
  )
}

export default App
