import React, { Component } from 'react';
import './add.css';

class AddViewComp extends Component {
  render() {
    return (
      <div className="container">
        <h1><b>React Application</b></h1>
        <div class="row">
          <div className={"col-md-5 form-group add"}>
            <form className="form">
              <h4><b>Add User</b></h4>
              <div className="nameblock">
                <label For="Name"><b>Name</b></label>
                <input type="text" className="form-control" /><br />
                <label For="Username"><b>Username</b></label>
                <input type="text" className="form-control" /><br />
                <button className="bttn">Add new user</button>
              </div>
            </form>
          </div>
          <div className={"col-md-6 offset-md-1 form"}>
            <h4><b>View users</b></h4>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Actions</th>
                </tr>
              </thead>
              
              <tbody>
                <tr>
                  <td>No users</td>
                  <td></td>
                  <td></td>
                </tr>
             
              </tbody>
            </table>
          </div>
        </div>
      </div>

    )
  }
}

export default AddViewComp;