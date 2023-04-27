import React from 'react'
import RightSide from './RightSide'
import LeftSide from './LeftSide';
function App() {
  return (
    <div style={{'display':'flex', 'justifyContent':'space-evenly'}}>
      <LeftSide/>
      <RightSide/>
    </div>
  )
}

export default App