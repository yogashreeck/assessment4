import React, { Component } from 'react';
import './login.css';

class LoginComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.formHandleSubmit = this.formHandleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  formHandleSubmit(e) {
    e.preventDefault()
    this.setState({ submitted: true });
  }
  // loginClick = () => {
  //   this.props.history.push('/home')
  // }
  handleClick = () => {
    this.props.history.push('/register')
  }


  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div className="login">
        <div className="col-md-3 log-block">
          <h3>Login</h3>
          <form name="form" onSubmit={this.formHandleSubmit} >
            <div className={'form-group'}>
              <label htmlFor="username"><b>Username</b></label>
              <input type="text" className="form-control" name="username" value={username} id="defaultFormRegisterPasswordEx4"
                onChange={this.handleChange} />
              {submitted && !username &&
                <div>Username is required</div>
              }
            </div>
            <div className={'form-group'}>
              <label htmlFor="password"><b>Password</b></label>
              <input type="password" className="form-control" name="password" value={password}
                onChange={this.handleChange} />
              {submitted &&
                <div>Password is required</div>
              }
            </div>
            <div className="form-group">
              <button className="btn btn-primary" onClick={this.loginClick}>Login</button>
              <a href="#" className="btn btn-link text-decoration-none"
                onClick={this.handleClick}>Register</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}



export default LoginComp;