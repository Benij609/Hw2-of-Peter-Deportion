
import React, { startTransition, useState, useTransition } from 'react';
import './App.css'

interface Superfags{
  Colors:string
Coloring:string
}

function App( ){
  const [displayColor, setDisplayColor] = useState('white')


const GoWhite = () =>{
  setDisplayColor('white')

}


  return (
 //  <>
//   <Colorspals Coloring="Red>"/>
// <Colorspals Coloring="Blue"/>
// <Colorspals Coloring="Green"/>
// <Finders Coloring ={useState}/>
//</>
  <>
<ColorSwitcher Colors='Red' Coloring="red"/>
<ColorSwitcher Colors='Green' Coloring="Green"/>
<ColorSwitcher Colors='Blue' Coloring="Blue"/> 

<div>
  <p></p>
    <button onClick={() => GoWhite()} >
    Reset
    </button>
   <div id="up" style={{ backgroundColor: displayColor, width: '330px', height: '330px', margin: "20px auto", }}>
  </div>
</div> 
  </>
 


 )

  function ColorSwitcher(prop:Superfags) {

 return (
 
 <>
  <button id="rah" style={{color:prop.Coloring, border:prop.Coloring, }} onClick={() => setDisplayColor(prop.Coloring)} >
    {prop.Coloring} </button>
    </>
) 
 }






    // <div id="root">
    //   <div id='help'>
    //   <button id='Red'
    //    onClick={() => setDisplayColor('Red')}
    //    >
    //       Red
    //   </button>
    //   <button id='Blue'
    //    onClick={() => setDisplayColor('Blue')}
    //   >
    //       Blue
    //   </button>
    //   <button id='Green'
    //       onClick={() => setDisplayColor('Green')}
    //   >
    //       Green
    //   </button>
    //   </div>
    //      <div style={{}}>
    //        <button style={{width:'250px'}}
    //         onClick={() => setDisplayColor('white')}>
    //          Reset
    //   </button>
    //     </div>
    //   <div style={{ backgroundColor: displayColor, width: 'auto', height: '500px', marginTop: '20px', maxWidth:'1000px' }}>
     
    //   </div>
    // </div>

 
 

}
export default App;


