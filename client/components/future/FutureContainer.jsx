import React, { Component } from "react";
import FutureEntry from './FutureEntry';
import BlankFutureEntry from './BlankFutureEntry';
import Button from '@mui/material/Button';
//import OtherCurrentContainer from './OtherCurrentContainer';

class FutureContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
      view: true,
      submit: false,
      cancel: false,
      hidden: true,
      //status: 0
    }
    //bind functions
    this.addBook = this.addBook.bind(this);
    //this.viewOtherCurrent = this.viewOtherCurrent.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  addBook(){
      this.setState({added: true})
  }

  // viewOtherCurrent(){
  //   if(this.state.hidden === true) this.setState({ hidden: false });
  //   else this.setState({ hidden: true });
  // }

  // handleSubmit(e){
  //   e.preventDefault();
  //   this.setState({submit: true})
  // }

  handleCancel(e){
    e.preventDefault();
    this.setState({added: false})
  }

  render () {
      
    const { current, past, future, otherCurrent, otherPast, otherFuture, addBookFetch } = this.props;
    // const { hidden } = this.state;
    const futureEntries = [];

    if(this.state.submit === true){
      futureEntries.push(
        <FutureEntry handleSubmit={this.handleSubmit}/>
      )
      this.state.addBook = false;
    }
    if(this.state.added === true) {
      futureEntries.push(
        <BlankFutureEntry handleCancel={this.handleCancel} handleSubmit={this.handleSubmit} addBookFetch= {addBookFetch} />
      )
      this.state.added = false;
    }
  
    for(let i=0; i<this.props.future.length; i++){
      futureEntries.push(
        <FutureEntry key={this.props.future[i].readinglistid}
        title= {this.props.future[i].title}
        author= {this.props.future[i].author}
        genre= {this.props.future[i].genre}
        />
      )
    }
    
    return (
        <div className="futureContainer">
          <h2>NEXT READS</h2>
          <Button onClick= {this.addBook} className='addBooksButton' id= 'addButton' size="small" color="secondary" variant="contained">Add Book</Button>
          { futureEntries }
        </div>
    )
   } 
 }

export default FutureContainer;