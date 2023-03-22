
import React from 'react'
import { getPageComponent } from './hooks/page'

function App() {
  const Component = getPageComponent()

  return(
    <div data-theme="dark">
      {Component}
    </div>
  )
}

export default App
