import logo from './phpHXP5E1.png';
import './App.css';
import React, { createRef, useState } from 'react'
import { useScreenshot } from 'use-react-screenshot'
function App() {
  const ref = createRef(null)
  const [image, takeScreenshot] = useScreenshot()
  const getImage = () => takeScreenshot(ref.current)
  const width = "40%";
  const height = "40%";
  function checkval(){
    console.log(image);
  }
  return (
    <div>
      <div>
        <button style={{ marginBottom: '10px' }} onClick={getImage}>
          Take screenshot
        </button>
        <button style={{ marginBottom: '10px' }} onClick={()=>checkval()}>
          Check Value
        </button>
      </div>
      <p>
        This is the image for screenshot
      </p>
      <div ref={ref} width={width} height={height}>
        <img src={logo} width="100%" height ="100%" alt="screenshotResult"/>
      </div>
      <p>
        This is the screenshoted image below
      </p>
      <img  width={width} height={height} src={image} alt={'Image for Screenshot'} />
    </div>
  )
}

export default App;
