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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    
}
  
  handleClick = () => {
    this.props.history.push('/register')
  }


  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div className="login">
        <div className="col-md-3 col-lg-3 log-block">
          <h2>Login</h2>
          <form className="form"  onSubmit={this.handleSubmit} >
            <div className={'form-group' + (submitted && !username ? ' has-error' : '') }>
              <label htmlFor="username"><b>Username</b></label>
              <input type="text" class="form-control" name="username"  value={username} 

              onChange={this.handleChange} />
              {submitted && !username &&
                <div className="help-block" >Username is required</div>
              }
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <label htmlFor="password"><b>Password</b></label>
              <input type="password" className="form-control" name="password" value={password}
                onChange={this.handleChange} />
              {submitted && !password &&
               <div className="help-block">Password is required</div>
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