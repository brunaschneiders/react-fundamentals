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

// function UsernameForm({onSubmitUsername}) {
//   const usernameInputRef = React.useRef(null)

//   const handleSubmit = e => {
//     e.preventDefault()
//     const usernameValue = usernameInputRef.current.value
//     onSubmitUsername(usernameValue)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input ref={usernameInputRef} type="text" id="usernameInput" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// 2. 💯 Validate lower-case

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)

  const handleChange = e => {
    const usernameValue = e.target.value
    const isValid = usernameValue === usernameValue.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  const handleSubmit = e => {
    e.preventDefault()
    const usernameValue = e.target.elements.usernameInput.value
    onSubmitUsername(usernameValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input type="text" id="usernameInput" onChange={handleChange} />
      </div>

      {!!error && (
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
      )}

      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
