import React, { Component } from "react";
import CurrentContainer from './CurrentContainer';
import FutureContainer from './FutureContainer';
import PastContainer from './PastContainer';
import sampleState from './sampleState';
import { createTheme } from '@mui/material/styles';

// //more imports?
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#943fb5',
    },
    secondary: {
      main: '#007ef5',
    },
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: [],
      past: [],
      future: [],
      otherCurrent: [],
      otherPast: [],
      otherFuture: []
    };

    // bind functions
    this.fetchAll = this.fetchAll.bind(this);
    this.addBookFetch = this.addBookFetch.bind(this);
  }

  
  componentDidMount() {
    // live data
    this.fetchAll();
  }

  // updates state to reflect current state of database
  fetchAll() {
    fetch('./books/all')
    .then(res => res.json())
    .then(data => {
      // create output arrays
      const current = []; // current reads
      const past = []; // past reads
      const future = []; // next reads
      const otherCurrent = []; // friends' current reads
      const otherPast = []; // friends' past reads
      const otherFuture = []; // friends' next reads
      // iterate through data returned from fetch
      data.forEach(obj => {
        if(obj.userid === 1 && obj.status === 'present') {
          current.push(obj);
        }
        else if(obj.userid === 1 && obj.status === 'past') {
          past.push(obj);
          }
          else if(obj.userid === 1 && obj.status === 'future') {
            future.push(obj);
          }
          else if(obj.userid !== 1 && obj.status === 'present') {
            otherCurrent.push(obj);
          }
          else if(obj.userid !== 1 && obj.status === 'past') {
            otherPast.push(obj);
          }
          else if(obj.userid !== 1 && obj.status === 'future') {
            otherFuture.push(obj);
          }
      });
      
      // update state
      this.setState({ current: current, past: past, future: future, otherCurrent: otherCurrent, otherPast: otherPast, otherFuture: otherFuture});
      }).catch(err => console.log('Problem with fetchAll method: ERROR:', err));
}

// add a book to the database
addBookFetch(userid, title, author, genre, genreId, status, statusId, recommend, review) {
  console.log(`------> inside of addBookFetch Function`);
  // declare requestBody
  const requestBody = {
    title,
    author,
    genre,
    genreId,
    status,
    statusId,
    recommend,
    review,
  };
  console.log(`-----> after requestBody declared, ${requestBody}`);
  console.log(`-----> userId: ${userid}`);
  fetch(`books/${userid}`, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
          'Content-type': 'application/json',
      }
  })
  .then(data => data.json())
  .then(response => {
    // printing response from server
    console.log(`successful addBookFetch request - should get reading list item: ${response}`);
    // update state
    this.fetchAll();
  }).catch(err => console.log('Problem with fetchAll method: ERROR:', err));
};


  
  // render the App, containing the containers representing currently reading, next to read, and past reads.
  render () {
    // if(this.state.hasError) {
    //   return <h1>Somthing went wrong with state, hasError</h1>
    // };
    const { current, past, future, otherCurrent, otherPast, otherFuture } = this.state;
    return (
      <div className= "app">
        <h1>BOOKWORM</h1>
        <div className= "currentFutureDiv" id="theDiv">
          <CurrentContainer current={current} otherCurrent={otherCurrent} addBookFetch={this.addBookFetch}/>
          <FutureContainer future= {future} otherFuture={otherFuture}/>
        </div>
        <div className= "pastDiv">
          <PastContainer past={past} otherPast={otherPast} />
        </div>
      </div>    
    )
  }
}
    
export default App;
