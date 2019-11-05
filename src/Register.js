import React from 'react';

class Register extends React.Component {
  state = {user:"",pass:"",pass2:"",message:''}

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
    this.setState({
      [e.target.name]: e.target.value,
    });

    if ( e.target.type === 'password' ){
      if ( e.target.value.length < 9 ){
        e.target.style.backgroundColor = 'yellow'
        this.setState({message:'at least 8 chars'})
      } else {
        e.target.style.backgroundColor = 'green'
        this.setState({message:''})
      }
    }

    if ( e.target.name === 'pass2' ){
      if ( e.target.value !== this.state.pass ) {
        e.target.style.backgroundColor = 'yellow'
      } else {
        e.target.style.backgroundColor = 'green'
      }
    }
  }

  submit = (e)=> {
    e.preventDefault()
    // check password length
    if ( this.state.pass.length < 9 ){
      alert('password too short')
      return; }
    if ( this.state.pass !== this.state.pass2 ) {
      alert('passwords dont match')
      return; }
    this.props.register(this.state)
    this.props.hideRegister()
  }

  render(){
    return (
      <form onSubmit={this.submit}>
        <input name="user" placeholder="user" onChange={this.change} value={this.state.user}/><br/>
        <input name="pass" type="password" placeholder="pass" onChange={this.change} value={this.state.pass}/><br/>
        <input name="pass2" type="password" placeholder="pass" onChange={this.change} value={this.state.pass2}/><br/>
        {this.state.message}<br/>
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default Register;
