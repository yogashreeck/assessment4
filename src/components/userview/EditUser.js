import React, { useState, useEffect } from 'react'

const EditUser = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form className="form"
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" className="form-control"
      value={user.name} onChange={handleInputChange} /><br/>
      <label>Username</label>
      <input type="text" name="username" className="form-control"
      value={user.username} onChange={handleInputChange} /><br/>
      <button  className="btn btn-info butt">Update user</button>
      <button onClick={() => props.setEditing(false)} className="btn btn-dark butt">
        Cancel
      </button>
    </form>
  )
}

export default EditUser;