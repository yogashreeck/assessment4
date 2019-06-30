import React, { useState, Fragment } from 'react'
import AddUser from './userview/AddUser'
import EditUser from './userview/EditUser'
import Table from './userview/Table'
import './add.css';

const AddViewComp = () => {
  // Data
  const usersData = []

  const initialFormState = { id: null, name: '', username: '' }

  // Setting state
  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setEditing(false)

    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editRow = user => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  };


  return (
    <div className="container">
      <div className="row">
      <div className="col-md-6">
      <h1>React Application</h1>
      </div>
      <div className="col-md-2 offset-md-4">
        <h3><a href='./login'>Logout</a></h3>
      </div>
      </div>
      <div className="row">
        <div className={"col-md-5 "}>
        <div >
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUser editing={editing} setEditing={setEditing} currentUser={currentUser}
                updateUser={updateUser} />
            </div>
          ) : (
              <div>
                <h4>Add user</h4>
                <AddUser addUser={addUser} />
              </div>
            )}
        </div>
        </div>
        <div className={"col-md-5 offset-md-1 "}>
        <div>
          <h4>View users</h4>
          <Table users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default AddViewComp;