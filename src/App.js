import React from 'react';
import logo from './logo.svg';
import './App.css';
import LogView  from './Log.js'
import Login    from './Login.js'
import Register from './Register.js'

class App extends React.Component {
  state = {
    showRegister:false,
    showLogin:false,
    list:[],
    db:{user:'pass'}}
  showLogin    = ()=> { this.setState({showLogin:true})  }
  hideLogin    = ()=> { this.setState({showLogin:false}) }
  showRegister = ()=> { this.setState({showRegister:true})  }
  hideRegister = ()=> { this.setState({showRegister:false}) }

  register = (item)=> {
    let db = this.state.db;
    db[item.user] = item.pass
    this.setState({db:db});
  }

  loginAttempt = (item)=> {
    let list = this.state.list;
    list.push(item)
    this.setState({list:list});
    if ( ! this.state.db[item.user] ){
      alert(`user ${item.user} does not exist`)
      return;
    }
    if ( this.state.db[item.user] !== item.pass ){
      alert(`user ${item.user} exist Registerbut wrong pass`)
      return;
    }
    alert('hello!');
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
        { this.state.showLogin ?
          <Login hideLogin={this.hideLogin} loginAttempt={this.loginAttempt}/>
          : <button onClick={this.showLogin}>Login</button> }
        { this.state.showRegister ?
          <Register hideRegister={this.hideRegister} register={this.register}/>
          : <button onClick={this.showRegister}>Register</button> }
          <LogView list={this.state.list} />
        </header>
      </div>
    );
  }
}

export default App;
