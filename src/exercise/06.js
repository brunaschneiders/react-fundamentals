// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// Exercise

// function UsernameForm({onSubmitUsername}) {
//   const handleSubmit = e => {
//     e.preventDefault()
//     const usernameValue = e.target.elements.usernameInput.value
//     onSubmitUsername(usernameValue)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input type="text" id="usernameInput" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// 1. 💯 using refs

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    const usernameValue = usernameInputRef.current.value
    onSubmitUsername(usernameValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input ref={usernameInputRef} type="text" id="usernameInput" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
