import React from 'react';

class Login extends React.Component {
  state = {user:"",pass:""}
  constructor(props){
    super(props);
    console.log('constructor was called');
  }
  componentDidMount(){
    // this happens when the elements have been added to the document
    console.log('componentDidMount')
    let userField = document.querySelector('[name="user"]');
    let passField = document.querySelector('[name="pass"]');
    userField.focus()
    userField.onkeydown = (e)=> {
      if ( e.key === 'Enter' || e.key === 'Tab' ){
        passField.focus()
        e.preventDefault()
      }
    }
    document.querySelector('.App-header').style.backgroundColor = 'red'
  }
  componentDidUpdate(){
    // this happens after an update
    console.log('componentDidUpdate')
  }
  componentWillUnmount(){
    // this happens before the elements are removed from the document
    console.log('componentWillUnmount')
    document.querySelector('.App-header').style.backgroundColor = 'black'
  }
  change = (e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  submit = (e)=> {
    e.preventDefault()
    this.props.loginAttempt(Object.assign(this.state,{time:new Date}))
    this.props.hideLogin()
  }
  render(){
    return (
      <form onSubmit={this.submit}>
        <input name="user" placeholder="user" onChange={this.change} value={this.state.user}/><br/>
        <input name="pass" type="password" placeholder="pass" onChange={this.change} value={this.state.pass}/><br/>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
