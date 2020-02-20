import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ratingContract } from "./EthereumSetup";
import {ShowVotes } from "./ShowVotes";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      candidates : [{name:'Nick',rating:0,creationTime:0},{name:'Rama',rating:0,creationTime:0},{name:'Jason',rating:0,creationTime:0}]
    }
    this.handleVoting=this.handleVoting.bind(this)
  }

handleVoting(candidate){
    ratingContract.voteForCandidate(candidate)
    let votes=ratingContract.totalVotesFor(candidate).toNumber()
    let timestamp = Date.now();
    timestamp = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
    this.setState({candidates:this.state.candidates.map(
      (el)=>el.name===candidate? Object.assign({},el,{rating:votes},{creationTime:timestamp}):el
    
    )});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require('./eth.png')} className="App-logo" alt="logo" />
          <h1 className="App-title">Online voting application using Ethereum blockchain</h1>
        </header>
        <p className="App-intro">
          The vote count will increment as soon as the vote is recorded on the blockchain.
        </p>
        <div className="candidate-table">
          <ShowVotes candidates={this.state.candidates} vote={this.handleVoting}/>
        </div>
      </div>
    );
  }
}

export default App;
