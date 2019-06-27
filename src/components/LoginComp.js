import React, { Component } from 'react';
import './login.css';

class LoginComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  handleClick = () => {
    this.props.history.push('/register')
  }

  render() {
    return (
      <div className="login">
      <div className="col-md-3 log-block">
        <h3>Login</h3>
        <form name="form">
          <div className={'form-group'}>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username"  />
          </div>
          <div className={'form-group'}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            <a href="#" className="btn btn-link text-decoration-none" onClick={this.handleClick}>Register</a>
          </div>
        </form>
      </div>
      </div>
    );
  }
}



export default LoginComp;