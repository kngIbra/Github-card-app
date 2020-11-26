import React, { Component } from 'react';
import './App.css'
import CardList from './components/CardList';
import Form from './components/Form';

class App extends Component{

  state={
    testData:[]
  }
  
  addNewProfile = (profileData) =>{
    this.setState(prevState => ({
      testData: [...prevState.testData, profileData]
    }))
  }

  render(){

    return(
      <div>
        <div className="header">Github Card</div>
        <Form onAdd = {this.addNewProfile}/>
        <CardList profiles = {this.state.testData}/>
      </div>
    )
  }
}

export default App;
