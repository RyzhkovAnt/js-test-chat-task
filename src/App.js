import React, { Component } from 'react';
import './App.css';
import { Authorization } from './components/Authorization'
import MessageList from './components/MessagesList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuth: false,
      mock:null,
      messages: [],
      users: []
    }
  }
  clearMessages(){
    this.setState({messages:[]})
  }

  addMessage(message, sender = 'otherUsers') {
    message.sender = sender
    this.setState(prevState => ({ messages: [...prevState.messages, message] }))
  }

  render() {
    if (localStorage.getItem('AuthUser')===null) {
      return (<Authorization auth={this.authHandler} users={this.state.users} />)
    }
    else {
      return (<MessageList messages={this.state.messages} 
        addMessage={ this.addMessage.bind(this)}
        curUser={JSON.parse(localStorage.getItem('AuthUser'))}
        clearMessage={this.clearMessages.bind(this)}
        />)
    }
  }

  authHandler = (succsess) => {
    this.setState({ isAuth: succsess })
  }
}

export default App;
