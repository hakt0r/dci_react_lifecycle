import React from 'react';

class LogLine extends React.Component {
  componentDidMount(){
    this.timer = setInterval( ()=>{
      this.forceUpdate()
    }, 1000 )
  }
  componentWillUnmount = ()=> {
    clearTimeout(this.timer);
  }
  render(){
    let item = this.props.item;
    let diff = new Date( (new Date) - item.time );
    return (
      <div>
        {item.user} logged in with pw: {item.pass} {diff.getSeconds()}s ago
      </div>)
  }
}

class LogView extends React.Component {
  render() {
    return this.props.list.map( (item)=>{
      return <LogLine item={item} />
    });
  }
}

export default LogView;
