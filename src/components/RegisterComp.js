import React, { Component } from 'react';
import './register.css';


class RegisterComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Reguser: {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
      },
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    const { Reguser } = this.state;
    this.setState({
      Reguser: {
        ...Reguser,
        [name]: value
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
  }
  handleClick = () => {
    this.props.history.push('/login')
  }

  render() {
    const { registering } = this.props;
    const { Reguser, submitted } = this.state;
    return (
      <div className="register">
      <div className="col-md-3 reg-block">
        <h3>Register</h3>
        <form className="form"  onSubmit={this.handleSubmit}>
          <div className={'form-group'  + (submitted && !Reguser.firstName ? ' has-error' : '')}>
            <label For="firstName">First Name</label>
            <input type="text" className="form-control" name="firstName" value={Reguser.firstName}
             onChange={this.handleChange} />
            {submitted && !Reguser.firstName &&
              <div className="help-block">First Name is required</div>
            }
          </div>
          <div className={'form-group'  + (submitted && !Reguser.firstName ? ' has-error' : '')}>
            <label For="lastName">Last Name</label>
            <input type="text" className="form-control" name="lastName" value={Reguser.lastName}
             onChange={this.handleChange} />
            {submitted && !Reguser.lastName &&
              <div className="help-block">Last Name is required</div>
            }
          </div>
          <div className={'form-group'  + (submitted && !Reguser.firstName ? ' has-error' : '')}>
            <label For="username">Username</label>
            <input type="text" className="form-control" name="username" value={Reguser.username} 
             onChange={this.handleChange} />
            {submitted && !Reguser.username &&
              <div className="help-block">Username is required</div>
            }
          </div>
          <div className={'form-group'  + (submitted && !Reguser.firstName ? ' has-error' : '')}>
            <label For="password">Password</label>
            <input type="password" className="form-control" name="password"  value={Reguser.password}
             onChange={this.handleChange} />
            {submitted && !Reguser.password &&
              <div className="help-block">Password is required</div>
            }
          </div>
          <div className={'form-group' }>
            <button type="submit" className="btn btn-primary">Register</button>
            <a href="./login" className="btn btn-link text-decoration-none">Cancel</a>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default (RegisterComp);