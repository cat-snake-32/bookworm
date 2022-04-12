import React, { Component } from "react";
import PastEntry from './PastEntry'
import BlankPastEntry from './BlankPastEntry';
import Button from '@mui/material/Button';
import OtherPastContainer from './OtherPastContainer';

class PastContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
      view: true,
      submit: false,
      cancel: false,
      hidden: true
    }
    //bind functions
    this.addBook = this.addBook.bind(this);
    this.viewOtherCurrent = this.viewOtherCurrent.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
 
  addBook(){
      this.setState({added: true})
  }

  viewOtherCurrent(){
    if(this.state.hidden === true) this.setState({ hidden: false });
    else this.setState({ hidden: true });
  }

  handleCancel(e){
    e.preventDefault();
    this.setState({added: false});
  }

  render () {
    const { current, past, future, otherCurrent, otherPast, otherFuture, addBookFetch } = this.props;
    const { hidden } = this.state;
    const pastEntries = [];

    if(this.state.added === true) {
      pastEntries.push(
        <BlankPastEntry handleCancel={this.handleCancel} addBookFetch={addBookFetch}/>
      ) 
    }
  
    for(let i=0; i<this.props.past.length; i++){
      pastEntries.push(
        <PastEntry 
        title= {this.props.past[i].title}
        author= {this.props.past[i].author}
        genre= {this.props.past[i].genre}
        recommend= {this.props.past[i].recommend}
        review= {this.props.past[i].review}
        />
      )
    }

    return (
        <div className="pastContainer">
          <h2>PAST READS</h2>
          <Button onClick= {this.addBook} className='addBooksButton' id= 'addButton' size="small" color="secondary" variant="contained">Add Book</Button>
          { pastEntries }
           <div>
             <Button onClick={this.viewOtherCurrent} id='viewOtherCurrent' size="small" color="secondary" variant="contained"> + What My Friends Have Read</Button>
           </div >
           <div style={{ display: hidden ? "none" : "contents" }}>
             <OtherPastContainer 
                otherPast={this.props.otherPast} 
            />
          </div>
        </div>
    )
   } 
 }

export default PastContainer;