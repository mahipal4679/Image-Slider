import React from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider'

const App:React.FC=()=> {
  return (
    <div > 
      <h1 style={{textAlign:'center',color:'#707070'}}>IMAGE SLIDER</h1>
      <ImageSlider/>
    </div>
  );
}

export default App;
