import React, { Component } from 'react';
import './register.css';


class RegisterComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
      }
    };
  }
  handleClick = () => {
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="register">
      <div className="col-md-3 reg-block">
        <h3>Register</h3>
        <form className="form">
          <div className={'form-group'}>
            <label For="firstName">First Name</label>
            <input type="text" className="form-control" name="firstName" />
          </div>
          <div className={'form-group'}>
            <label For="lastName">Last Name</label>
            <input type="text" className="form-control" name="lastName" />
          </div>
          <div className={'form-group'}>
            <label For="username">Username</label>
            <input type="text" className="form-control" name="username" />
          </div>
          <div className={'form-group'}>
            <label For="password">Password</label>
            <input type="password" className="form-control" name="password" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>
            <a href="#" className="btn btn-link text-decoration-none" onClick={this.handleClick}>Cancel</a>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default (RegisterComp);