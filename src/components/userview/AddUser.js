import React, { useState } from 'react'

const AddUser = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form className="form"
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			
			<label>Name</label>
			<input type="text" name="name" className="form-control"
			 value={user.name} onChange={handleInputChange} /><br/>
			<label>Username</label>
			<input type="text" name="username" className="form-control"
			value={user.username} onChange={handleInputChange} /><br/>
			<button className="bttn">Add new user</button>
		</form>
	)
}

export default AddUser;